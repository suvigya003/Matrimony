import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Box,
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import User from './User';
// material
// import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductSort, ProductList, ProductCartWidget, ProductFilterSidebar, ProductRewards, ProductReferralUsers } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/products';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    // <Page title="Dashboard: Products">
    //   <Container>
    //     <Typography variant="h4" sx={{ mb: 5 }}>
    //       Products
    //     </Typography>

    //     <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
    //       <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
    //         <ProductFilterSidebar
    //           isOpenFilter={openFilter}
    //           onOpenFilter={handleOpenFilter}
    //           onCloseFilter={handleCloseFilter}
    //         />
    //         <ProductSort />
    //       </Stack>
    //     </Stack>
    //     {/* description of each card */}
    //     <ProductList products={PRODUCTS}/>
    //     <ProductCartWidget />
    //   </Container>
    // </Page>
    <Card>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Set Referral Rewards" value="1" />
              <Tab label="Referral Users" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ProductRewards />
            {/* <User/> */}
          </TabPanel>
          <TabPanel value="2">
            <ProductReferralUsers />
            {/* <User/> */}
          </TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
}
