import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  zIndex: theme.zIndex.appBar,
  padding: '1rem 0',
  [theme.breakpoints.up('md')]: {
    '& .MuiToolbar-root': {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '0.5rem 1rem',
      maxWidth: '900px',
      margin: '0 auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: '#1A237E',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '6px 16px',
  '&:hover': {
    backgroundColor: 'rgba(26, 35, 126, 0.04)',
  },
}));

const FindTutorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF6B00',
  color: '#fff',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '8px 24px',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#e65c00',
  },
}));

const FullScreenDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    height: '100%',
    background: '#1A237E',
  },
}));

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = ['About Us', 'Tutoring', 'UCAT', 'Pricing'];

  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar sx={{ 
          padding: { xs: 0, md: '0.5rem 1rem' },
          minHeight: { xs: '64px', md: 'auto' },
        }}>
          <Box sx={{ 
            flexGrow: { xs: 1, md: 0 }, 
            display: 'flex', 
            alignItems: 'center',
            mr: { md: 4 }
          }}>
            <img 
              src="/logo.svg" 
              alt="Strive Academics" 
              style={{ 
                height: '40px',
              }} 
            />
          </Box>
          
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: '#fff' }}
              >
                <MenuIcon />
              </IconButton>
              <FullScreenDrawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                    <img 
                      src="/logo-white.svg" 
                      alt="Strive Academics" 
                      style={{ height: '40px' }} 
                    />
                    <IconButton
                      onClick={handleDrawerToggle}
                      sx={{ color: '#fff' }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {menuItems.map((item) => (
                      <Button
                        key={item}
                        sx={{
                          color: '#fff',
                          fontSize: '1.25rem',
                          textAlign: 'left',
                          justifyContent: 'flex-start',
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                    <FindTutorButton sx={{ mt: 2 }}>
                      Find a Tutor
                    </FindTutorButton>
                  </Box>
                </Box>
              </FullScreenDrawer>
            </>
          ) : (
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              margin: '0 auto',
            }}>
              {menuItems.map((item) => (
                <NavButton key={item}>{item}</NavButton>
              ))}
              <FindTutorButton>
                Find a Tutor
              </FindTutorButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header; 