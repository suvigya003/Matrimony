import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {Box,Container,Grid, Select,Button, MenuItem, FormControl, InputLabel} from '@mui/material';
import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
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
    // MuiFilledInput: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: 'rgb(255,255,255)',
    //       '&:hover': {
    //         backgroundColor: 'rgb(255, 255, 255)',
    //         '@media (hover: none)': {
    //           backgroundColor: 'rgb(255, 255, 255)',
    //         },
    //       },
    //       '&.Mui-focused': {
    //         backgroundColor: 'rgb(255, 255, 255)',
    //       },
    //     },
    //   },
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // height: '3em',
          // fontSize: '14px',
          textDecoration: 'none solid rgb(137,139,146)',
          borderRadius: '8px',
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
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Highest Education &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Highest Education</InputLabel>
              <Select fullWidth labelId="demo-simple-select-label" label="Highest Education">
                <MenuItem value="Post Graduation">Post Graduation</MenuItem>
                <MenuItem value="Graduation">Graduation</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="High School">High School</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Course &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select fullWidth labelId="demo-simple-select-label" label="Course">
                <MenuItem value="Shri">B.Sc</MenuItem>
                <MenuItem value="Smt">B.A.</MenuItem>
                <MenuItem value="Ms">B.Tech</MenuItem>
                <MenuItem value="Smt">B.Com</MenuItem>
                <MenuItem value="Ms">M.A.</MenuItem>
                <MenuItem value="Smt">M.Com</MenuItem>
                <MenuItem value="Ms">M.Sc</MenuItem>
                <MenuItem value="Ms">M.Tech</MenuItem>
                <MenuItem value="Ms">MCA</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#2065D1',
                paddingLeft: '45px',
                paddingRight: '45px',
                borderRadius: '8px',
                paddingTop: '10px',
                paddingBottom: '10px',
                fontWeight: 600,
              }}
            >
              <AddCircleOutlineIcon
                sx={{
                  marginRight: '10px',
                }}
              />
              Add More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
