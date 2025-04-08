import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const StatsSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#99CCFF',
  padding: theme.spacing(10, 0),
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

const Stats = () => {
  const stats = [
    {
      value: '99.5',
      label: 'Average Tutor ATAR',
      hasIcon: false,
    },
    {
      value: '6000+',
      label: 'Hours of Experience',
      hasIcon: true,
    },
    {
      value: '4000+',
      label: 'Completed Lessons',
      hasIcon: true,
    },
  ];

  return (
    <StatsSection>
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            mb: 8,
            color: '#1A237E',
            fontWeight: 600,
            fontSize: '2rem',
            maxWidth: '900px',
            mx: 'auto',
            lineHeight: 1.3,
            textAlign: 'center',
          }}
        >
          We believe that to be the best, you have to{'\n'}
          learn from the best:
        </Typography>
        
        <Box sx={{ maxWidth: '1000px', mx: 'auto' }}>
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} md={4} key={index} sx={{ textAlign: 'center' }}>
                <StatItem>
                  <Box 
                    sx={{ 
                      position: 'relative',
                      display: 'inline-block',
                      mb: 1.5,
                    }}
                  >
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontWeight: 700,
                        color: '#fff',
                        fontSize: '3rem',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        display: 'inline-block',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    {stat.hasIcon && (
                      <StarIcon 
                        sx={{ 
                          color: '#FFD700',
                          fontSize: '2rem',
                          position: 'absolute',
                          right: -25,
                          top: 5,
                        }} 
                      />
                    )}
                  </Box>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      color: '#1A237E',
                      fontWeight: 500,
                      fontSize: '1.25rem',
                      opacity: 0.85,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </StatItem>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </StatsSection>
  );
};

export default Stats; 