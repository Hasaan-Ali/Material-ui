import { Alert, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarALert = forwardRef(function SnackbarALert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});
const Lesson35 = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:"center"
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarALert onClose={handleClose} severity="success">
          form submitted successfully!
        </SnackbarALert>
      </Snackbar>
    </>
  );
};

export default Lesson35;
