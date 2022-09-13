import { Stack, Button, ButtonGroup } from "@mui/material";
const Lesson5 = () => {
  return (
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
        //   orientation props is used to either align buttons vertically or horizontally
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={()=>alert("left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
  );
};

export default Lesson5;
