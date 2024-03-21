package com.calendarbackend.calendarbackend.helperClasses;

import com.calendarbackend.calendarbackend.objects.CalendarEvent;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;

public class FormatExcelDate {

    // a simple method to check if the given date is
    // of "dd/mm/yyyy hh:mm:ss" format
    static boolean isInvalidDateFormat(String dateString){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try{
            format.parse(dateString);
            return true;
        } catch(ParseException e){
            return false;
        }
    }

    static void parseLiveDate(CalendarEvent event){
        SimpleDateFormat dateFormatter = new SimpleDateFormat();
        dateFormatter.applyPattern("yyyy-MM-dd");
        event.setDate(dateFormatter.format(LocalDate.now()));
    }

    // converts the given date to a valid date format
    // for the event object to use
    static void parseDate(String dateString, CalendarEvent event){
        try{
            SimpleDateFormat receivedFormatDate = new SimpleDateFormat("dd/MM/yyyy");
            SimpleDateFormat expectedFormatDate = new SimpleDateFormat("yyyy-MM-dd");
            event.setDate(expectedFormatDate.format(receivedFormatDate.parse(dateString)));

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
