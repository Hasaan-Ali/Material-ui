import { CatchingPokemon } from "@mui/icons-material";
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

const Lesson21 = () => {
  return (
    <AppBar
      position="static" // by default the position is fixed
    >
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start">
          <CatchingPokemon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flex: 1 }}
        >
          POKEMONAPP
        </Typography>
        <Stack
          direction="row"
          spacing={2}
        >
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Lesson21;
