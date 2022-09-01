import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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

export default function Members() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <Card>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Total Members" value="1" />
                <Tab label="Free Members" value="2" />
                <Tab label="Premium Members" value="3" />
                <Tab label="Blocked Members" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <User />
            </TabPanel>
            <TabPanel value="2">
              <User />
            </TabPanel>
            <TabPanel value="3">
              <User />
            </TabPanel>
            <TabPanel value="4">
              <User />
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
    );
}
