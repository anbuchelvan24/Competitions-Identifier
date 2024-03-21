// imports'
import PropTypes from "prop-types";
import { Button } from "@mui/material";

// different button components that can be re-used

// view buttons, primarily used for selecting different views on click
function ViewButton({ calendarRef, id, option, newTitle }) {
  const handleViewChange = (view) => {
    const calApi = calendarRef.current.getApi();

    if (calApi) {
      calApi.changeView(view);
      newTitle(calApi.view.title);
    }
  };

  return (
    // backgroundColor : '#2c3e50', color : 'white',
    <Button
      id={id}
      size="medium"
      variant="outlined"
      onClick={() => handleViewChange(option)}
      sx={{ textTransform: "capitalize" }}
    >
      {id}
    </Button>
  );
}

// date buttons, primarily used for naviigating different dates/months on click
function DateButton({ id, clickFunc, children }) {
  return (
    <Button
      // backgroundColor : '#2c3e50', color : 'white',
      id={id}
      size="medium"
      variant="outlined"
      onClick={clickFunc}
      sx={{ textTransform: "capitalize" }}
    >
      {children}
    </Button>
  );
}

// props types validation
ViewButton.propTypes = {
  calendarRef: PropTypes.object,
  id: PropTypes.string,
  option: PropTypes.string,
  newTitle: PropTypes.func,
};

DateButton.propTypes = {
  id: PropTypes.string,
  clickFunc: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

// exports
export { ViewButton, DateButton };
