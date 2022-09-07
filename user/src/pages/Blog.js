import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Grid, Button, Container, Stack, Typography } from '@mui/material';
// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary, BlogMatches, BlogShortlisted } from '../sections/@dashboard/blog';
// mock
import POSTS from '../_mock/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Page title="Dashboard: Blog">
      <Container>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Matches" value="1" />
              <Tab label="Shortlisted Matches" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BlogMatches />
          </TabPanel>
          <TabPanel value="2">
            <BlogShortlisted />
          </TabPanel>
        </TabContext>
        {/* <Box
          fullWidth
          sx={{
            display: 'flex',
            mb: 3,
            height: '60px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Box
            sx={{
              // backgroundColor: '#4DB337',
              backgroundColor: 'success.main',
              width: '263px',
              height: '60px',
              borderRadius: '16px',
            }}
          />

          <Box
            sx={{
              width: 0,
              height: 0,
              borderTop: '0px solid transparent',
              borderLeft: '60px solid #4DB337',
              borderBottom: '60px solid transparent',
              position: 'absolute',
              // border: '1px solid black',
              zIndex: 2,
              ml: '250px',
              // width: 400px;
              // height: 200px;
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              // top: '50%',
              // left: 50,
              width: 0,
              height: 0,
              borderTop: '40px solid transparent',
              borderLeft: '40px solid #A8D8A0',
              borderBottom: '0px solid transparent',
              zIndex: 1,
              marginTop: '20px',
              ml: '250px',
            }}
          />

          <Box
            alignItems="center"
            sx={{
              position: 'absolute',
              ml: '315px',
              // border: '1px solid black',
              // height: '60px',
              maxWidth: '40%',
              alignSelf: 'center',
              // m:3
            }}
          >
            <Typography>
              Lorem ipsum dolor sit aque reprehenderit voluptatemipsum dolor sit aque reprehenderit voluptatem similique
              similique suscipit qui!
            </Typography>
          </Box>
          <Box
            sx={{
              // border: '1px solid black',
              position: 'absolute',
              alignSelf: 'center',
              justifySelf: 'right',
              // mr: 0,
              ml: 108,
            }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ p: '8px', pl: '20px', pr: '20px' }}
            >
              Payment
            </Button>
          </Box>
        </Box>
        <Box
          fullWidth
          sx={{
            display: 'flex',
            mb: 3,
            height: '60px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#297FFF',
              width: '263px',
              height: '60px',
              borderRadius: '16px',
            }}
          />

          <Box
            sx={{
              width: 0,
              height: 0,
              borderTop: '0px solid transparent',
              borderLeft: '60px solid #297FFF',
              borderBottom: '60px solid transparent',
              position: 'absolute',
              // border: '1px solid black',
              zIndex: 2,
              ml: '250px',
              // width: 400px;
              // height: 200px;
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              // top: '50%',
              // left: 50,
              width: 0,
              height: 0,
              borderTop: '40px solid transparent',
              borderLeft: '40px solid #96C2FF',
              borderBottom: '0px solid transparent',
              zIndex: 1,
              marginTop: '20px',
              ml: '250px',
            }}
          />

          <Box
            alignItems="center"
            sx={{
              position: 'absolute',
              ml: '315px',
              // border: '1px solid black',
              // height: '60px',
              maxWidth: '40%',
              alignSelf: 'center',
              // m:3
            }}
          >
            <Typography>
              Lorem ipsum dolor sit aque reprehenderit voluptatemipsum dolor sit aque reprehenderit voluptatem similique
              similique suscipit qui!
            </Typography>
          </Box>
          <Box
            sx={{
              // border: '1px solid black',
              position: 'absolute',
              alignSelf: 'center',
              justifySelf: 'right',
              // mr: 0,
              ml: 108,
            }}
          >
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ p: '8px', pl: '20px', pr: '20px' }}
            >
              Payment
            </Button>
          </Box>
        </Box>
        
        <Stack mt={5} mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
         
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid> */}
      </Container>
    </Page>
  );
}
