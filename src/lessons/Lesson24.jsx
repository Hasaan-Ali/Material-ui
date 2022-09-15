import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const Lesson24 = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={2}
        // itemsAfterCollapse={2}
        // itemsAfterCollapse sets the number of items shown after the breadcrumbs collapse
        itemsBeforeCollapse={2}
        // itemsBeforeCollapse sets the number of items shown before the breadcrumbs collapse

        // by default the value of maxItems is 8
      >
        {/* we can change the value of seperator which is by default "/" we can set it to "-" or 
        even an icon */}
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default Lesson24;
