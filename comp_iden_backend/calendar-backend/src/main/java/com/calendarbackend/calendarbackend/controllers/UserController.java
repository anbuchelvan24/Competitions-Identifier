package com.calendarbackend.calendarbackend.controllers;

import com.calendarbackend.calendarbackend.models.User;
import com.calendarbackend.calendarbackend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    UserRepo profileRepo;
    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        profileRepo.save(user);
    }

    @CrossOrigin
    @GetMapping("/profile/{id}")
    public User getProfile(@PathVariable String id) {
        return profileRepo.findById(String.valueOf(id)).orElse(null);
    }
}
