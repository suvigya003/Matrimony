import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// material
import {
    Box,
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

export default function ProductRewards() {
    return (
      <>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>Reward per Referral:</Typography>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}

              {/* <input type="text" /> */}
              <OutlinedInput
                id="outlined-adornment-weight"
                // fullWidth
                //   width='100%'
                //   value={values.weight}
                //   onChange={handleChange('weight')}
                startAdornment={<InputAdornment position="end">$ &nbsp;</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
              />
              {/* </label> */}
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography>Reward per Referral:</Typography>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}

              {/* <input type="text" /> */}
              <OutlinedInput
                id="outlined-adornment-weight"
                // multiline
                // maxRows={4}
                //   width='100%'
                //   value={values.weight}
                //   onChange={handleChange('weight')}
                startAdornment={<InputAdornment position="end">$ &nbsp;</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                sx={{
                  minWidth: '100%',
                }}
              />
            </FormControl>
          </Box>

          <Stack direction="row" alignItems="center" justifyContent="right" mb={5} mr={1} mt={1}>
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ pl: '20px', pr: '20px' }}
            >
              Update
            </Button>
          </Stack>
        </Box>
      </>
    );
}