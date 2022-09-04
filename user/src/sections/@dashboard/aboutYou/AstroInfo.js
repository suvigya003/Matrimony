import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Container, Select, MenuItem, Grid, FormControl, InputLabel } from '@mui/material';
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Date from './Date'

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

export default function AstroInfo ({ nextStep, calcPercentage }) {
  const [astroInfo, setAstroInfo] = useState({
    rashi: "",
    nakshatra: "",
    dob: "",
    birthTime: "",
  });
  const [trueValue, setTrueValue] = useState({
    rashi: false,
    nakshatra: false,
    dob: false,
    birthTime: false,
  });
  let count = 0;
  const handleChange = ({ currentTarget: input }) => {
    setAstroInfo({ ...astroInfo, [input.name]: input.value });

    setTrueValue({ ...trueValue, [input.name]: true });
    count = 0;
    Object.keys(trueValue).forEach((key) => {
      if (trueValue[key] === true) {
        count += 1;
      }
    });
    calcPercentage(((count / 4) * 100).toFixed(0));
    console.log(astroInfo);
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
            <TextField fullWidth label="Rashi" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Nakshatra" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Date title={ 'Birth Date'} />
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
        </Grid>
      </Container>
    </>
  );
};
