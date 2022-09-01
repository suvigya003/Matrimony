import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
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
            <ThemeProvider theme={theme}>
                  <Box>
                        {/* <Divider variant="middle"
                              sx={{
                                    marginBottom: '30px',
                                    border: '1px dashed blue'
                              }}
                        /> */}
                        <Box
                              sx={{
                                    display: 'flex',
                                    marginBottom: '30px'
                              }}
                        >
                              <TextField id="standard-basic" label="Religion" variant="filled" type="text"
                                    lg={4}
                                    md={6}
                                    sm={12}
                                    name="religion"
                                    onChange={handleChange}
                                    value={religionInfo.religion} fullWidth
                                    InputProps={{
                                          disableUnderline: true,
                                    }}
                                    InputLabelProps={{
                                          style: {
                                                paddingTop: '5px',
                                                paddingLeft: '20px',
                                                color: '#bdbdbd',
                                                textTransform: "none",
                                                fontSize: '15px',
                                                shrink: 'false',
                                          }
                                    }}
                                    sx={{
                                          color: 'secondary',
                                          paddingLeft: '18px',
                                          paddingBottom: '5px',
                                          // minWidth:'100%',
                                          border: 1,
                                          borderColor: '#bdbdbd',
                                          borderRadius: '3px'
                                    }}
                                    select>
                                    <option value="Female">Hindu</option>
                              </TextField>
                              <TextField id="standard-basic" label="Caste" variant="filled" type="number"
                                    name="caste"
                                    onChange={handleChange}
                                    value={religionInfo.caste} fullWidth
                                    InputProps={{
                                          disableUnderline: true,
                                    }}
                                    InputLabelProps={{
                                          style: {
                                                
                                                paddingTop: '5px',
                                                paddingLeft: '20px',
                                                color: '#bdbdbd',
                                                textTransform: "none",
                                                fontSize: '15px',
                                                shrink: 'false',
                                          }
                                    }}
                                    sx={{
                                          marginLeft: '30px',
                                          color: 'secondary',
                                          paddingLeft: '18px',
                                          paddingBottom: '5px',
                                          // minWidth:'100%',
                                          border: 1,
                                          borderColor: '#bdbdbd',
                                          borderRadius: '3px'
                                    }}
                                    select>
                                    <option value="Female">Brahmin</option>
                              </TextField>
                              <TextField id="standard-basic" label="Subcaste" variant="filled"
                                    name="subcaste"
                                    onChange={handleChange}
                                    value={religionInfo.subcaste} fullWidth
                                    InputProps={{
                                          disableUnderline: true,
                                    }}
                                    InputLabelProps={{
                                          style: {
                                                paddingTop: '5px',
                                                paddingLeft: '20px',
                                                color: '#bdbdbd',
                                                textTransform: "none",
                                                fontSize: '15px',
                                                shrink: 'false',
                                          }
                                    }}
                                    sx={{
                                          marginLeft: '30px',
                                          color: 'secondary',
                                          paddingLeft: '18px',
                                          paddingBottom: '5px',
                                          // minWidth:'100%',
                                          border: 1,
                                          borderColor: '#bdbdbd',
                                          borderRadius: '3px'
                                    }}
                                    select>
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
                        {/* <center>
                              <Button onClick={handleClick}>NEXT</Button>
                        </center> */}
                  </Box>
            </ThemeProvider>
      );
}

