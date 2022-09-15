import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const Lesson34 = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error"> this is an error alert</Alert>
      <Alert severity="warning"> this is an warning alert</Alert>
      <Alert severity="info"> this is an info alert</Alert>
      <Alert severity="success"> this is an success alert</Alert>

      <Alert variant="outlined" severity="error">
        {" "}
        this is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        {" "}
        this is an warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        {" "}
        this is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        {" "}
        this is an success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("close alert")}
      >
        <AlertTitle>Error</AlertTitle>
        this is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        this is an warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        this is an info alert
      </Alert>
      <Alert variant="filled" severity="success" action={
        <Button color="inherit" size="small">UNDO</Button>
      }>
        <AlertTitle>Success</AlertTitle>
        this is an success alert
      </Alert>
    </Stack>
  );
};

export default Lesson34;
