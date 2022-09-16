import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const Lesson40 = () => {
  const [selectedDate, SetselectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

//   console.log(selectedTime && selectedTime.toLocaleTimeString());
// console.log(selectedDateTime)
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="date picker"
        renderInput={(params) => <TextField label="Date" {...params} />}
        value={selectedDate}
        onChange={(newValue) => {
          SetselectedDate(newValue);
        }}
      />

      <TimePicker
        label="Time picker"
        renderInput={(params) => <TextField label="Date" {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setSelectedTime(newValue);
        }}
      />

      <DateTimePicker
        label="Date Time picker"
        renderInput={(params) => <TextField label="Date" {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {
          setSelectedDateTime(newValue);
        }}
      />
    </Stack>
  );
};

export default Lesson40;
