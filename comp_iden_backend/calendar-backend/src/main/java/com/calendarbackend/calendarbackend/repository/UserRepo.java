package com.calendarbackend.calendarbackend.repository;

import com.calendarbackend.calendarbackend.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, String> {
}
