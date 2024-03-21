// imports
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./Calendar.css";

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { motion } from "framer-motion";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import fetchEvents from "./DataHandling";
import moment from "moment";
import SwipeableEdgeDrawer from "../CalendarHeader/SubComponents/SwipeableDrawer";
const fadeIn2 = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", type: "spring", delay: 1 },
  },
};
// calendar component
export default function Calendar() {
  // states
  const calendarRef = useRef(null);
  const [userEvents, setUserEvents] = useState(null);
  const [date, setDate] = useState(
    moment(calendarRef.current?.getApi().getDate())
  );
  const [title, setTitle] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  // get events data on initial render by fetching data from the port
  useEffect(() => {
    (async function getEvents() {
      const data = await fetchEvents();
      setUserEvents([...data])
    })();
  }, []);

  // tracks the widow size to change view on devices
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // get the title from the calendar api's method and display it as soon as its recieved
  useEffect(() => {
    const calTitle = calendarRef.current.getApi().view.title;
    setTitle(calTitle);
  }, [title]);

  // enables users to swipe in mobile devices
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      calendarRef.current?.getApi().next();
      setTitle(calendarRef.current.getApi().view.title);
      setDate(moment(calendarRef.current?.getApi().getDate()));
    },
    onSwipedRight: () => {
      calendarRef.current?.getApi().prev();
      setTitle(calendarRef.current.getApi().view.title);
      setDate(moment(calendarRef.current.getApi().getDate()));
    },

    swipeDuration: 500,
  });

  return (
    <>
      <CalendarHeader
        screenSize={width}
        title={title}
        currDate={date}
        setNewDate={setDate}
        setNewTitle={setTitle}
        ref={calendarRef}
      />

      <motion.div
        variants={fadeIn2}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        {...handlers}
      >
        <FullCalendar
          // initial calendar setup
          ref={calendarRef}
          plugins={[
            daygridPlugin,
            timegridPlugin,
            multiMonthPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView={"dayGridMonth"}
          aspectRatio={width <= 1100 ? 2.8 : 2.8}
          contentHeight={width <= 1100 ? "80vh" : "80vh"}
          dayHeaderFormat={{ weekday: "short" }}
          headerToolbar={false}
          // events
          events={userEvents}
        ></FullCalendar>
      </motion.div>
      {width <= 1100 && <SwipeableEdgeDrawer calendarRef={calendarRef} />}
    </>
  );
}
