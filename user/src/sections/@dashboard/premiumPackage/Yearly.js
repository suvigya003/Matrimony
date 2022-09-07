import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Divider, Card, Switch, CardHeader, Grid, Button, Container, Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// import Page from '../components/Page';
// import Page from '../../Page;

export default function Yearly() {
  return (
    <>
      {/* <Page></Page> */}
      <Container>
        Hello
        <Box sx={{ border: '1px solid black' }}>
          <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
            <Typography>All Limited Links</Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
            <Typography>Chat</Typography>
            <CheckCircleOutlineIcon sx={{ backgroundColor: '#5F30E2' }} />
          </Box>
          <Box sx={{ display: 'flex', mb: 3, justifyContent: 'space-between' }}>
            <Typography>Contact Number</Typography>
            <CheckCircleOutlineIcon />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography>Limited Links</Typography>
            <CheckCircleOutlineIcon />
          </Box>
        </Box>
      </Container>
    </>
  );
}
