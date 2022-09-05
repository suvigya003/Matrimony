import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Box, Typography, Card, Button, Grid } from '@mui/material';
import Iconify from '../../../components/Iconify';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default function ProductList({ products, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            // backgroundColor: '#EDEFF1',
            border: '2px dashed blue',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            top: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <center>
            <Button sx={{ display: 'flex', flexDirection: 'column' }}>
              <AddOutlinedIcon sx={{ height: 100, width: 100 }} />
            </Button>
            {/* <Button variant="contained" component={RouterLink} to="#" sx={{justifyContent:'center', p:'0px 0px', pl:'0px',pr:'0px'}} startIcon={<Iconify icon="eva:plus-fill" />}/> */}
            <Typography sx={{ width: '100%', height: '100%' }}>Add more images</Typography>
          </center>
        </Card>
      </Grid>
    </Grid>
  );
}
