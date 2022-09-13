import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

const Lesson9 = () => {
  const [value, setValue] = useState("");
  console.log({value});
  return (
    <Box>
      <FormControl error={!value}>
        <FormLabel id="job-experience-group">Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          row
        //   row props aligns the radio buttons in a row
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary"/> 
            // by default the size of radio buttons is medium and primary but we can change it by giving size
            //  and color props  
            }
            label="0-2"
            value="0-2"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="3-5"
            value="3-5"
          ></FormControlLabel>
          <FormControlLabel
            control={<Radio />}
            label="6-10"
            value="6-10"
          ></FormControlLabel>
        </RadioGroup>
        <FormHelperText>{!value ? "Invalid selection" : ""}</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Lesson9;
