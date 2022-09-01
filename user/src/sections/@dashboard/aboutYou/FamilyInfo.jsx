import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
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
            label="Family Type"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="familyType"
            onChange={handleChange}
            value={familyInfo.familyType}
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
            <option value="Shri">Joint</option>
            <option value="Smt">Nuclear</option>
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
        <Typography mb="30px">Father:</Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="fName"
            onChange={handleChange}
            value={familyInfo.fName}
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
              label="Occupation"
              variant="filled"
              name="fOccupation"
              onChange={handleChange}
              value={familyInfo.fOccupation}
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
              <option value="Government/ PSU">Government/ PSU</option>
              <option value="Private">Private</option>
              <option value="Business">Business</option>
              <option value="Defence">Defence</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Not Working">Not Working</option>
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
              label="Company/ Institution Name"
              variant="filled"
              name="fCompany"
              onChange={handleChange}
              value={familyInfo.fCompany}
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
        <Typography mb="30px">Mother:</Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="mName"
            onChange={handleChange}
            value={familyInfo.mName}
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
              label="Occupation"
              variant="filled"
              name="mOccupation"
              onChange={handleChange}
              value={familyInfo.mOccupation}
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
              <option value="Government/ PSU">Government/ PSU</option>
              <option value="Private">Private</option>
              <option value="Business">Business</option>
              <option value="Defence">Defence</option>
              <option value="Self Employed">Self Employed</option>
              <option value="House Wife">House Wife</option>
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
              label="Company/ Institution Name"
              variant="filled"
              name="mCompany"
              onChange={handleChange}
              value={familyInfo.mCompany}
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
            />
          </Box>
        </Box>
        <Typography mb="30px">Brother:</Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="bName"
            onChange={handleChange}
            value={familyInfo.bName}
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
              label="Occupation"
              variant="filled"
              name="bOccupation"
              onChange={handleChange}
              value={familyInfo}
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
                  shrink: "flase",
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
              <option value="Government/ PSU">Government/ PSU</option>
              <option value="Private">Private</option>
              <option value="Business">Business</option>
              <option value="Defence">Defence</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Student">Student</option>
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
              label="Company/ Institution Name"
              variant="filled"
              name="bCompany"
              onChange={handleChange}
              value={familyInfo.bCompany}
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
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          //   name=""
          onChange={handleChange}
          value={familyInfo}
          fullWidth
          sx={{
            // display:{sm:6, lg:4,xs:12},
            //     marginLeft:'30px'
            marginBottom: "30px",
            width: {
              xl: 350,
              lg: 325,
              md: 400,
              sm: 400,
              xs: 400,
            },
          }}
        >
          <AddCircleOutlineIcon
            sx={{
              marginRight: "10px",
            }}
          />
          More Preferences
        </Button>
        <Typography mb="30px">Sister:</Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="filled"
            type="text"
            lg={4}
            md={6}
            sm={12}
            name="sName"
            onChange={handleChange}
            value={familyInfo.sName}
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
              label="Occupation"
              variant="filled"
              name="sOccupation"
              onChange={handleChange}
              value={familyInfo}
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
              <option value="Government/ PSU">Government/ PSU</option>
              <option value="Private">Private</option>
              <option value="Business">Business</option>
              <option value="Defence">Defence</option>
              <option value="Self Employed">Self Employed</option>
              <option value="Student">Student</option>
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
              label="Company/ Institution Name"
              variant="filled"
              name="sCompany"
              onChange={handleChange}
              value={familyInfo.sCompany}
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
        <Button
          variant="contained"
          //   name=""
          onChange={handleChange}
          value={familyInfo}
          fullWidth
          sx={{
            // display:{sm:6, lg:4,xs:12},
            //     marginLeft:'30px'
            marginBottom: "30px",
            width: {
              xl: 390,
              lg: 325,
              md: 400,
              sm: 400,
              xs: 400,
            },
          }}
        >
          <AddCircleOutlineIcon
            sx={{
              marginRight: "10px",
            }}
          />
          More Preferences
        </Button>
        <Box
          sx={{
            display: "flex",
            marginBottom: "10px",
            alignItems: "center",
            //     justifyContent:'center'
          }}
        >
          <Typography mb="0px">Address:</Typography>
          <input type="checkbox" />
          {/* <TextField type="checkbox"/> */}
          <Typography mb="0px">Same as Bride</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
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
            value={familyInfo.address}
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
            label="Contact Number 1"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="contactNumber1"
            onChange={handleChange}
            value={familyInfo.contactNumber1}
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
              label="Contact Number 2"
              variant="filled"
              type="number"
              name="contactNumber2"
              onChange={handleChange}
              value={familyInfo.contactNumber2}
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
            />
          </Box>

          <Box
            width="100%"
            sx={{
              marginLeft: "30px",
            }}
          />
        </Box>
        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
};

