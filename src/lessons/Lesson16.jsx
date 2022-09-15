import { DonutLargeRounded } from "@mui/icons-material";
import { Box, Stack, Divider, Grid } from "@mui/material";
import React from "react";

const Lesson16 = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
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
      <Grid container my={4} spacing={2} rowSpacing={2} columnSpacing={1}>
        {/* container prop is given to the parent grid element which encapsulate the children
        grid elements */}
        <Grid
          item
          xs={6}
          //   xs
        >
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        {/* item prop is given to the children grid elements */}
        <Grid
          item
          xs={6}
          //   xs
          // xs="auto"
        >
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          //   xs
        >
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          //   xs
        >
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

// there are a total of 12 imaginary columns that actually sets the breakpoints for devices with different
// screen widths eg xs for mobile screens sm for tablet screens md for desktops and lg and xl for larger
// monitors . if we specify xs breakpoint only it will be apply for all the breakpoints with same breakpoint
// value as specified for the xs breakpoint. to get a better responsive ui we need to set all breakpoints
// ie in this case we can set xs={12} , sm={6}. if we apply only xs and not assign any value to it all
// the Grid items will be of equal width. if we apply xs={6} on the second item only and for the rest xs
// only only the second item will take 6 columns and the rest of the space will be evenly divided amongst
// the remaining grid item elements. if we apply xs="auto" ie as its applied on the second item that
// particular grid item will take width depending upon the natural width of the contained items.

export default Lesson16;
