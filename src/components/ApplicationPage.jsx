// ApplicationsPage.jsx - Main last edit
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import LeftSidebar from './LeftSideBar';  
import StudentApplicationsForm from './StudentAppSearch'; 

const ApplicationsPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', width: '100%' }}>
      <CssBaseline />
      <Box sx={{ flexShrink: 0 }}>
        <LeftSidebar defaultCollapsed={true} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'auto' }}>
        <StudentApplicationsForm />
      </Box>
    </Box>
  );
}



export default ApplicationsPage;
