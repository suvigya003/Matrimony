import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Card, Button, Container, Stack, Typography } from '@mui/material';
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

export default function Blog() {
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

          <Grid item xs={12} sm={6} md={3}>
            {/* <Card title="Add New Package" total={234} color="grey" icon={'ant-design:bug-filled'} /> */}
            {/* <Card>
              <center>
                <Button sx={{ display: 'flex', flexDirection: 'column' }}>
                  <AddOutlinedIcon sx={{ height: 100, width: 100 }} />
                </Button>
                <Typography sx={{ width: '100%', height: '100%' }}>Add more images</Typography>
              </center>
            </Card> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
