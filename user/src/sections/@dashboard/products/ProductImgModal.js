import React, { useCallback, useState } from 'react';
import { Controlled as ControlledZoom } from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Box, Card, Link, Typography, Stack } from '@mui/material';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './Gallery.css';
import ProductModal from './ProductModal';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
    position: 'absolute',
  border:'1px solid black'
});

// ----------------------------------------------------------------------

ProductImgModal.propTypes = {
  product: PropTypes.object,
};

export default function ProductImgModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '60%',
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 0,
    borderRadius: '16px',
    // pt: 1,
  };
  const { name, cover, price, colors, status, priceSale } = product;
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <>
      <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          
            <ProductImgStyle alt={name} src={cover} />
          
          
          
        </Box>
      </Card>
      
    </>
  );
}
