import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Divider, Card, Switch, CardHeader, Grid, Button, Container, Stack, Typography, Checkbox } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormControlLabel from '@mui/material/FormControlLabel';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// components

import { Monthly, Yearly } from '../sections/@dashboard/premiumPackage';
import Page from '../components/Page';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 182,
  height: 54,
  padding: 7,
  //   borderRadius:'16px',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(92)',
      '& .MuiSwitch-thumb:before': {
        //   content:'Yearly',
        // backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        //   '#fff'
        // )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#5F30E2',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff'
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF',
    borderRadius: 40 / 2,
  },
}));

export default function PremiumPackage() {
  const [first, setFirst] = useState(true)
  const handleFirstRemove = (event) => {
    setFirst(false);
  };
  const handleFirst = (event) => {
    setFirst(true);
  };
  const [second, setSecond] = useState(true);
  const handleSecondRemove = (event) => {
    setSecond(false);
  };
  const handleSecond = (event) => {
    setSecond(true);
  };
  const [third, setThird] = useState(true);
  const handleThirdRemove = (event) => {
    setThird(false);
  };
  const handleThird = (event) => {
    setThird(true);
  };
  const [fourth, setFourth] = useState(true);
  const handleFourthRemove = (event) => {
    setFourth(false);
  };
  const handleFourth = (event) => {
    setFourth(true);
  };
  const [fifth, setFifth] = useState(true);
  const handleFifthRemove = (event) => {
    setFifth(false);
  };
  const handleFifth = (event) => {
    setFifth(true);
  };
  const [check1, setCheck1] = useState(true);
  const handleClick1 = event => {
    setCheck1(true);
  }
  const handleClick11 = (event) => {
    setCheck1(false);
  };
  const [check2, setCheck2] = useState(true);
  const handleClick2 = (event) => {
    setCheck2(true);
  };
  const handleClick22 = (event) => {
    setCheck2(false);
  };
  const [check3, setCheck3] = useState(true);
  const handleClick3 = (event) => {
    setCheck3(true);
  };
  const handleClick33 = (event) => {
    setCheck3(false);
  };
  const [check4, setCheck4] = useState(true);
  const handleClick4 = (event) => {
    setCheck4(true);
  };
  const handleClick44 = (event) => {
    setCheck4(false);
  };
  const [value, setValue] = React.useState('1');

  const handleOpen = (event, newValue) => {
    setValue(newValue);
  };
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <Page title="Dashboard: Premium Package">
        <Container>
          <Card>
            <Box p={3}>
              <Stack direction="column" alignItems="center" justifyContent="center" mb={8}>
                <Typography variant="h3">Premium Plans</Typography>
                <Typography>No Contracts, No Surprise fees</Typography>
              </Stack>
              <Box m={5} pl={5} pr={5} mb={8} >
                <Grid container spacing={3}>
                  <Grid item sm={12} md={6}>
                    <Box
                      sx={{
                        backgroundColor: '#F9F9FB',
                        // backgroundColor: 'success.main',
                        borderRadius: '16px',
                        p: 5,
                      }}
                    >
                      <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <TabList onChange={handleOpen} aria-label="lab API tabs example">
                            <Tab label="Monthly" value="1" />
                            <Tab label="Yearly" value="2" />
                          </TabList>
                        </Box>
                        <TabPanel value="1">
                          <Box>
                            <Box sx={{ mt: 3 }}>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Limited Links</Typography>
                                {first ? (
                                  <Button onClick={handleFirstRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFirst}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Contact Number</Typography>
                                {second ? (
                                  <Button onClick={handleSecondRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleSecond}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Some Links</Typography>
                                {third ? (
                                  <Button onClick={handleThirdRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleThird}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Few Links</Typography>
                                {fourth ? (
                                  <Button onClick={handleFourthRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFourth}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Chat</Typography>
                                {fifth ? (
                                  <Button onClick={handleFifthRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFifth}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                            </Box>

                            {/* <Yearly /> */}
                          </Box>
                        </TabPanel>
                        <TabPanel value="2">
                          <Box>
                            <Box sx={{ mt: 3 }}>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>All Limited Links</Typography>
                                {first ? (
                                  <Button onClick={handleFirstRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFirst}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Chat</Typography>
                                {second ? (
                                  <Button onClick={handleSecondRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleSecond}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Contact Number</Typography>
                                {third ? (
                                  <Button onClick={handleThirdRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleThird}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
                                <Typography>Limited Links</Typography>
                                {fourth ? (
                                  <Button onClick={handleFourthRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFourth}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography>Some Links</Typography>
                                {fifth ? (
                                  <Button onClick={handleFifthRemove}>
                                    <CancelOutlinedIcon />
                                  </Button>
                                ) : (
                                  <Button onClick={handleFifth}>
                                    <CheckCircleIcon
                                      sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                    />
                                  </Button>
                                )}
                              </Box>
                            </Box>

                            {/* <Yearly /> */}
                          </Box>
                        </TabPanel>
                      </TabContext>
                      {/* <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                      >
                        <ToggleButton value="monthly">Monthly</ToggleButton>
                        
                        <ToggleButton value="yearly">Yearly</ToggleButton>
                      </ToggleButtonGroup> */}
                    </Box>
                  </Grid>
                  <Grid item sm={12} md={6}>
                    <Box>
                      <Grid container spacing={3}>
                        <Grid item md={12}>
                          {check1 ? (
                            <Card>
                              <Box
                                m={3}
                                ml={0}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button p={0} onClick={handleClick11}>
                                    <CircleOutlinedIcon />
                                  </Button>

                                  {/* <CheckCircleIcon
                                    sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                  /> */}
                                  <Box ml={2}>
                                    <Typography variant="h6">Intro</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: '#FEEEEE',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FA8968',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          ) : (
                            <Card sx={{ backgroundColor: 'primary.main' }}>
                              <Box
                                m={3}
                                ml={0}
                                sx={{
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button onClick={handleClick1}>
                                    <CheckCircleIcon
                                      sx={{
                                        color: 'white',
                                        backgroundColor: 'primary.main',
                                        borderRadius: '50%',
                                      }}
                                    />
                                  </Button>

                                  <Box ml={2}>
                                    <Typography variant="h6">Intro</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: 'primary.light',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FFFFFF',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          )}
                        </Grid>
                        <Grid item md={12}>
                          {check2 ? (
                            <Card>
                              <Box
                                m={3}
                                ml={0}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button p={0} onClick={handleClick22}>
                                    <CircleOutlinedIcon />
                                  </Button>

                                  {/* <CheckCircleIcon
                                    sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                  /> */}
                                  <Box ml={2}>
                                    <Typography variant="h6">Base</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: '#FEEEEE',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FA8968',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          ) : (
                            <Card sx={{ backgroundColor: 'primary.main' }}>
                              <Box
                                m={3}
                                ml={0}
                                sx={{
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button onClick={handleClick2}>
                                    <CheckCircleIcon
                                      sx={{ color: 'white', backgroundColor: 'primary.main', borderRadius: '50%' }}
                                    />
                                  </Button>

                                  <Box ml={2}>
                                    <Typography variant="h6">Base</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: 'primary.light',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FFFFFF',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          )}
                        </Grid>
                        <Grid item md={12}>
                          {check3 ? (
                            <Card>
                              <Box
                                m={3}
                                ml={0}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button p={0} onClick={handleClick33}>
                                    <CircleOutlinedIcon />
                                  </Button>

                                  {/* <CheckCircleIcon
                                    sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                  /> */}
                                  <Box ml={2}>
                                    <Typography variant="h6">Popular</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: '#FEEEEE',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FA8968',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          ) : (
                            <Card sx={{ backgroundColor: 'primary.main' }}>
                              <Box
                                m={3}
                                ml={0}
                                sx={{
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button onClick={handleClick3}>
                                    <CheckCircleIcon
                                      sx={{
                                        color: 'white',
                                        backgroundColor: 'primary.main',
                                        borderRadius: '50%',
                                      }}
                                    />
                                  </Button>

                                  <Box ml={2}>
                                    <Typography variant="h6">Popular</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: 'primary.light',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FFFFFF',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          )}
                        </Grid>
                        <Grid item md={12}>
                          {check4 ? (
                            <Card>
                              <Box
                                m={3}
                                ml={0}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button p={0} onClick={handleClick44}>
                                    <CircleOutlinedIcon />
                                  </Button>

                                  {/* <CheckCircleIcon
                                    sx={{ color: 'primary.main', backgroundColor: 'white', borderRadius: '50%' }}
                                  /> */}
                                  <Box ml={2}>
                                    <Typography variant="h6">Enterprise</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: '#FEEEEE',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FA8968',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          ) : (
                            <Card sx={{ backgroundColor: 'primary.main' }}>
                              <Box
                                m={3}
                                ml={0}
                                sx={{
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Button onClick={handleClick4}>
                                    <CheckCircleIcon
                                      sx={{ color: 'white', backgroundColor: 'primary.main', borderRadius: '50%' }}
                                    />
                                  </Button>

                                  <Box ml={2}>
                                    <Typography variant="h6">Enterprise</Typography>
                                    <Box
                                      sx={{
                                        backgroundColor: 'primary.light',
                                        borderRadius: '16px',
                                        pl: 2,
                                        pr: 2,
                                        color: '#FFFFFF',
                                      }}
                                    >
                                      <Typography variant="caption">Save 20%</Typography>
                                    </Box>
                                  </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                  <Typography variant="h3">$19 &nbsp;</Typography>
                                  <Typography variant="caption">/ Month</Typography>
                                </Box>
                              </Box>
                            </Card>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Divider variant="middle" />
              {/* Button */}
              <Stack direction="row" alignItems="center" justifyContent="left" mb={3} ml={3} mt={3}>
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="#"
                  //   startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Choose Plan
                </Button>
              </Stack>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
}
