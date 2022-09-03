import React, { useState } from 'react';
import './PersonalInfo.css';
import {
  TextField,
  Typography,
  CardHeader,
  Box,
  Container,
  Grid,
  Select,
  Divider,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
} from '@mui/material';

import InputBase from '@mui/material/InputBase';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import Hobbies from './Hobbies';

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

export default function PersonalInfo({ nextStep, calcPercentage }) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    age: '',
    height: '',
    maritalStatus: '',
    bloodGroup: '',
    dob: '',
    weight: '',
    languagesKnown: '',
    drinking: '',
    eating: '',
    smoking: '',
    address: '',
    pin: '',
    country: '',
    state: '',
    email: '',
    city: '',
    contact: '',
  });
  const [trueValue, setTrueValue] = useState({
    firstName: false,
    middleName: false,
    lastName: false,
    gender: false,
    age: false,
    height: false,
    maritalStatus: false,
    bloodGroup: false,
    dob: false,
    weight: false,
    languagesKnown: false,
    drinking: false,
    eating: false,
    smoking: false,
    address: false,
    pin: false,
    country: false,
    state: false,
    email: false,
    city: false,
    contact: false,
  });
  let count = 0;
  const handleChange = ({ currentTarget: input }) => {
    setPersonalInfo({ ...personalInfo, [input.name]: input.value });
    setTrueValue({ ...trueValue, [input.name]: true });
    count = 0;
    Object.keys(trueValue).forEach((key) => {
      if (trueValue[key] === true) {
        count += 1;
      }
    });
    calcPercentage(((count / 22) * 100).toFixed(0));
    console.log(personalInfo);
  };
  const handleClick = () => {
    nextStep();
  };
  // console.log(nextStep);
  // const classes = useStyles();
  return (
    <>
      <FormProvider>{/* <RHFTextField name="email" label="Email address" /> */}</FormProvider>

      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            {/* <RHFTextField name="email" label="Email address" /> */}
            {/* <label htmlFor="hello"> */}
            {/* First Name &nbsp; */}
            <TextField fullWidth label="First Name" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Last Name &nbsp; */}
            <TextField fullWidth label="Last Name" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Gender &nbsp; */}
            <TextField fullWidth label="Gender" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Age &nbsp; */}
            <TextField fullWidth label="Age" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Height (In Feet) &nbsp; */}
            <TextField fullWidth label="Height (In Feet)" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Weight (In kg) &nbsp; */}
            <TextField fullWidth label="Weight (In kg)" variant="outlined" />
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Marital Status &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
              <Select fullWidth label="Marital Status">
                <MenuItem value="Never Married">Never Married</MenuItem>
                <MenuItem value="Divorced">Divorced</MenuItem>
                <MenuItem value="Widower">Widower</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Blood Group &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
              <Select fullWidth label="Blood Group">
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
              </Select>
            </FormControl>
            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Date of Birth &nbsp; */}
            <TextField type={'date'} fullWidth label="Date of Birth" variant="outlined" />
            {/* Hello
              </TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Languages Known &nbsp; */}
            <TextField fullWidth label="Languages Known" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Hobbies &nbsp; */}
            <TextField fullWidth label="Hobbies" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Habits</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Drinking &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Drinking</InputLabel>
              <Select fullWidth label="Drinking">
                <MenuItem value="Female">Non-Drinking</MenuItem>
                <MenuItem value="s">Occassionally</MenuItem>
                <MenuItem value="Male">Frequently</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Eating &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Eating</InputLabel>
              <Select fullWidth label="Eating">
                <MenuItem value="Female">Vegetarain</MenuItem>
                <MenuItem value="Male">Non-Vegetarain</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Smoking &nbsp; */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Smoking</InputLabel>
              <Select fullWidth labelId="demo-simple-select-label" label="Smoking">
                <MenuItem value="Never">Non-Smoking</MenuItem>
                <MenuItem value="Smt">Occassionally</MenuItem>
                <MenuItem value="Ms">Habitual</MenuItem>
              </Select>
            </FormControl>

            {/* </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Address &nbsp; */}
            <TextField fullWidth label="Address" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Zip Code &nbsp; */}
            <TextField fullWidth label="Zip Code" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Country &nbsp; */}
            <TextField fullWidth label="Country" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              State &nbsp; */}
            <TextField fullWidth label="State" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              City &nbsp; */}
            <TextField fullWidth label="City" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Email Id &nbsp; */}
            <TextField fullWidth label="Email Id" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            {/* <label htmlFor="hello">
              Contact Number &nbsp; */}
            <TextField fullWidth label="Contact Number" variant="outlined" />
            {/* Hello</TextField>
            </label> */}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1, minWidth:50 }} variant="outlined">
              <label htmlFor="temp">
                First Name
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Middle Name
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Last Name
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Gender
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1, minWidth:'50%' }} variant="outlined">
              <label htmlFor="temp">
                Age
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Height
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Marital Status
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Blood Group
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Date of Birth
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Weight
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Languages Known
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Hobbies
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Drinking
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Eating
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Smoking
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Address
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Zip Code
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Country
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                State
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                City
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Email Id
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <label htmlFor="temp">
                Contact Number
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth label="" 
                  // value={values.weight}
                  //   onChange={handleChange('weight')}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
              </label>
            </FormControl>
          </Grid>
        </Grid> */}
      </Container>
    </>
  );
}
