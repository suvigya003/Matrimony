import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField  from '@mui/material/TextField';
// material
import {
  Box,
  Grid,
  Card,
  CardHeader,
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
import ProductRewardsTable from './ProductRewardsTable'

export default function ProductRewards() {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* <Card> */}
          {/* <CardHeader title="Add New Reward"/> */}
          <h3 >Add New Reward</h3>
          <br />
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>Spotlight days:</Typography>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              
              <OutlinedInput
                id="outlined-adornment-weight"
                // fullWidth
                //   width='100%'
                //   value={values.weight}
                //   onChange={handleChange('weight')}
                // startAdornment={<InputAdornment position="end">$ &nbsp;</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>Referral Count:</Typography>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
             
              <OutlinedInput
                id="outlined-adornment-weight"
                // multiline
                // maxRows={4}
                //   width='100%'
                //   value={values.weight}
                //   onChange={handleChange('weight')}
                // startAdornment={<InputAdornment position="end">$ &nbsp;</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                sx={{
                  minWidth: '100%',
                }}
              />
            </FormControl>
          </Box> */}
          {/* <Box mt={ 3} ml={3}> */}
            <Grid container spacing={3} >
              <Grid item xs={12} sm={6} md={3} >
                <TextField fullWidth label="Spotlight Days" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField fullWidth label="Referral Count" variant="outlined" />
              </Grid>
            </Grid>
          {/* </Box> */}

          <Stack direction="row" alignItems="center" justifyContent="left" mb={3} ml={1} mt={3}>
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ p: '8px', pl: '20px', pr: '20px' }}
            >
              Add
            </Button>
          </Stack>
          <ProductRewardsTable />
          {/* </Card> */}
        </Box>
      </>
    );
}