package com.backend.backend.helperClasses;

import com.backend.backend.models.EventDetails;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

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

    static void parseLiveDate(EventDetails event){

        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.ENGLISH);
        event.setDate(dateFormatter.format(LocalDate.now()));
    }



    // converts the given date to a valid date format
    // for the event object to use
    static void parseDate(String dateString, EventDetails event){
        try{
            SimpleDateFormat receivedFormatDate = new SimpleDateFormat("dd/MM/yyyy");
            SimpleDateFormat expectedFormatDate = new SimpleDateFormat("yyyy-MM-dd");
            event.setDate(expectedFormatDate.format(receivedFormatDate.parse(dateString)));

        } catch (ParseException e) {
            throw new RuntimeException(e);
        }
    }
}
