import React from 'react';
import Box from '@mui/material/Box';
import SideMenu from './components/side-menu/SideMenu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const drawerWidth = 190;

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Header 
        drawerWidth={drawerWidth} 
        handleDrawerToggle={handleDrawerToggle}
      />
      <SideMenu 
        drawerWidth={drawerWidth} 
        mobileOpen={mobileOpen} 
        handleDrawerToggle={handleDrawerToggle} 
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <h1>Home</h1>
      </Box>
      <Footer />
    </Box>
  );
}
