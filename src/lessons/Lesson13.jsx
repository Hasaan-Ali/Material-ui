import { Stack, Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "React", "Angular"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
const Lesson13 = () => {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);
  console.log({ skill });
  return (
    <Stack width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        freeSolo
        // the freeSolo prop asigns a random value to the value state ie. if some string is not present
        // in the skills array but gets typed into the TextField without the freeSolo prop it wont get
        // assigned as state value but with freeSolo prop it will get assigned to the state as its value even
        // if its not in the skills array above.
      />
      
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event, newValue) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default Lesson13;
