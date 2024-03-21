package com.calendarbackend.calendarbackend.objects;

import com.poiji.annotation.ExcelCell;
import com.poiji.annotation.ExcelCellName;

public class CalendarEvent {

    // declare event object properties
    // these are private properties

    @ExcelCellName("Fest Name")
    private String title;

    // the property is called start
    // because event objects accept 'start' as
    // their event-start-date property
    @ExcelCellName("Start Date")
    private String start;

    @ExcelCellName("Register_link")
    private String url;

    // getter and setter methods
    // includes only for the date property
    public String getDate(){
        return this.start;
    }
    public void setDate(String Date){
        this.start = Date;
    }
}
