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
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';
import { ColorPreview } from '../../../components/color-utils';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});
export default function ProductModal(product) {
    const { name, cover, price, colors, status, priceSale } = product;
    return (
      <>
        <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
          <TransformComponent>
            <img
              sx={{
                // top: '10vh',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                // position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                // width: '60%',
                bgcolor: 'background.paper',
                //   border: '2px solid #000',
                boxShadow: 24,
                p: 30,
              }}
              src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              //   src={cover}
              alt="Hello"
              srcSet=""
            />
            {/* <ProductImgStyle alt={name} src={cover} /> */}
          </TransformComponent>
        </TransformWrapper>
      </>
    );
}


