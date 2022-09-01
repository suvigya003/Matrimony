import React, { useState } from 'react';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// material
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
import Page from '../components/Page';
import { Notification, SMS } from '../sections/@dashboard/communication';

export default function Communication() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Page title="Dashboard: Products">
        <Container>
          <Card>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Notification" value="1" />
                    <Tab label="SMS" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Notification />
                </TabPanel>
                <TabPanel value="2">
                  <SMS />
                </TabPanel>
              </TabContext>
            </Box>
          </Card>
        </Container>
      </Page>
    </>
  );
}
