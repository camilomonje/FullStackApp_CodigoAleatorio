package co.com.sofka.back.service;

import co.com.sofka.back.dto.RequestDTO;
import co.com.sofka.back.model.Random;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface RandomService {
    Mono<Random> save(RequestDTO request);
}
