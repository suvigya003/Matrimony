// import React from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader, Grid } from '@mui/material';
// import { Grid, Card, CardHeader } from '@mui/material';
import ShopProductCard from '../products/ProductCard';

AppHappyStories.propTypes = {
  title: PropTypes.string,
  // subheader: PropTypes.string,
//   list: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
};

export default function AppHappyStories({title,products,...other}) {
    return (
      <>
        <Card spacing={3} sx={{ p: 3, pt: 0 }} {...other}>
          <CardHeader title={title} />
          <Divider />
          <Grid container spacing={3} sx={{ pt: 3}} {...other}>
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
