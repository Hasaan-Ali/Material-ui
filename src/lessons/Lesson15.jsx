import { Box, Stack, Divider } from "@mui/material";
import React from "react";

const Lesson15 = () => {
  return (
    <Stack sx={{ border: "1px solid" }} direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem/>}>
      <Box
        //   component="span"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        //   the component prop can change the Element type of the box element ie.
        //   by default the type of box is a div but here i changed it to type span
      >
        Lesson14
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
        // by default the value of p is x8 ie i use 2 so 2x8 = 16px padding here in this case
      ></Box>
    </Stack>
  );
};

export default Lesson15;
