import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import Page from '../components/Page';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  Divider,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Step,
  Stepper,
  StepLabel,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import {
  AstroInfo,
  EducationalInfo,
  FamilyInfo,
  PersonalInfo,
  Preference,
  ProfessionalInfo,
  ReligionInfo,
  You
} from '../sections/@dashboard/aboutYou';

export default function AboutYou() {
  const [percentage, setPercentage] = useState(0);
  const [state, setState] = useState(1);
  console.log(state.panel);
  const nextStep = () => {
    setState(state + 1);
  };
  const calcPercentage = (percentage) => {
    setPercentage(percentage);
  };

  const steps = [
    'Personal Info',
    'Educational Info',
    'Professional Info',
    'Family Info',
    'Religion Info',
    'Preferences',
    'Astro Info',
    'About Info',
  ];

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Page title="Happy Stories"> */}
      <Container>
        <Card>
          <Box conatiner>
            {/* 6 buttons */}
            {/* <Box mt={2} mb={6}>
                <Stepper activeStep={state - 1} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box> */}

            {/* 6 Accordions */}
            {/* {(() => {
                switch (state) {
                  case 1:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                // border: '1px solid black',
                              }}
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    display: 'flex',
                                  }}
                                >
                                  <img
                                    style={{ height: '25px', width: '25px' }}
                                    src="../images/user.png"
                                    alt=""
                                    srcSet=""
                                  />
                                  &nbsp; Personal Information &nbsp;
                                </Typography>
                              </Box>

                              <Box
                                // // marginLeft={85}
                                sx={{
                                  display: 'flex-end',
                                  float: 'right',
                                  // border: '1px solid black',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <PersonalInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 2:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/open-book.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Educational Information &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={80}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <EducationalInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 3:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/briefcase.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Professional Information &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={80}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <ProfessionalInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 4:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/family.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Family Information &nbsp;
                              </Typography>
                              <Box
                                // // marginLeft={85}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <FamilyInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 5:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/pray.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Religion Information &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={85}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <ReligionInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 6:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/feedback.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Preferences &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={90}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <Preference nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 7:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/astrology.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; Astro Information &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={87}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>{percentage}% Completion</Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider variant="middle" />
                            <AstroInfo nextStep={nextStep} calcPercentage={setPercentage} />
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  case 8:
                    return (
                      <Box marginBottom={1}>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Box
                              sx={{
                                display: 'flex',
                              }}
                            >
                              <Typography
                                sx={{
                                  display: 'flex',
                                }}
                              >
                                <img
                                  style={{ height: '25px', width: '25px' }}
                                  src="../images/profile.png"
                                  alt=""
                                  srcSet=""
                                />
                                &nbsp; About You &nbsp;
                              </Typography>
                              <Box
                                // marginLeft={93}
                                sx={{
                                  float: 'right',
                                }}
                              >
                                <Typography>
                                  {setPercentage()}
                                  {percentage}% Completion
                                </Typography>
                              </Box>
                            </Box>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Divider
                              variant="middle"
                              sx={{
                                marginBottom: '30px',
                                border: '1px dashed blue',
                              }}
                            />
                            <Typography variant="subtitle1" gutterBottom>
                              Let the world know about your awesomeness
                            </Typography>                            
                            <TextField
                              id="outlined-multiline-flexible"
                              label=""
                              variant="standard"
                              lg={8}
                              md={6}
                              sm={12}
                              multiline
                              maxRows={10}
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
                                  shrink: 'false',
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
                            <center>
                              <Button onClick={() => nextStep()}>NEXT</Button>
                            </center>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    );
                  // never forget the default case, otherwise VS code would be mad!
                  default:
                    <Box marginBottom={1}>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography
                            sx={
                              {
                                // fontWeight:'600'
                              }
                            }
                          >
                            <img style={{ height: '25px', width: '25px' }} src="../images/user.png" alt="" srcSet="" />
                            Personal Information
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Divider variant="middle" />
                          <PersonalInfo nextStep={nextStep} />
                        </AccordionDetails>
                      </Accordion>
                    </Box>;
                }
              })()} */}

            {/* <Box>
        
          <Box marginBottom={1}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
              <Typography
                sx={{
                  // fontWeight:'600'
                }}
              >
              <img style={{height:'25px', width:'25px', marginRight:'25px' }} src="../images/user.png" alt="" srcSet="" />
              Personal Information</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Divider variant="middle"/>
            <Personal_info nextStep={ nextStep}/>
        </AccordionDetails>
        </Accordion>
        </Box> 
        
        
         
          <Box marginBottom={1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
              <img style={{ height: '25px', width: '25px', marginRight:'25px' }} src="../images/open-book.png" alt="" srcSet="" />
              Educational Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider variant="middle"/>
          <Educational_info/>
        </AccordionDetails>
          </Accordion>
        </Box>
         
        
          <Box marginBottom={1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>
              <img style={{ height: '25px', width: '25px', marginRight:'25px' }} src="../images/briefcase.png" alt="" srcSet="" />
              Professional Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider variant="middle"/>
            <Professional_info/>
        </AccordionDetails>
          </Accordion>
        </Box>
        
         
              <Box marginBottom={1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>
              <img style={{ height: '25px', width: '25px', marginRight:'25px' }} src="../images/family.png" alt="" srcSet="" />
              Family Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider variant="middle"/>
            <Family_info/>
        </AccordionDetails>
          </Accordion>
        </Box>
         
          
            <Box marginBottom={1}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
              <Typography
                sx={{
                  // fontWeight:'600'
                }}
              >
              <img style={{height:'25px', width:'25px', marginRight:'25px' }} src="../images/pray.png" alt="" srcSet="" />
              Religion Information</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Divider variant="middle"/>
            <Religion_info/>
        </AccordionDetails>
        </Accordion>
          </Box>
        
        
          
            <Box marginBottom={1}>
          <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
              <Typography
                sx={{
                  // fontWeight:'600'
                }}
              >
              <img style={{height:'25px', width:'25px', marginRight:'25px' }} src="../images/feedback.png" alt="" srcSet="" />
              Preferences</Typography>
        </AccordionSummary>
          <AccordionDetails>
            <Divider variant="middle"/>
            <Preference/>
        </AccordionDetails>
        </Accordion>
          </Box>
          
        
          
            <Box marginBottom={1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>
              <img style={{ height: '25px', width: '25px', marginRight:'25px' }} src="../images/astrology.png" alt="" srcSet="" />
              Astro Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Divider variant="middle"/>
            <Astro_info/>
        </AccordionDetails>
          </Accordion>
          </Box>
          
        
          
            <Box marginBottom={1}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <Typography>
              <img style={{ height: '25px', width: '25px', marginRight:'25px' }} src="../images/profile.png" alt="" srcSet="" />
              About You
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
               <Divider variant="middle"
                                            sx={{
                                                marginBottom:'30px',
                                                border:'1px dashed blue'
                                            }}
            />
              <Typography variant="subtitle1" gutterBottom>
                    Let the world know about your awesomeness
              </Typography>
                
                
                <TextField id="outlined-multiline-flexible" label="" variant="standard"
                      lg={8 }
                      md={6}
                      sm={12}
                                    multiline
                                    maxRows={10}
                                    fullWidth
                                    InputProps={{
                                          disableUnderline: true,
                                    }}
                                    InputLabelProps={{
                                          style: {
                                                paddingTop:'5px',
                                                paddingLeft: '20px',
                                                color: '#bdbdbd',
                                                textTransform: "none",
                                                fontSize: '15px',
                                                shrink: 'false',
                                          }
                                    }}
                                    sx={{ 
                                          color:'secondary',
                                          paddingLeft: '18px',
                                          paddingBottom:'5px',
                                          // minWidth:'100%',
                                          border: 1,
                                          borderColor: '#bdbdbd',
                                          borderRadius: '3px'
                                    }}
                  />
            
        </AccordionDetails>
          </Accordion>
        </Box>
          
        
      </Box> */}

            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Personal Info" value="1" />
                    <Tab label="Educational Info" value="2" />
                    <Tab label="Professional Info" value="3" />
                    <Tab label="Family Info" value="4" />
                    <Tab label="Religion Info" value="5" />
                    <Tab label="Preferences" value="6" />
                    <Tab label="Astro Info" value="7" />
                    <Tab label="About You" value="8" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <PersonalInfo />
                </TabPanel>
                <TabPanel value="2">
                  <EducationalInfo />
                </TabPanel>
                <TabPanel value="3">
                  <ProfessionalInfo />
                </TabPanel>
                <TabPanel value="4">
                  <FamilyInfo />
                </TabPanel>
                <TabPanel value="5">
                  <ReligionInfo />
                </TabPanel>
                <TabPanel value="6">
                  <Preference />
                </TabPanel>
                <TabPanel value="7">
                  <AstroInfo />
                </TabPanel>
                <TabPanel value="8"><You/></TabPanel>
              </TabContext>
            </Box>
            {/* 2 buttons */}
            <Container maxWidth="xl">
              <Grid container spacing={0} mb={3} ml={3}>
                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="contained"
                    sx={{
                      // p:'10px',
                      paddingLeft: '45px',
                      paddingRight: '45px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      fontWeight: 600,
                      // borderRadius: '3px',
                    }}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                  <Button
                    variant="outlined"
                    sx={{
                      paddingLeft: '30px',
                      paddingRight: '30px',
                      paddingTop: '10px',
                      paddingBottom: '10px',
                      // marginLeft: '25px',
                      fontWeight: 600,
                      // borderRadius: '3px',
                    }}
                  >
                    Preview
                  </Button>
                </Grid>
              </Grid>
            </Container>

            {/* <Box
              mt={4}
              mb={3}
              sx={{
                display: 'inline-flex',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  // p:'10px',
                  paddingLeft: '45px',
                  paddingRight: '45px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 600,
                  // borderRadius: '3px',
                }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                sx={{
                  paddingLeft: '30px',
                  paddingRight: '30px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginLeft: '25px',
                  fontWeight: 600,
                  // borderRadius: '3px',
                }}
              >
                Preview
              </Button>
            </Box> */}
          </Box>
        </Card>
      </Container>
      {/* </Page> */}
    </>
  );
}
