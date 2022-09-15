import { Favorite, Home, Person } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'

const Lesson27 = () => {
    const [value, setValue] = useState(0)
  return (
    <BottomNavigation
      sx={{ position: "absolute", width: "100%", bottom: "0px" }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    //   showLabels prop makes the labels visible all the time
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favourite" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
}

export default Lesson27