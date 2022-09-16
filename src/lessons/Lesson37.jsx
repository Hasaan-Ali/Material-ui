import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

const Lesson37 = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress color="secondary" />
      <CircularProgress variant="determinate" value={90} />

      <LinearProgress color="secondary" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
}

export default Lesson37