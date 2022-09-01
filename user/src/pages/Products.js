import { useState } from 'react';
// material
import { Box, Card, Button, Container, Stack, Typography, Grid } from '@mui/material';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Gallery Images
        </Typography>

        {/* <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort />
          </Stack>
        </Stack> */}

        <ProductList products={PRODUCTS} />
        {/* <Grid container spacing={3} sx={{ border: '1px solid black' }} xs={12} sm={6} md={3}>
          <Grid item sx={{ border: '1px solid black' }} xs={12} sm={6} md={3}> */}
        {/* <Card sx={{ border: '1px solid blue' }} xs={12} sm={6} md={3}>
          
          <Button sx={{ border: '1px solid green' }}>
            <AddOutlinedIcon sx={{ height: 100, width: 100 }} />
          </Button>
          <Typography>Add more images</Typography>
        </Card> */}
        {/* </Grid>
        </Grid> */}

        {/* <ProductCartWidget /> */}
      </Container>
    </Page>
  );
}
