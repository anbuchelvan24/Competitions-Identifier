package com.calendarbackend.calendarbackend.controllers;

import com.calendarbackend.calendarbackend.models.GalleryEvents;
import com.calendarbackend.calendarbackend.repository.GalleryEventsRepo;
import com.calendarbackend.calendarbackend.service.GalleryEventService;
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
