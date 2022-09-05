import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary } from '../sections/@dashboard/blog';
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
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Matches
          </Typography>

          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button> */}
        </Stack>
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
              backgroundColor: '#4DB337',
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
        {/* </Box> */}
        {/* <Card>
          <Grid container spacing={2} mb={3} sx={{ p: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <BlogWidgetSummary title="Offer 1" total={23} icon={'ant-design:android-filled'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <BlogWidgetSummary title="Offer 2" total={50} color="info" icon={'ant-design:apple-filled'} />
            </Grid>
          </Grid>
          <Stack direction="row" alignItems="center" justifyContent="left" mb={5} ml={3} mt={1} sx={{ pr: 3 }}>
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ p: '8px', pl: '20px', pr: '20px' }}
            >
              Payment
            </Button>
          </Stack>
        </Card> */}
        {/* search bar and latest */}
        <Stack mt={5} mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          {/* <BlogPostsSort options={SORT_OPTIONS} /> */}
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
