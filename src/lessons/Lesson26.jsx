import { CopyAll, Edit, EditAttributes, Print, Share } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const Lesson26 = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: "16px", right: "16px" }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    //   openIcon prop changes the SpeedDialIcon from "+" to edit icon once it has been hovered 
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="share" tooltipOpen />
      {/* tooltipOpen prop makes the tooltipTitle visible everytime speeddialactions popup without 
      hovering on to SpeedDialAction buttons */}
    </SpeedDial>
  );
};

export default Lesson26;
