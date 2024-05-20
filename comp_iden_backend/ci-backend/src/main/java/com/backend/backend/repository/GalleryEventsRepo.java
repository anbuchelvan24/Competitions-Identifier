package com.backend.backend.repository;

import com.backend.backend.models.GalleryEvents;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GalleryEventsRepo extends MongoRepository<GalleryEvents, ObjectId> {
}
