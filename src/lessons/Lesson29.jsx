import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const Lesson29 = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        {/* if the badgeContent={0} than the badge wont be displayed but to undo this give showZero prop */}
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        {/* the default max value of badge is 99 so it will display 99+ in this case we can change that 
        by giving max prop ie max={999} */}
        <Mail />
      </Badge>
      <Badge variant="dot" color="primary" invisible={true}>
        {/* variant="dot" prop shows only a dot as the value of the badge and if we
        want to hide the badge we can give invisible={true} prop */}
        <Mail />
      </Badge>
    </Stack>
  );
};

export default Lesson29;
