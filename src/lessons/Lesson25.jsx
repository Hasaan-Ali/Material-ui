import { Menu } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

const Lesson25 = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
      <IconButton size="large" color="inherit" edge="end" onClick={() => setIsDrawerOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Lesson25;
