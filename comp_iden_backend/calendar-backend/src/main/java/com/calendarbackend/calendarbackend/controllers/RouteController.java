package com.calendarbackend.calendarbackend.controllers;

import com.calendarbackend.calendarbackend.helperClasses.ParseEventData;
import com.calendarbackend.calendarbackend.models.EventDetails;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

// this is just for testing purposes (you can ignore this)!
// a simple class to send json data over the network
// to check if the Excel data is parsed properly
@RestController
public class RouteController {
    @GetMapping("/eventsData")
    public String getEventData() throws ParseException {
        List<EventDetails> allEvents = ParseEventData.parseExcelData("C:\\Users\\anbuc\\Downloads\\Competitions-Identifier\\comp_iden_backend\\calendar-backend\\src\\main\\resources\\hackathons.xlsx");
        Gson gson = new Gson();
        return gson.toJson(allEvents);
    }
}
