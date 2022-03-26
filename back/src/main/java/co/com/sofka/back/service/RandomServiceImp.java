package co.com.sofka.back.service;

import co.com.sofka.back.dto.RequestDTO;
import co.com.sofka.back.model.Random;
import co.com.sofka.back.repository.RandomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class RandomServiceImp implements RandomService {

    @Autowired
    private RandomRepository repository;

    @Override
    public Mono<Random> save(RequestDTO request) {
        return Mono.just(new Random()).map(doc -> {
            doc.setDate(new Date());
            // doc.setCodigo(stringRandom(request.getCaracteres(), request.getCantidadDeCodigos()));
            var list = Stream
                    .of(stringRandom(
                            request.getCantidadDeCaracteres(),
                            request.getCantidadDeCodigos(),
                            request.isNumeric(),
                            request.isUpperCase(),
                            request.isLowerCase()
                    ))
                    .collect(Collectors.joining(","));
            doc.setCodigo(list);

            return doc;
        }).flatMap(repository::save);
    }

    private final String MAYUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private final String MINUSCULAS = "abcd";
    private final String NUMEROS = "0123456789";

    private String[] stringRandom(
            int cantidadDeCaracteres,
            int cantidadDeCodigos,
            boolean numeric,
            boolean upperCase,
            boolean lowerCase) {

        String caracteres = numeric ? NUMEROS:"";
        caracteres = upperCase ? caracteres + MAYUSCULAS : caracteres;
        caracteres = lowerCase ? caracteres + MINUSCULAS : caracteres;

        String[] list = new String[cantidadDeCodigos];
        for (int j = 0; j < cantidadDeCodigos; j++) {
            String codigo = "";
            for (int i = 0; i < cantidadDeCaracteres; i++) {
                int aleatorio = (int) (Math.random() * caracteres.length());

                codigo += (caracteres.charAt(aleatorio));
            }
            list[j] = codigo;
        }

        return list;
    }


}
