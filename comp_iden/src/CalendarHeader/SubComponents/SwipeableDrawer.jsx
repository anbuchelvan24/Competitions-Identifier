// imports
import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { EventSharp } from "@mui/icons-material";

import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { Global } from "@emotion/react";

import moment from "moment/moment";

// mui's styling for components
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

// swipe area width
const drawerBleeding = 56;

// swipeable drawer component
export default function SwipeableEdgeDrawer({ calendarRef }) {
  // states to set today's events and open/close the drawer
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);

  // function to open or close the drawer
  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  // a simple useffect to get the events from the calendar api and update the events state if events has changed
  useEffect(() => {
    const calApi = calendarRef.current?.getApi();

    // a small timeout to get the events from the api (does not work if u remove setTimeout), the getEvents() method is async
    setTimeout(() => {
      const todayEvents = calApi
        .getEvents()
        .filter(
          (evt) =>
            moment(calApi.getDate()).format("MMMM Do YYYY") ===
            moment(evt.start).format("MMMM Do YYYY")
        );
      if (JSON.stringify(todayEvents) === JSON.stringify(events)) return;
      setEvents([...todayEvents]);
      console.log("CHANGED");
    }, 40);
  }, [calendarRef, events]);

  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiDrawer-paperAnchorBottom ": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={document.body}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          className="swipeableDrawer"
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography
            sx={{ p: 2, color: "text.secondary" }}
          >{`Your Events For Today (${events.length})`}</Typography>
        </StyledBox>

        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <List>
            {events.length > 0 ? (
              events.map((event) => (
                <Fragment key={event.id}>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon>
                        <EventSharp />
                      </ListItemIcon>
                      <ListItemText
                        primary={event.title}
                        secondary={moment(event.start).format("MMMM Do YYYY")}
                      />
                    </ListItemButton>
                  </ListItem>
                </Fragment>
              ))
            ) : (
              <h4 id="no-events-msg">You Have No Events Today : (</h4>
            )}
          </List>
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

// props types validation
SwipeableEdgeDrawer.propTypes = {
  calendarRef: PropTypes.object,
};
