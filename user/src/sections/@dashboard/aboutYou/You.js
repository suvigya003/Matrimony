import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Typography, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Grid3x3Outlined } from '@mui/icons-material';

export default function You() {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Box m={3} mb={0}>
            <Typography variant="h5">Let the world know about you!!</Typography>
            {/* <TextField fullWidth multiline maxRows={20} label="Write something about you" variant="outlined" /> */}
          </Box>
          <TextField sx={{ m:3 }} fullWidth label="About You" multiline rows={8} variant="outlined" />

          {/* <Grid item xs={12} sm={12} md={12}> */}

          {/* </Grid> */}
          {/* <Box xs={12} sm={12} md={12}> */}

          {/* </Box> */}
        </Grid>
      </Container>
    </>
  );
}
