import { Stack ,TextField} from "@mui/material"

const Lesson7 = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required />
        {/* when hovered on to the input displays a message "please fill out this field" */}
        <TextField
          label="Form Input"
          helperText="do not share your password with anyone"
        />
        {/* helperText provides a small font sized text underneath the input ie.do
        not share your password with anyone */}
      </Stack>
    </Stack>
  );
}

export default Lesson7