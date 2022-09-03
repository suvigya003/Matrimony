import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Box, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

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
          // textDecoration: 'none solid rgb(137,139,146)',
          borderRadius: '8px',
        },
      },
    },
  },
});

export default function ReligionInfo  ({nextStep,calcPercentage}) {
      const [religionInfo, setReligionInfo] = useState({
      religion: "",
caste: "",
subcaste: "",
})
      const [trueValue, setTrueValue] = useState({
            religion: false,
caste: false,
subcaste: false,
      })
      let count = 0;
      const handleChange = ({ currentTarget: input }) => {
            setReligionInfo({ ...religionInfo, [input.name]: input.value });
            setTrueValue({ ...trueValue, [input.name]: true });     
            count = 0;
            Object.keys(trueValue).forEach((key) => {
                  if (trueValue[key] === true) {
                        count += 1;
                  }
            });
            calcPercentage(((count/6)*100).toFixed(0));
            console.log(religionInfo);
      };

      const handleClick = () => {
            nextStep();
      }
      // console.log(nextStep);
      return (
        <>
          <Container maxWidth="xl">
            <Grid container spacing={3}>
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
            </Grid>
          </Container>
        </>
      );
}

