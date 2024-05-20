package com.backend.backend.models;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "gallery_events")
public class GalleryEvents {

    @JsonSerialize(using= ToStringSerializer.class)
    private ObjectId id;
    private String title;
    private String imageUrl;
    private String details;

    public ObjectId getId(){
        return id;
    }
    public String getTitle(){
        return title;
    }
    public String getImgUrl(){
        return imageUrl;
    }
    public String getDetails(){
        return details;
    }
    public GalleryEvents(ObjectId id, String title, String imageUrl, String details) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.details = details;
    }
}
