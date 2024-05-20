package com.backend.backend.helperClasses;

import com.backend.backend.models.EventDetails;
import com.poiji.bind.Poiji;

import java.io.File;
import java.text.ParseException;
import java.util.List;
import java.util.Objects;

import static com.backend.backend.helperClasses.FormatExcelDate.*;

 public class ParseEventData {

    // Reads and parses the retrieved Excel data to a list of java objects

    public static List<EventDetails> parseExcelData(String fileLocation) throws ParseException {
        List<EventDetails> allEvents = Poiji.fromExcel(new File(fileLocation), EventDetails.class);

        // Iterate through each event
        allEvents.forEach(event -> {
            String event_name = event.getTitle();
            String start = event.getDate();
            String fee = event.getFee();
            String mode = event.getMode();
            String url = event.getUrl();
            String imgurl = event.getImgurl();

            // Handle date formats
            if (Objects.equals(start, "Live")) {
                parseLiveDate(event);
            } else if (isInvalidDateFormat(start)) {
                String dateString = start.substring(0, 10);
                event.setDate(dateString);
            } else {
                parseDate(start, event);
            }

            // Set event details
            event.setTitle(event_name);
            event.setFee(fee);
            event.setMode(mode);
            event.setUrl(url);
            event.setImgurl(imgurl);
        });

        return allEvents;
    }
}
