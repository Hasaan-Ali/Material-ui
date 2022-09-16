import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers'
// import Lesson43 from './lessons/Lesson43';
// import Lesson44 from './lessons/Lesson44';
// import Lesson45 from './lessons/Lesson45';
import Lesson46 from './lessons/Lesson46';
import { colors, createTheme, ThemeProvider } from '@mui/material';
// import Lesson3 from "./lessons/Lesson3";
// import Lesson4 from "./lessons/Lesson4";
// import Lesson5 from "./lessons/Lesson5";
// import Lesson6 from "./lessons/Lesson6";
// import Lesson7 from "./lessons/Lesson7";
// import Lesson8 from "./lessons/Lesson8";
// import Lesson9 from "./lessons/Lesson9";
// import Lesson10 from "./lessons/Lesson10";
// import Lesson11 from "./lessons/Lesson11";
// import Lesson12 from "./lessons/Lesson12";
// import Lesson13 from "./lessons/Lesson13";
// import Lesson14 from "./lessons/Lesson14";
// import Lesson15 from "./lessons/Lesson15";
// import Lesson16 from "./lessons/Lesson16";
// import Lesson17 from "./lessons/Lesson17";
// import Lesson18 from "./lessons/Lesson18";
// import Lesson19 from "./lessons/Lesson19";
// import Lesson20 from "./lessons/Lesson20";
// import Lesson21 from "./lessons/Lesson21";
// import Lesson22 from "./lessons/Lesson22";
// import Lesson23 from "./lessons/Lesson23";
// import Lesson24 from "./lessons/Lesson24";
// import Lesson25 from "./lessons/Lesson25";
// import Lesson26 from "./lessons/Lesson26";
// import Lesson27 from "./lessons/Lesson27";
// import Lesson28 from "./lessons/Lesson28";
// import Lesson29 from "./lessons/Lesson29";
// import Lesson30 from "./lessons/Lesson30";
// import Lesson31 from "./lessons/Lesson31";
// import Lesson32 from "./lessons/Lesson32";
// import Lesson33 from "./lessons/Lesson33";
// import Lesson34 from "./lessons/Lesson34";
// import Lesson35 from "./lessons/Lesson35";
// import Lesson36 from "./lessons/Lesson36";
// import Lesson37 from "./lessons/Lesson37";
// import Lesson38 from "./lessons/Lesson38";
// import Lesson39 from "./lessons/Lesson39";
// import Lesson40 from "./lessons/Lesson40";
// import Lesson41 from "./lessons/Lesson41";
// import Lesson42 from "./lessons/Lesson42";

const theme= createTheme({
  status:{
    danger:"#e53e3e"
  },
  palette:{
    secondary:{
      main : colors.orange[500]
    }
  },
  positive:{
    main:colors.grey[500],
    darker:colors.grey[700]
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <Lesson3 /> */}
          {/* <Lesson4 /> */}
          {/* <Lesson5 /> */}
          {/* <Lesson6 /> */}
          {/* <Lesson7 /> */}
          {/* <Lesson8 /> */}
          {/* <Lesson9 /> */}
          {/* <Lesson10 /> */}
          {/* <Lesson11 /> */}
          {/* <Lesson12 /> */}
          {/* <Lesson13 /> */}
          {/* <Lesson14 /> */}
          {/* <Lesson15 /> */}
          {/* <Lesson16 /> */}
          {/* <Lesson17 />  */}
          {/* <Lesson18 /> */}
          {/* <Lesson19 /> */}
          {/* <Lesson20 /> */}
          {/* <Lesson21 /> */}
          {/* <Lesson22 /> */}
          {/* <Lesson23 /> */}
          {/* <Lesson24 /> */}
          {/* <Lesson25 /> */}
          {/* <Lesson26 /> */}
          {/* <Lesson27 /> */}
          {/* <Lesson28 /> */}
          {/* <Lesson29 /> */}
          {/* <Lesson30 /> */}
          {/* <Lesson31 /> */}
          {/* <Lesson32 /> */}
          {/* <Lesson33 /> */}
          {/* <Lesson34 /> */}
          {/* <Lesson35 /> */}
          {/* <Lesson36 /> */}
          {/* <Lesson37 /> */}
          {/* <Lesson38 /> */}
          {/* <Lesson39 /> */}
          {/* <Lesson40 /> */}
          {/* <Lesson41 /> */}
          {/* <Lesson42 /> */}
          {/* <Lesson43 /> */}
          {/* <Lesson44 /> */}
          {/* <Lesson45 /> */}
          <Lesson46 />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
