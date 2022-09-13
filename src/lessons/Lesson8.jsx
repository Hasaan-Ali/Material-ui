import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const Lesson8 = () => {
//   const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  console.log({ countries });

  const handleChange = (event) => {
    const value = event.target.value
    setCountries(typeof value === "string" ? value.split(",") : value);

  };
  return (
    // <Box width="250px">
    //   <TextField
    //     label="select country"
    //     select
    //     fullWidth
    //     value={country}
    //     onChange={handleChange}
    //   >
    //     {/* fullwidth props makes the width of the textfield 100% of the parent
    //     element which is a box in this case */}
    //     <MenuItem value="PAK">Pakistan</MenuItem>
    //     <MenuItem value="US">USA</MenuItem>
    //     <MenuItem value="AU">Australia</MenuItem>
    //   </TextField>

    <Box width="250px">
      <TextField
        label="select countries"
        select
        fullWidth
        value={countries}
        onChange={handleChange}
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="pls select you country or countries"
        error
      >
        <MenuItem value="PAK">Pakistan</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};

export default Lesson8;
