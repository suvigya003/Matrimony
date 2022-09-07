import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import TextField from '@mui/material/TextField';
import { Button, Stack,Input,Checkbox, InputAdornment, Box,Card,OutlinedInput, CardHeader, Grid, Container, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
// components
// import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';
// import Card from 'src/theme/overrides/Card';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'A',
  'B',
  'Chat',
  'D',  
];
export default function Blog() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <Page title="Dashboard: Blog">
      <Container>
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}

        <Grid container spacing={1}>
          {/* {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))} */}

          <Grid item xs={12} sm={6} md={3}>
            <BlogWidgetSummary title="Package 1" total={714} icon={'ant-design:android-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <BlogWidgetSummary title="Package 2" total={13} color="info" icon={'ant-design:apple-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <BlogWidgetSummary title="Package 3" total={172} color="warning" icon={'ant-design:windows-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <BlogWidgetSummary title="Package 4" total={234} color="error" icon={'ant-design:bug-filled'} />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Card>
            <CardHeader title="Add New Plan" />
            <Box p={3} sx={{}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Monthly Discount (%)" variant="outlined" />
                </Grid>

                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Annual Discount (%)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Monthly Price (Rs.)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField fullWidth label="Annual Price (Rs.)" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-checkbox-label">Description</InputLabel>
                    <Select
                      label="Description"
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      fullWidth
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput label="Description" />}
                      renderValue={(selected) => selected.join(', ')}
                      // MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Stack direction="row" alignItems="center" justifyContent="left" mb={3} ml={-1} mt={1}>
                    <Button
                      variant="contained"
                      component={RouterLink}
                      to="#"
                      //   startIcon={<Iconify icon="eva:plus-fill" />}
                     
                    >
                      Add New Service
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>

        {/* <Card title="Add New Package" total={234} color="grey" icon={'ant-design:bug-filled'} /> */}
        {/* <Card>
              <center>
                <Button sx={{ display: 'flex', flexDirection: 'column' }}>
                  <AddOutlinedIcon sx={{ height: 100, width: 100 }} />
                </Button>
                <Typography sx={{ width: '100%', height: '100%' }}>Add more images</Typography>
              </center>
            </Card> */}
      </Container>
    </Page>
  );
}
