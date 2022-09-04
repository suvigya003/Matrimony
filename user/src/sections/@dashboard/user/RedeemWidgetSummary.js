// @mui
import React from 'react';
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Box,Button, Card, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import RedeemRewardsTable from './RedeemRewardsTable';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

RedeemWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
    p: 4,
  pt:1
};
export default function RedeemWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
    // const handleOpen = () => setOpen(true);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{
        py: 4,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        <center>
          <img alt="trophy" height={50} width={50} src="https://cdn-icons-png.flaticon.com/128/3112/3112946.png" />
        </center>
        <Button sx={{ textDecoration: 'none' }} onClick={handleOpen}>
          {title}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
            <RedeemRewardsTable />
          </Card>
        </Modal>
      </Typography>

      {/* <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        {title}
        <Button onClick={handleOpen}>Redeem Rewards</Button>
      </Typography> */}
    </Card>
  );
}
