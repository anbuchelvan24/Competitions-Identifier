package com.backend.backend.controllers;

import com.backend.backend.models.GalleryEvents;
import com.backend.backend.repository.GalleryEventsRepo;
import com.backend.backend.service.GalleryEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GalleryController {

    @Autowired
    private GalleryEventService galleryService;
    @GetMapping("/galleryEventData")
    public List<GalleryEvents> getAllGalleryEvents(){
        return galleryService.getGalleryEvents();
    }
}
