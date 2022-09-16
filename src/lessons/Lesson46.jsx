import { Box, styled } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({theme})=>({
    height:"250px",
    width:"250px",
    backgroundColor:theme.positive.darker
}))
const Lesson46 = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          // bgcolor: "secondary.main",
          // bgcolor:"secondary.light"
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox/>
    </>
  );
};

export default Lesson46;
