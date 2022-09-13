import { Box,FormControlLabel , Switch } from '@mui/material'
import React, { useState } from 'react'

const Lesson11 = () => {
    const [checked, setChecked] = useState(false)
    console.log({ checked });
  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch size='small' color='success' checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
      />
    </Box>
  );
}

export default Lesson11