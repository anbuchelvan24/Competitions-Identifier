package com.MongoSpring.MongoSpring.Repository;

import com.MongoSpring.MongoSpring.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}
