package com.backend.backend.service;

import com.backend.backend.models.GalleryEvents;
import com.backend.backend.repository.GalleryEventsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryEventService {


    private GalleryEventsRepo galleryEventsRepo;

    GalleryEventService(GalleryEventsRepo galleryEventsRepo){
        this.galleryEventsRepo = galleryEventsRepo;
    }

    public List<GalleryEvents> getGalleryEvents(){
        return galleryEventsRepo.findAll().stream().map(event -> new GalleryEvents(
                event.getId(),
                event.getTitle(),
                event.getImgUrl(),
                event.getDetails()
        )).toList();
    }
}
