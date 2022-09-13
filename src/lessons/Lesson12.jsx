import { FavoriteBorder, FavoriteRounded } from "@mui/icons-material";
import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";

const Lesson12 = () => {
  const [value, setValue] = useState(3);
  console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteRounded fontSize="inherit"  color="error"/>}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        readOnly
        // the readonly prop here sets the state value to its initial value note the 
        // rating value cannot be changed in while readOnly is activated
        highlightSelectedOnly
        // the highlightSelectedOnly prop highlights only that icon which is currently 
        // selected ie. in this case the initial value of this state is 3 so only the third icon
        // will be highlighted and the rest will be only outlined.
      />
    </Stack>
  );
};

export default Lesson12;
