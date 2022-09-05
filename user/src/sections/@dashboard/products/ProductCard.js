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
import ProductModalContent from '../../../_mock/ProductModalContent';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '90%',
    bgcolor: 'background.paper',
    //   border: '2px solid #000',
    boxShadow: 24,
    p: 0,
    borderRadius:'16px'
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
          <Button
            onClick={handleOpen}
            sx={{
              top: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
            }}
          >
            <ProductImgStyle alt={name} src={cover} />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <center>
                <ProductModal products={ProductModalContent} />
              </center>

              {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
              {/* <RedeemRewardsTable /> */}
            </Box>
          </Modal>
          {/* <ProductImgStyle alt={name} src={cover} /> */}
        </Box>
      </Card>
      {/* <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
          <ProductImgStyle alt={name} src={cover} />
          <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
            <TransformComponent>
              <img
                sx={{
                  top: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                }}
                // src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                src={cover}
                alt="Hello"
                srcSet=""
              />
              <ProductImgStyle alt={name} src={cover} />
            </TransformComponent>
          </TransformWrapper>
          <InnerImageZoom src={cover} zoomSrc="/path/to/zoom-image.jpg" />
          <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          <img
            alt="That wanaka tree, alone in the water near mountains"
            src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="500"
          />
        </ControlledZoom>
        </Box>

        
      </Card> */}
    </>
  );
}
