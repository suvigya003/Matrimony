import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import Iconify from '../../../components/Iconify';
import NotificationTable from './NotificationTable';

export default function Notification() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box marginBottom={3}>
          <TextField fullWidth label="Title" variant="outlined" />
        </Box>
        <Box marginBottom={3}>
          <TextField fullWidth label="Notification Message" multiline rows={10} variant="outlined" />
        </Box>

        {/* <FormControl sx={{ m: 1 }} variant="outlined">
          <label htmlFor="temp">
            Title
            <OutlinedInput
              id="outlined-adornment-weight"
              fullWidth
              //   value={values.weight}
              //   onChange={handleChange('weight')}
              //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
            />
          </label>
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <label htmlFor="temp">
            Notification Message
            <OutlinedInput
              id="outlined-adornment-weight"
              multiline
              maxRows={4}
              //   width='100%'
              //   value={values.weight}
              //   onChange={handleChange('weight')}
              //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              sx={{
                minWidth: '100%',
              }}
            />
          </label>
        </FormControl> */}
        <Stack direction="row" alignItems="center" justifyContent="left" mb={5} ml={1} mt={1}>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            //   startIcon={<Iconify icon="eva:plus-fill" />}
            sx={{ pl: '20px', pr: '20px' }}
          >
            Send
          </Button>
        </Stack>
        <NotificationTable />
      </Box>
    </>
  );
}
