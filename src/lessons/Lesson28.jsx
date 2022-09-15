import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

const Lesson28 = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2}>
          {/* max prop restricts the number of avatar being displayed */}
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IOtuKbqeQuHnitHq8arbEe8QvQQJIsRAi2s8-sHjul4A2uZXliHDp_Ol8IDUp8RL3AE&usqp=CAU" />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        {/* variant="square" makes the shapes of the avatar square instead of round and also if you wanna 
        increase the size of the avatar give hieght and width in sx props  */}
        <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>
          CK
        </Avatar>
        {/* variant="rounded" prop gives border radius to square shaped avatars */}
      </Stack>
    </Stack>
  );
};

export default Lesson28;
