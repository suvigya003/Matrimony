import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
            label="Marital Status"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="maritalStatus"
            onChange={handleChange}
            value={preferenceInfo.maritalStatus}
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
            <option value="Never Married">Never Married</option>
            <option value="Widow">Widow</option>
            <option value="Divorced">Divorced</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Age"
              variant="filled"
              name="age"
              onChange={handleChange}
              value={preferenceInfo.age}
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
                //   marginLeft: "30px",
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
              <option value="Never Married">25-29</option>
              <option value="Widow">30-32</option>
              <option value="Divorced">32-35</option>
              <option value="35+">35+</option>
            </TextField>
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Weight"
              variant="filled"
              type="number"
              name="weight"
              onChange={handleChange}
              value={preferenceInfo.weight}
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
                //   marginLeft: "30px",
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
              <option value="Never Married">40-50</option>
              <option value="Widow">50-55</option>
              <option value="Divorced">55-65</option>
              <option value="35+">65-75</option>
              <option value="35+">75-90</option>
              <option value="35+">90+</option>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Height"
            variant="filled"
            name="height"
            onChange={handleChange}
            value={preferenceInfo.height}
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
              //   marginLeft:'30px',
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
            <option value="Shri">Shri</option>
            <option value="Smt">Smt</option>
            <option value="Ms">Ms</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          />

          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Religion"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="religion"
            onChange={handleChange}
            value={preferenceInfo.religion}
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
            <option value="Female">Hindu</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Caste"
              variant="filled"
              type="number"
              name="caste"
              onChange={handleChange}
              value={preferenceInfo.caste}
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
                //   marginLeft: "30px",
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
              <option value="Female">Brahmin</option>
            </TextField>
          </Box>
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Subcaste"
              variant="filled"
              name="subCaste"
              onChange={handleChange}
              value={preferenceInfo.subCaste}
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
                //   marginLeft: "30px",
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
              <option value="Ms">Bengali</option>
              <option value="Ms">Pahadi</option>
              <option value="Shri">Kanyakubja</option>
              <option value="Ms">Maithil</option>
              <option value="Smt">Saryupareen</option>
              <option value="Ms">Mohyal</option>
              <option value="Ms">Bhumihar</option>
              <option value="Ms">Babhan</option>
              <option value="Ms">Pashchima Brahmin</option>
              <option value="Ms">Sanadhya</option>
              <option value="Ms">Shakaldweepi</option>
              <option value="Ms">Kulin Brahmin</option>
              <option value="Ms">Utkal Brahmin</option>
              <option value="Ms">Aadi gour</option>
              <option value="Ms">Saraswat</option>
              <option value="Ms">Mahabrahmin</option>
              <option value="Ms">Namboodiri</option>
              <option value="Ms">Ayyar</option>
              <option value="Ms">Tyagi</option>
              <option value="Ms">Ayangar</option>
            </TextField>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Education"
            variant="filled"
            lg={4}
            md={6}
            sm={12}
            name="education"
            onChange={handleChange}
            value={preferenceInfo.education}
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
            <option value="Never Married">Diploma</option>
            <option value="Widow">Graduate</option>
            <option value="Divorced">Post Graduate</option>
          </TextField>
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          />
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Employed In"
              variant="filled"
              type="number"
              name="employedIn"
              onChange={handleChange}
              value={preferenceInfo.employedIn}
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
            //     marginLeft: "30px",
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
              <option value="Shri">Government/ PSU</option>
              <option value="Smt">Private</option>
              <option value="Ms">Business</option>
              <option value="Ms">Defence</option>
              <option value="Ms">Self Employed</option>
              <option value="Ms">Not Working</option>
            </TextField>
          </Box>
        </Box>

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
};