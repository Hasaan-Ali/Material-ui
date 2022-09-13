import { Stack, Rating } from "@mui/material";
import React, { useState } from "react";

const Lesson12 = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange} />
    </Stack>
  );
};

export default Lesson12;
