package com.calendarbackend.calendarbackend.repository;

import com.calendarbackend.calendarbackend.models.GalleryEvents;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryEventsRepo extends MongoRepository<GalleryEvents, ObjectId> {
}
