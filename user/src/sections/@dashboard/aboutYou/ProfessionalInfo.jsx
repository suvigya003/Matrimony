import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
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
export default function ProfessionalInfo  ({nextStep,calcPercentage})  {
      const [professionalInfo, setProfessionalInfo] = useState({
                  employedIn: "",
organisationName: "",
annualIncome: "",
country: "",
state: "",
city: "",
      })
      const [trueValue, setTrueValue] = useState({
            employedIn: false,
organisationName: false,
annualIncome: false,
country: false,
state: false,
city: false,
      });
      let count = 0;
      // const percentage=0;
      // const [count, setCount] = useState(0);
      // const [percentage, setPercentage] = useState(0);
      const handleChange = ({ currentTarget: input }) => {
            setProfessionalInfo({ ...professionalInfo, [input.name]: input.value });
            setTrueValue({ ...trueValue, [input.name]: true });     
            count = 0;
            Object.keys(trueValue).forEach((key) => {
                  if (trueValue[key] === true) {
                        count += 1;
                  }
            });
            calcPercentage(((count/6)*100).toFixed(0));
            console.log(professionalInfo);
      //       trueValue.map((item) => {
      //             console.log('hello');
      //             if (item == 1) {
      //                   setCount(count + 1);
      //             }
      //             else
      //                   setCount(count);
      //       })
      //       console.log( count );
      //       calcPercentage((count / 6) * 100);
      //      console.log(calcPercentage());
      };
      // console.log(calcPercentage());
      console.log(count);
      // useEffect(() => {
      //       const check = () => {
      //             trueValue.map((item) => {
      //             console.log('hello');
      //             if (item == 1) {
      //                   setCount(count + 1);
      //             }
      //             else
      //                   setCount(count);
      //             })
      //             const percentage = (count / 6) * 100;
      //       }
      //       check();
      
      // // setPercentage({ percentage });
      // }, []);
      // useEffect(() => {
      //       const check = async () => {
      //             await trueValue.map((item) => {
      //                   console.log(item);
      //                   if (item == 1) {
      //                         setCount(count + 1);
      //                   }
      //                   else {
      //                         setCount(count);
      //                   }
      //             }
      // )};
      //       check();
      // }, []);
      // console.log(percentage);
      const handleClick = () => {
            nextStep();
      }
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
            label="Employed In"
            variant="filled"
            type="number"
            lg={4}
            md={6}
            sm={12}
            name="employedIn"
            onChange={handleChange}
            value={professionalInfo.employedIn}
            //   {const a=()=>{setCount(value.length > 0 ? count + 1 : count)}}
            fullWidth
            InputProps={{
              disableUnderline: true,
            }}
            InputLabelProps={{
              style: {
                // paddingTop:'5px',
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
              marginTop: "0px",
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
          <TextField
            id="standard-basic"
            label="Organisation Name"
            variant="filled"
            type="text"
            name="organisationName"
            onChange={handleChange}
            value={professionalInfo.organisationName}
            //   {count}={{count} + 1}
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
              marginLeft: "30px",
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
          />
          <TextField
            id="standard-basic"
            label="Annual Income"
            variant="filled"
            type="text"
            name="annualIncome"
            onChange={handleChange}
            value={professionalInfo.annualIncome}
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
              marginLeft: "30px",
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
        <Typography mb="10px">Work Location:</Typography>
        <Box
          sx={{
            display: "flex",
            marginBottom: "30px",
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
            value={professionalInfo.country}
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
          <TextField
            id="standard-basic"
            label="State"
            variant="filled"
            name="state"
            onChange={handleChange}
            value={professionalInfo.state}
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
              marginLeft: "30px",
              color: "secondary",
              paddingLeft: "18px",
              paddingBottom: "5px",
              // minWidth:'100%',
              border: 1,
              borderColor: "#bdbdbd",
              borderRadius: "3px",
            }}
          />
          <TextField
            id="standard-basic"
            label="City"
            variant="filled"
            name="city"
            onChange={handleChange}
            value={professionalInfo.city}
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
              marginLeft: "30px",
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

        {/* <center>
          <Button onClick={handleClick}>NEXT</Button>
        </center> */}
      </Box>
    </ThemeProvider>
  );
}

