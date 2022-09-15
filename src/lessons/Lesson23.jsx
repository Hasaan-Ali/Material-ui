import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const Lesson23 = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Typography variant="h6">
        {/* Link inherits the variant of the parent typography element so it by default value is inherit */}
        <Link href="#" underline="none">
          Link
        </Link>
      </Typography>
      <Link
        href="#"
        color="secondary"
        underline="hover"
        variant="body2"
        // underline prop enables underline text decoration on hover only as its set to hover
        // underline="none" removes underline text decoration
        // we can also set variant prop to the link itself
      >
        Secondary
      </Link>
    </Stack>
  );
};

export default Lesson23;
