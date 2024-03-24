package com.MongoSpring.MongoSpring.Controller;

import com.MongoSpring.MongoSpring.Model.User;
import com.MongoSpring.MongoSpring.Repository.UserRepo;
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

//    @GetMapping("/profile/{id}")
//    public User getUser(@PathVariable String id) {
//        return userRepo.findById(String.valueOf(id)).orElse(null);
//    }
    @CrossOrigin
    @GetMapping("/profile/{id}")
    public User getProfile(@PathVariable String id) {
        return profileRepo.findById(String.valueOf(id)).orElse(null);
    }
}
