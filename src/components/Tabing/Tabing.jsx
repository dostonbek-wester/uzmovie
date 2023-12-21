import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReactPlayer from 'react-player'


export default function LabTabs({video_link}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} style={{padding:0}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="ONLAYN KO'RISH" value="1" />
            <Tab label="YUKLASH" value="2" />
            <Tab label="TREYLERINI KO'RISH" value="3" />
          </TabList>
        </Box>
        <TabPanel style={{padding:0}} value="1">
            <ReactPlayer style={{marginTop:30}} width={"70%"} height={"500px"} controls url={video_link} />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}