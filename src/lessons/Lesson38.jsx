import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Lesson38 = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    // <Stack spacing={1} width="250px">
    //   {/* <Skeleton variant="text" animation="wave" />
    //   <Skeleton variant="circular" width={40} height={40} animation={false} />
    //   <Skeleton variant="rectangular" width={250} height={125} /> */}
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={256}
          height={144}
          animation="wave"
        />
      ) : (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9IOtuKbqeQuHnitHq8arbEe8QvQQJIsRAi2s8-sHjul4A2uZXliHDp_Ol8IDUp8RL3AE&usqp=CAU"
          width={256}
          height={144}
        />
      )}
      <Stack spacing={1} sx={{ widht: "100%", marginTop: "12px" }} direction="row">
        {loading ? (
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            animation="wave"
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
              <Typography variant="body2">
                <Skeleton variant="text" width="100%" animation="wave" />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="body1">React Mui tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Lesson38;
