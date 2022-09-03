import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Typography, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default function You() {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h5">Let the world know about you!!</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField fullWidth multiline maxRows={20} label="Write something about you" variant="outlined" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
