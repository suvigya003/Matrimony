import { Link as RouterLink } from 'react-router-dom';
// material
import { Card, Grid, Button, Container, Stack, Typography } from '@mui/material';
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
        <Card>
          <Grid container spacing={2} mb={3} sx={{ p: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <BlogWidgetSummary title="Offer 1" total={23} icon={'ant-design:android-filled'} />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <BlogWidgetSummary title="Offer 2" total={50} color="info" icon={'ant-design:apple-filled'} />
            </Grid>
          </Grid>
          <Stack direction="row" alignItems="center" justifyContent="left" mb={5} ml={3} mt={1} sx={{pr:3}}>
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              //   startIcon={<Iconify icon="eva:plus-fill" />}
              sx={{ pl: '20px', pr: '20px' }}
            >
              Payment
            </Button>
          </Stack>
        </Card>
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
