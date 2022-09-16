import { ExpandMore } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import React from "react";

const heights = [
  25, 20, 30, 40, 110, 150, 180, 90, 105, 125, 145, 75, 35, 85, 100,
];
const Lesson44 = () => {
  return (
    <Box sx={{ width: "500px", minHeight: "400" }}>
      <Masonry>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   height,
              border: "1px solid",
            }}
          >
            <Accordion sx={{minHeight:height}}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography>Accordian {index +1}</Typography>
                </AccordionSummary>
                <AccordionDetails>content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default Lesson44;
