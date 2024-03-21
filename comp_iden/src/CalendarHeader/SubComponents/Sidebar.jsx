// NOTE : THIS COMPONENT ONLY TRIGGERS ON DEVICES WITH SMALLER SCREEN SIZES FOR ACCESSIBILTY
// imports
import { useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  CalendarViewDay,
  CalendarViewMonth,
  CalendarViewWeek,
  Menu,
  ViewList,
} from "@mui/icons-material";

// handles any view change upon clicking the listed options (defined only once)
const handleViewChange = (calendarRef, view, newTitle) => {
  const calApi = calendarRef.current?.getApi();
  if (calApi) {
    calApi.changeView(view);
    newTitle(calApi.view.title);
  }
};

// sidebar component
export default function Sidebar({ calendarRef, newTitle }) {
  // a state to open or close the sidebar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{ color: "#1976d2", mt: "3px" }}
        id="options"
        size="large"
        aria-label="view-options"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </IconButton>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box sx={{ width: "200px" }}>
          <div className="sidebar-header">
            <Typography sx={{ fontSize: "20px" }}>Calendar</Typography>
          </div>

          <Typography
            color={"text.secondary"}
            sx={{ ml: "10px", mt: "20px", fontSize: "14px" }}
          >
            View Options
          </Typography>

          <List>
            <ListItemButton
              onClick={() =>
                handleViewChange(calendarRef, "dayGridMonth", newTitle)
              }
            >
              <ListItemIcon>
                <CalendarViewMonth />
              </ListItemIcon>
              <ListItemText primary="Month" />
            </ListItemButton>
            <Divider />

            <ListItemButton
              onClick={() =>
                handleViewChange(calendarRef, "dayGridWeek", newTitle)
              }
            >
              <ListItemIcon>
                <CalendarViewWeek />
              </ListItemIcon>
              <ListItemText primary="Week" />
            </ListItemButton>
            <Divider />

            <ListItemButton
              onClick={() =>
                handleViewChange(calendarRef, "timeGridDay", newTitle)
              }
            >
              <ListItemIcon>
                <CalendarViewDay />
              </ListItemIcon>
              <ListItemText primary="Day" />
            </ListItemButton>
            <Divider />

            <ListItemButton
              onClick={() =>
                handleViewChange(calendarRef, "listMonth", newTitle)
              }
            >
              <ListItemIcon>
                <ViewList />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

// props types validation
Sidebar.propTypes = {
  calendarRef: PropTypes.object,
  newTitle: PropTypes.func,
};
