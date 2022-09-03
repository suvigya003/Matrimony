import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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

export default function FamilyInfo ({ nextStep, calcPercentage })  {
  const [familyInfo, setFamilyInfo] = useState({
    familyType: "",
    fName: "",
    fOccupation: "",
    fCompany: "",
    mName: "",
    mOccupation: "",
    mCompany: "",
    bName: "",
    bOccupation: "",
    bCompany: "",
    sName: "",
    sOccupation: "",
    sCompany: "",
    address: "",
    contactNumber1: "",
    contactNumber2: "",
  });
  const [trueValue, setTrueValue] = useState({
    familyType: false,
    fName: false,
    fOccupation: false,
    fCompany: false,
    mName: false,
    mOccupation: false,
    mCompany: false,
    bName: false,
    bOccupation: false,
    bCompany: false,
    sName: false,
    sOccupation: false,
    sCompany: false,
    address: false,
    contactNumber1: false,
    contactNumber2: false,
  });
  let count = 0;
  const handleChange = ({ currentTarget: input }) => {
    setFamilyInfo({ ...familyInfo, [input.name]: input.value });
    setTrueValue({ ...trueValue, [input.name]: true });
    count = 0;
    Object.keys(trueValue).forEach((key) => {
      if (trueValue[key] === true) {
        count += 1;
      }
    });
    calcPercentage(((count / 16) * 100).toFixed(0));
    console.log(familyInfo);
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
              <InputLabel id="demo-simple-select-label">Family Type</InputLabel>
              <Select fullWidth label="Family Type">
                <MenuItem value="Joint">Joint</MenuItem>
                <MenuItem value="Nucear">Nuclear</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Father:</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select fullWidth label="Occupation">
                <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Defence">Defence</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Not Working">Not Working</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Company / Institution Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Mother:</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select fullWidth label="Occupation">
                <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Defence">Defence</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="House Wife">House Wife</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Company / Institution Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Brother:</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select fullWidth label="Occupation">
                <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Defence">Defence</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Company / Institution Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              variant="contained"
              fullWidth
              label=""
              sx={{
                borderRadius: '8px',
                backgroundColor: '#2065D1',
                paddingLeft: '45px',
                paddingRight: '45px',
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
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Sister:</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select fullWidth label="Occupation">
                <MenuItem value="Government/ PSU">Government/ PSU</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Defence">Defence</MenuItem>
                <MenuItem value="Self Employed">Self Employed</MenuItem>
                <MenuItem value="Student">Student</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Company / Institution Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Button
              variant="contained"
              fullWidth
              label=""
              sx={{
                borderRadius: '8px',
                backgroundColor: '#2065D1',
                paddingLeft: '45px',
                paddingRight: '45px',
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
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <Typography>Address:</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Country" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="State" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Contact Number 1" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Contact Number 2" variant="outlined" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

