import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
            label="Rashi"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="rashi"
            onChange={handleChange}
            value={astroInfo.rashi}
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
          />
          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Nakshatra"
              variant="filled"
              type="text"
              name="nakshatra"
              onChange={handleChange}
              value={astroInfo.nakshatra}
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
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          >
            <TextField
              id="standard-basic"
              label="Date of Birth"
              type="date"
              variant="filled"
              name="dob"
              onChange={handleChange}
              value={astroInfo.dob}
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
            />
          </Box>
        </Box>
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
};
