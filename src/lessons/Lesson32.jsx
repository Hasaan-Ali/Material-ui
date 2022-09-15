import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import React from "react";

const Lesson32 = () => {
  return (
    <Tooltip
      title="Delete"
      placement="top"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      {/* arrow prop changes the style of the tooltip displayed and makes a pointed
      arrow and also placement prop to change the position of the tooltip enterDelay
      prop delayes the appearance of the tooltip by 500milliseconds once the delete
      icon button is hovered the value provided will be in miliseconds similarly the 
      leaveDelay prop will delay the dissappearance of the tooltip when the icon button
      is unhovered*/}
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

export default Lesson32;
