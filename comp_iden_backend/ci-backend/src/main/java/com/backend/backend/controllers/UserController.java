package com.backend.backend.controllers;

import com.backend.backend.models.User;
import com.backend.backend.repository.UserRepo;
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
