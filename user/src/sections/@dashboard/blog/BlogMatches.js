import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Grid, Button, Container, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// components
import Page from '../../../components/Page';
// import Iconify from '../components/Iconify';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary } from './blog';
// mock
import POSTS from '../../../_mock/blog';
import BlogPostCard from './BlogPostCard';
import BlogPostsSearch from './BlogPostsSearch';
import BlogWidgetSummary from './BlogWidgetSummary';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogMatches() {
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown(false);
  };
  const [open, setOpen] = useState(true);
  const handleOpen = (event) => {
    setOpen(false);
  };
  return (
    <Page title="Dashboard: Blog">
      <Container>
        {isShown && (
          <Box
            fullWidth
            sx={{
              display: 'flex',
              mb: 2,
              // position: 'absolute',
              height: '50px',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              // border: '1px solid black',
            }}
          >
            <Box
              sx={{
                color: '#FFFFFF',
                minWidth: '263px',
                // border: '1px solid black',
                alignSelf: 'center',
                // alignItems: 'center',
                // justifyContent:'center',
                // justifySelf: 'center',
                zIndex: 3,
                justifyItems: 'center',
                pl: 3,
              }}
            >
              <Typography variant="h6">Want to check more</Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                backgroundColor: '#4DB337',
                width: '263px',
                height: '50px',
                borderRadius: '16px',
                // zIndex: 2,
                // border: '1px solid black',
              }}
            />
            {/* green triangle */}
            <Box
              sx={{
                width: 0,
                height: 0,
                borderTop: '0px solid transparent',
                borderLeft: '50px solid #4DB337',
                borderBottom: '50px solid transparent',
                position: 'absolute',
                // border: '1px solid black',
                zIndex: 2,
                ml: '250px',
                // width: 400px;
                // height: 200px;
              }}
            />
            {/* light green triangle */}
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
                marginTop: '10px',
                ml: '250px',
              }}
            />

            <Box
              alignItems="center"
              sx={{
                // border: '1px solid black',
                ml: '39px',
                maxWidth: '30%',
                minWidth: '430px',
                alignSelf: 'center',
                // m:3
              }}
            >
              <Typography>Lorem ipsum dolor sit nderit voluptatem similique similique suscipit qui!</Typography>
            </Box>
            <Box
              sx={{
                // border: '1px solid black',
                position: 'absolute',
                alignSelf: 'center',
                justifySelf: 'right',
                // mr: 0,
                ml: 93,
              }}
            >
              <Button variant="contained" component={RouterLink} to="#" sx={{ p: '8px', pl: '20px', pr: '20px' }}>
                Payment
              </Button>
            </Box>
            <Button onClick={handleClick} sx={{ pl: 15 }}>
              <CloseIcon />
            </Button>
          </Box>
        )}

        {/* {open &&
          (
             <Box
          fullWidth
          sx={{
            display: 'flex',
            mb: 3,
            height: '50px',
            borderRadius: '16px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#297FFF',
              width: '263px',
              height: '50px',
              borderRadius: '16px',
            }}
          />

          <Box
            sx={{
              width: 0,
              height: 0,
              borderTop: '0px solid transparent',
              borderLeft: '50px solid #297FFF',
              borderBottom: '50px solid transparent',
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
              marginTop: '10px',
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
              maxWidth: '30%',
              alignSelf: 'center',
              // m:3
            }}
          >
            <Typography>Lorem ipsum dolor sit nderit voluptatem similique similique suscipit qui!</Typography>
          </Box>
          <Box
            sx={{
              // border: '1px solid black',
              position: 'absolute',
              alignSelf: 'center',
              justifySelf: 'right',
              // mr: 0,
              ml: 93,
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
          <Button onClick={handleOpen}>
              <CloseIcon />
            </Button>
        </Box> 
  )} */}
        {open && (
          <Box
            fullWidth
            sx={{
              display: 'flex',
              mb: 2,
              // position: 'absolute',
              height: '50px',
              borderRadius: '16px',
              backgroundColor: '#FFFFFF',
              // border: '1px solid black',
            }}
          >
            <Box
              sx={{
                color: '#FFFFFF',
                minWidth: '263px',
                // border: '1px solid black',
                alignSelf: 'center',
                // alignItems: 'center',
                // justifyContent:'center',
                // justifySelf: 'center',
                zIndex: 3,
                justifyItems: 'center',
                pl: 3,
              }}
            >
              <Typography variant="h6">Want to check more</Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                backgroundColor: '#297FFF',
                width: '263px',
                height: '50px',
                borderRadius: '16px',
                // zIndex: 2,
                // border: '1px solid black',
              }}
            />
            {/* green triangle */}
            <Box
              sx={{
                width: 0,
                height: 0,
                borderTop: '0px solid transparent',
                borderLeft: '50px solid #297FFF',
                borderBottom: '50px solid transparent',
                position: 'absolute',
                // border: '1px solid black',
                zIndex: 2,
                ml: '250px',
                // width: 400px;
                // height: 200px;
              }}
            />
            {/* light green triangle */}
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
                marginTop: '10px',
                ml: '250px',
              }}
            />

            <Box
              alignItems="center"
              sx={{
                // border: '1px solid black',
                ml: '39px',
                maxWidth: '30%',
                minWidth: '430px',
                alignSelf: 'center',
                // m:3
              }}
            >
              <Typography>Lorem ipsum dolor sit nderit voluptatem similique similique suscipit qui!</Typography>
            </Box>
            <Box
              sx={{
                // border: '1px solid black',
                position: 'absolute',
                alignSelf: 'center',
                justifySelf: 'right',
                // mr: 0,
                ml: 93,
              }}
            >
              <Button variant="contained" component={RouterLink} to="#" sx={{ p: '8px', pl: '20px', pr: '20px' }}>
                Payment
              </Button>
            </Box>
            <Button onClick={handleOpen} sx={{ pl: 15 }}>
              <CloseIcon />
            </Button>
          </Box>
        )}
        <Stack mt={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
        </Stack>

        <Grid container spacing={2}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
