import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Grid, Button, Container, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// components
import Page from '../../../components/Page';
// import Iconify from '../components/Iconify';
// import { BlogPostCard, BlogPostsSort, BlogPostsSearch, BlogWidgetSummary } from './blog';
// mock
import POSTS from '../../../_mock/blog';
import BlogShortlistedPostCard from './BlogShortlistedPostCard';
import BlogPostsSearch from './BlogPostsSearch';
import BlogWidgetSummary from './BlogWidgetSummary';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

// ----------------------------------------------------------------------

export default function BlogShortlisted() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        
       
       
        {/* search bar and latest */}
        <Stack mt={2} mb={2} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          {/* <BlogPostsSort options={SORT_OPTIONS} /> */}
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogShortlistedPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
