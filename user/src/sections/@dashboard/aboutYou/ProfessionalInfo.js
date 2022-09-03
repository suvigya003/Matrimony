import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import { Box, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
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
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Employed In</InputLabel>
              <Select fullWidth label="Employed In">
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
            <TextField fullWidth label="Organisation Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <TextField fullWidth label="Annual Income" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box />
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            Work Location:
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
        </Grid>
      </Container>
    </>
  );
}

