import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import React, { useState } from "react";

const Lesson31 = () => {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handleDelete = (chipToBeDeleted) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToBeDeleted));
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="Chip"
        color="primary"
        size="small"
        avatar={<Avatar>V</Avatar>}
      />

      <Chip
        label="Chip outlined"
        color="secondary"
        size="large"
        variant="outlined"
        icon={<Face />}
      />
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete handler called")}
        // ondelete function here creates a small rounded cross icon in the chip which when invoked
        // alerts message "Delete handler called"
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};

export default Lesson31;
