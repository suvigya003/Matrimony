// import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

// import { Grid, Card, CardHeader } from '@mui/material';
import ShopProductCard from '../products/ProductCard';

AppHappyStories.propTypes = {
  title: PropTypes.string,
  // subheader: PropTypes.string,
//   list: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};
const InfoStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

export default function AppHappyStories({title,products,...other}) {
    return (
      <>
        <Card spacing={3} sx={{ p: 3, pt: 0 }} {...other}>
          <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
            <CardHeader title={title} />
            <InfoStyle>
              <Button
                size="small"
                sx={{
                  textTransform: 'none',
                  // color: '#795548',
                  fontWeight: 600,
                }}
              >
                See All
              </Button>
            </InfoStyle>
          </Box>

          <Divider />
          <Grid container spacing={3} sx={{ pt: 3 }} {...other}>
            {products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <ShopProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Card>
      </>
    );
}
