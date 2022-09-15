import { CatchingPokemon, KeyboardArrowDown } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Lesson22 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  console.log(open);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static" // by default the position is fixed
    >
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flex: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="recources-button"
            onClick={handleClick}
            aria-control={open ? "recources-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? true : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Recources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="recources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "recources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Lesson22;
