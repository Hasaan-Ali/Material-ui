import { Typography } from "@mui/material";
const Lesson3 = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 heading
       {/* even though its an h4 variant but when we"ll inspect it in browser it'll represent an h1 tag due to component given props h1 */}
      {/* The gutterBottom props provides a margin bottom to the text its by default value is false */}
      </Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        voluptatibus! Ullam, excepturi vitae nihil maxime culpa deserunt omnis
        itaque, sit incidunt alias esse voluptates reiciendis dicta voluptas
        quidem minima impedit?

        {/* its the default value of p tag body1 variant has the same fontsize and weight as an ordinary p tag */}
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum
        perspiciatis fugiat commodi molestias, ipsam vitae cumque aspernatur
        voluptas suscipit expedita iusto inventore quisquam porro beatae
        explicabo nam accusamus similique? Eaque!
      </Typography>
    </div>
  );
};

export default Lesson3;
