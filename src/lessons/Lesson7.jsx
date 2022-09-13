import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const Lesson7 = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        {/* when hovered on to the input displays a message "please fill out this field" */}
        <TextField
          label="Password"
          helperText="do not share your password with anyone"
          type="password"
          disabled
        />
        {/* helperText provides a small font sized text underneath the input ie.do
        not share your password with anyone */}
        {/* disabled props disables the input ie. you can no longer type anything in it */}
        <TextField
          label="Read only"
          inputProps={{ readOnly: true }}
          // you can focus on this input but you can not edit or type anything in it since it readOnly props
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "pls fill out this detail" : "do not share this with anyone"}
        // error props in this senerio is transforming the TextField style to red ie.red outline and
        // red label with helpertext "pls fill out this detail" but once there is something typed in 
        // to the input it returs back to its orignal style with helpertext "do not share this with anyone"
        />
      </Stack>
    </Stack>
  );
};

export default Lesson7;
