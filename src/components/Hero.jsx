import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: '#1A237E',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(/pattern-bg.svg)',
    opacity: 0.1,
    backgroundRepeat: 'repeat',
  },
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(4),
    textAlign: 'center',
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
  },
}));

const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    width: '100%',
    '& > button': {
      width: '100%',
    },
  },
}));

const FindTutorButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FF6B00',
  color: '#fff',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '12px 32px',
  borderRadius: '50px',
  '&:hover': {
    backgroundColor: '#e65c00',
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '12px 32px',
  borderRadius: '50px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
  },
}));

const Hero = () => {
  return (
    <HeroSection>
      <ContentWrapper maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <LogoBox>
              <img 
                src="/logo-white.svg" 
                alt="Strive Academics" 
                style={{ height: '50px' }}
              />
              <Typography 
                variant="subtitle1" 
                color="rgba(255, 255, 255, 0.8)"
                sx={{ fontSize: '1.1rem' }}
              >
                Strive For Success
              </Typography>
            </LogoBox>
            <Typography 
              variant="h1" 
              color="white"
              sx={{ 
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Welcome to Strive Academics!
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: { md: '500px' },
                mx: { xs: 'auto', md: 0 },
              }}
            >
              Strive to achieve your personal best and unlock your full academic potential.
            </Typography>
            <ButtonGroup>
              <FindTutorButton>
                Find a Tutor
              </FindTutorButton>
              <LearnMoreButton>
                Learn about us
              </LearnMoreButton>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/tutoring-image.jpg"
              alt="Students collaborating on coding"
              sx={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                display: 'block',
                mx: 'auto',
                borderRadius: 2,
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                transform: { md: 'perspective(1000px) rotateY(-5deg)' },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: { md: 'perspective(1000px) rotateY(0deg)' },
                },
              }}
            />
          </Grid>
        </Grid>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero; 