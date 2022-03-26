package co.com.sofka.back.controller;

import co.com.sofka.back.dto.RequestDTO;
import co.com.sofka.back.model.Random;
import co.com.sofka.back.service.RandomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/random")
public class RandomController {

    @Autowired
    private RandomService service;

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    private Mono<Random> save(@RequestBody RequestDTO request) {
        return service.save(request);
    }

}
