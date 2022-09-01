import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255)',
          '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',
            '@media (hover: none)': {
              backgroundColor: 'rgb(255, 255, 255)',
            },
          },
          '&.Mui-focused': {
            backgroundColor: 'rgb(255, 255, 255)',
          },
        },
      },
    },
  },
});

export default function EducationalInfo ({ nextStep, calcPercentage })  {
  const [educationalInfo, setEducationalInfo] = useState({
        highestEducation: "",
        educationType:"",
  });
      const [trueValue, setTrueValue] = useState({
        highestEducation: false,
        educationType:false,
  });
  let count = 0;
  const handleChange = ({ currentTarget: input }) => {
    setEducationalInfo({ ...educationalInfo, [input.name]: input.value });
    setTrueValue({ ...trueValue, [input.name]: true });
    count = 0;
    Object.keys(trueValue).forEach((key) => {
      if (trueValue[key] === true) {
        count += 1;
      }
    });
    calcPercentage(((count / 6) * 100).toFixed(0));
    console.log(educationalInfo);
  };
  const handleClick = () => {
    nextStep();
  };
  // console.log(nextStep);
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Divider
          variant="middle"
          sx={{
            marginBottom: "30px",
            border: "1px dashed blue",
          }}
        /> */}

        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Highest Education"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="highestEducation"
            onChange={handleChange}
            value={educationalInfo.highestEducation}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: "5px",
                paddingLeft: "20px",
                color: "#bdbdbd",
                textTransform: "none",
                fontSize: "15px",
                shrink: "false",
              },
            }}
            sx={{
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
            select
          >
            <option value="Post Graduation">Post Graduation</option>
            <option value="Graduation">Graduation</option>
            <option value="Intermediate">Intermediate</option>
            <option value="High School">High School</option>
            <option value="Other">Other</option>
          </TextField>
          <TextField
            id="standard-basic"
            label="Course"
            variant="filled"
            name="educationType"
            onChange={handleChange}
            value={educationalInfo.educationType}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: "5px",
                paddingLeft: "20px",
                color: "#bdbdbd",
                textTransform: "none",
                fontSize: "15px",
                shrink: "false",
              },
            }}
            sx={{
              marginLeft: "30px",
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
            select
          >
            <option value="Shri">B.Sc</option>
            <option value="Smt">B.A.</option>
            <option value="Ms">B.Tech</option>
            <option value="Smt">B.Com</option>
            <option value="Ms">M.A.</option>
            <option value="Smt">M.Com</option>
            <option value="Ms">M.Sc</option>
            <option value="Ms">M.Tech</option>
            <option value="Ms">MCA</option>
          </TextField>
          {/* <TextField
            id="standard-basic"
            label=""
            variant="filled"
            name=""
            onChange={handleChange}
            value={educationalInfo}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: "5px",
                paddingLeft: "20px",
                color: "#bdbdbd",
                textTransform: "none",
                fontSize: "15px",
                shrink: "false",
              },
            }}
            sx={{
              marginLeft: "30px",
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              //   border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
          /> */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginLeft: "30px",
            }}
          >
            <AddCircleOutlineIcon
              sx={{
                marginRight: "10px",
              }}
            />
            Add More
          </Button>
        </Box>

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
};
