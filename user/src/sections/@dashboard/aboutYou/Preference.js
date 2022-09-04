import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Input, InputAdornment,Box, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
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

export default function Preference  ({ nextStep, calcPercentage })  {
  const [preferenceInfo, setPreferenceInfo] = useState({
    maritalStatus: "",
    age: "",
    weight: "",
    height: "",
    religion: "",
    caste: "",
    subCaste: "",
    education: "",
    employedIn: "",
  });
  const [trueValue, setTrueValue] = useState({
    maritalStatus: false,
    age: false,
    weight: false,
    height: false,
    religion: false,
    caste: false,
    subCaste: false,
    education: false,
    employedIn: false,
  });
  let count = 0;
  const handleChange = ({ currentTarget: input }) => {
    setPreferenceInfo({ ...preferenceInfo, [input.name]: input.value });
    setTrueValue({ ...trueValue, [input.name]: true });
    count = 0;
    Object.keys(trueValue).forEach((key) => {
      if (trueValue[key] === true) {
        count += 1;
      }
    });
    calcPercentage(((count / 6) * 100).toFixed(0));
    console.log(preferenceInfo);
  };
  const handleClick = () => {
    nextStep();
  };
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
              <Select fullWidth labelId="demo-simple-select-label" label="Marital Status">
                <MenuItem value="Never Married">Never Married</MenuItem>
                <MenuItem value="Widow">Widow</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select fullWidth label="Age">
                <MenuItem value="25-29">25-29</MenuItem>
                <MenuItem value="30-32">30-32</MenuItem>
                <MenuItem value="32-35">32-35</MenuItem>
                <MenuItem value="35+">35+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Height (In Feet)" variant="outlined" placeholder="Eg: 5.5-5.8" />

            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Height</InputLabel>
              <Select fullWidth label="Height">
                <MenuItem value="4.10ft - 5.4ft">4.10ft - 5.4ft</MenuItem>
                <MenuItem value="5.4ft - 5.10ft">5.4ft - 5.10ft</MenuItem>
                <MenuItem value="5.10ft - 6.5ft">5.10ft - 6.5ft</MenuItem>
              </Select>
            </FormControl> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Weight (In kg)</InputLabel>
              <Select fullWidth label="Weight (In kg)">
                <MenuItem value="40-50">40-50</MenuItem>
                <MenuItem value="50-55">50-55</MenuItem>
                <MenuItem value="55-65">55-65</MenuItem>
                <MenuItem value="65-75">65-75</MenuItem>
                <MenuItem value="75-90">75-90</MenuItem>
                <MenuItem value="90+">90+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Religion</InputLabel>
              <Select fullWidth label="Religion">
                <MenuItem value="Hindu">Hindu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Caste</InputLabel>
              <Select fullWidth label="Caste">
                <MenuItem value="Brahmin">Brahmin</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subcaste</InputLabel>
              <Select fullWidth label="Subcaste">
                <MenuItem value="Bengali">Bengali</MenuItem>
                <MenuItem value="Pahadi">Pahadi</MenuItem>
                <MenuItem value="Kanyakubja">Kanyakubja</MenuItem>
                <MenuItem value="Maithil">Maithil</MenuItem>
                <MenuItem value="Saryupareen">Saryupareen</MenuItem>
                <MenuItem value="Mohyal">Mohyal</MenuItem>
                <MenuItem value="Bhumihar">Bhumihar</MenuItem>
                <MenuItem value="Babhan">Babhan</MenuItem>
                <MenuItem value="Pashchima Brahmin">Pashchima Brahmin</MenuItem>
                <MenuItem value="Sanadhya">Sanadhya</MenuItem>
                <MenuItem value="Shakaldweepi">Shakaldweepi</MenuItem>
                <MenuItem value="Kulin Brahmin">Kulin Brahmin</MenuItem>
                <MenuItem value="Utkal Brahmin">Utkal Brahmin</MenuItem>
                <MenuItem value="Aadi gour">Aadi gour</MenuItem>
                <MenuItem value="Saraswat">Saraswat</MenuItem>
                <MenuItem value="Mahabrahmin">Mahabrahmin</MenuItem>
                <MenuItem value="Namboodiri">Namboodiri</MenuItem>
                <MenuItem value="Ayyar">Ayyar</MenuItem>
                <MenuItem value="Tyagi">Tyagi</MenuItem>
                <MenuItem value="Ayangar">Ayangar</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mangalik</InputLabel>
              <Select fullWidth labelId="demo-simple-select-label" label="Mangalik">
                <MenuItem value="Fully">Fully</MenuItem>
                <MenuItem value="Aanshik">Aanshik</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Education</InputLabel>
              <Select fullWidth label="Education">
                <MenuItem value="Diploma">Diploma</MenuItem>
                <MenuItem value="Graduate">Graduate</MenuItem>
                <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                <MenuItem value="Other">
                  Other
                  {/* <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      // value={values.amount}
                      // onChange={handleChange('amount')}
                      startAdornment={<InputAdornment position="start">Other:</InputAdornment>}
                    />
                  </FormControl> */}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Specify Other" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Employed In</InputLabel>
              <Select fullWidth label="Employed In">
                <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Defence">Defence</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Not Working">Not Working</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};