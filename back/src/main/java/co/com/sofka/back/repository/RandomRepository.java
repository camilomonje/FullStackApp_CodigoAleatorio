package co.com.sofka.back.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;

import co.com.sofka.back.model.Random;

public interface RandomRepository extends ReactiveMongoRepository<Random, String>{
    
}
