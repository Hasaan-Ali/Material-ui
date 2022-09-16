import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker'
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const Lesson41 = () => {
  const [value, setValue] = useState([null,null])
  console.log({value});
  return (
    <Box width="500px">
      <DateRangePicker
        startText="check in"
        endText="check out"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{mx:2}}> To </Box>
            <TextField {...endProps}/>
          </>
        )}
      />
    </Box>
  );
}

export default Lesson41