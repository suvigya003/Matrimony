import React, { useState } from 'react';
import './PersonalInfo.css';
import { TextField, Typography, Box, Container, Grid, Select, Divider, MenuItem, InputLabel, Button, FormControl } from '@mui/material';

import InputBase from '@mui/material/InputBase';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          
        },
      },
    },
  },
});
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));
export default function PersonalInfo ({ nextStep, calcPercentage })  {
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
    <ThemeProvider theme={theme}>
      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl sx={{ m: 1, minWidth:50 }} variant="outlined">
              <label htmlFor="temp">
                First Name
                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
                  fullWidth
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
        </Grid>
      </Container>
      <Box>
        <Divider
          variant="middle"
          sx={{
            marginBottom: '30px',
            border: '1px dashed blue',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="firstName"
            onChange={handleChange}
            value={personalInfo.firstName}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <label htmlFor="temp">
              Title
              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
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
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Middle Name"
              variant="filled"
              type="text"
              name="middleName"
              onChange={handleChange}
              value={personalInfo.middleName}
              fullWidth
              //   className={classes.root}
              InputProps={{
                disableUnderline: true,
                color: 'secondary.main',
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  // paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                // paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="filled"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={personalInfo.lastName}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Gender"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="gender"
            onChange={handleChange}
            value={personalInfo.gender}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Age"
              variant="filled"
              type="number"
              name="age"
              onChange={handleChange}
              value={personalInfo.age}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Height"
              variant="filled"
              name="height"
              onChange={handleChange}
              value={personalInfo.height}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <option value="Shri">Shri</option>
              <option value="Smt">Smt</option>
              <option value="Ms">Ms</option>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Marital Status"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="maritalStatus"
            onChange={handleChange}
            value={personalInfo.maritalStatus}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Never Married">Never Married</option>
            <option value="Widow">Widow</option>
            <option value="Divorced">Divorced</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Blood Group"
              variant="filled"
              name="bloodGroup"
              onChange={handleChange}
              value={personalInfo.bloodGroup}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
              select
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Date of Birth"
              variant="filled"
              type="date"
              name="dob"
              onChange={handleChange}
              value={personalInfo.dob}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: 'true',
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Weight"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="weight"
            onChange={handleChange}
            value={personalInfo.weight}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Languages Known"
              variant="filled"
              type=""
              multiline
              maxRows={15}
              name="languagesKnown"
              onChange={handleChange}
              value={personalInfo.languagesKnown}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box sx={{ width: '100%', marginLeft: '30px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ marginRight: '10px' }}>Hobbies: </Typography>
          {/* <Hobbies /> */}
        </Box>
        <Typography mb="30px">Habits:</Typography>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          {/* <FormControl name=""
                                onChange={handleChange}
                                value={personalInfo} fullWidth> */}

          {/* <InputLabel id="demo-simple-select-label">Drinking</InputLabel> */}
          <TextField
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // // value={age}
            // label="Drinking"
            // onChange={handleChange}

            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Drinking"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="drinking"
            onChange={handleChange}
            value={personalInfo.drinking}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Non-Drinking</option>
            <option value="s">Occassionally</option>
            <option value="Male">Frequently</option>
          </TextField>
          {/* </FormControl> */}

          <TextField
            id="standard-basic"
            label="Eating"
            variant="filled"
            type="number"
            name="eating"
            onChange={handleChange}
            value={personalInfo.eating}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Female">Vegetarain</option>
            <option value="Male">Non-Vegetarain</option>
          </TextField>
          <TextField
            id="standard-basic"
            label="Smoking"
            variant="filled"
            name="smoking"
            onChange={handleChange}
            value={personalInfo.smoking}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              marginLeft: '30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
            select
          >
            <option value="Never">Non-Smoking</option>
            <option value="Smt">Occassionally</option>
            <option value="Ms">Habitual</option>
          </TextField>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Address"
            variant="filled"
            lg={3}
            md={6}
            sm={12}
            multiline
            maxRows={4}
            name="address"
            onChange={handleChange}
            value={personalInfo.address}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />

          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="Pin Code"
              variant="filled"
              name="pin"
              onChange={handleChange}
              value={personalInfo.pin}
              fullWidth
              //   width={'100px'}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>

          <Box width="100%" sx={{ marginLeft: '30px' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Country"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="country"
            onChange={handleChange}
            value={personalInfo.country}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="State"
              variant="filled"
              name="state"
              onChange={handleChange}
              value={personalInfo.state}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: '30px',
            }}
          >
            <TextField
              id="standard-basic"
              label="City"
              variant="filled"
              name="city"
              onChange={handleChange}
              value={personalInfo.city}
              fullWidth
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                style: {
                  paddingTop: '5px',
                  paddingLeft: '20px',
                  color: '#bdbdbd',
                  textTransform: 'none',
                  fontSize: '15px',
                  shrink: false,
                },
              }}
              sx={{
                // marginLeft:'30px',
                color: 'secondary',
                paddingLeft: '18px',
                paddingBottom: '5px',
                // minWidth:'100%',
                border: 1,
                borderColor: '#bdbdbd',
                borderRadius: '3px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginBottom: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Email Id"
            variant="filled"
            type="email"
            lg={4}
            md={6}
            sm={12}
            name="email"
            onChange={handleChange}
            value={personalInfo.email}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>
        <Box
          width="100%"
          sx={{
            marginLeft: '30px',
          }}
        >
          <TextField
            id="standard-basic"
            label="Contact Number"
            variant="filled"
            type="number"
            name="contact"
            onChange={handleChange}
            value={personalInfo.contact}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                paddingTop: '5px',
                paddingLeft: '20px',
                color: '#bdbdbd',
                textTransform: 'none',
                fontSize: '15px',
                shrink: false,
              },
            }}
            sx={{
              // marginLeft:'30px',
              color: 'secondary',
              paddingLeft: '18px',
              paddingBottom: '5px',
              // minWidth:'100%',
              border: 1,
              borderColor: '#bdbdbd',
              borderRadius: '3px',
            }}
          />
        </Box>
        {/* <Box sx={{ width: '100%', marginLeft: '30px' }} /> */}
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
};
