import { Stack, Button,IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const Lesson4 = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" display="block">
        <Button variant="contained" size="small">
          small
        </Button>

        <Button variant="contained" size="medium">
          medium
        </Button>

        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableElevation onClick={()=>{alert("Clicked")}}>
            {/* disableElevation removes the by default box shadow applied to the buttons */}
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>
            {/* disableRipple removes the after effect ie.(rippleeffect) of buttons once they are clicked */}
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Lesson4;
