package com.calendarbackend.calendarbackend.helperClasses;

import com.calendarbackend.calendarbackend.objects.CalendarEvent;
import com.poiji.bind.Poiji;
import java.io.File;
import java.text.ParseException;
import java.util.List;
import java.util.Objects;

import static com.calendarbackend.calendarbackend.helperClasses.FormatExcelDate.*;

public class parseEventData {

    // reads and parses the retrieved Excel data to a list of java objects

    public static List<CalendarEvent> parseExcelData(String fileLocation) throws ParseException {
        List<CalendarEvent> allEvents =  Poiji.fromExcel(new File(fileLocation), CalendarEvent.class);

        // a simple for each loop to change invalid date formats
        allEvents.forEach(event -> {

            // checks if the start date is "Live", if true, parse and
            // format it to today's date
            if (Objects.equals(event.getDate(), "Live")) {
                parseLiveDate(event);

            // checks if the start date is in an invalid format
            // if true, it modifies it to a valid format
            } else if (isInvalidDateFormat(event.getDate())) {
                String dateString = event.getDate().substring(0, 10);
                event.setDate(dateString);
            }
            // else, converts the date from "dd/MM/yyyy" to a valid format "yyyy-MM-dd"
            // for the event object to use
            else {
                parseDate(event.getDate(), event);
            }
        });

        return allEvents;
    }
}
