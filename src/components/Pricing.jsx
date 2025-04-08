import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#F8F9FA',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}));

const StyledCard = styled(Box)(({ theme, bgcolor, btncolor }) => ({
  padding: theme.spacing(4),
  backgroundColor: bgcolor,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: 350,
  margin: '0 auto',
  '& .MuiButton-root': {
    backgroundColor: btncolor,
    color: '#fff',
    padding: '10px 24px',
    borderRadius: 8,
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: btncolor,
      opacity: 0.9,
    },
  },
}));

const PriceGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  maxWidth: 900,
  margin: '0 auto',
  padding: theme.spacing(0, 2),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1fr 2fr',
    gap: theme.spacing(4),
  },
}));

const Pricing = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const plans = [
    { name: 'Gold', desc: 'Tailored Sessions', bgcolor: '#FFE0B2', btncolor: '#FF6D00' },
    { name: 'Premium', desc: 'Experienced Tutor', bgcolor: '#E8F5E9', btncolor: '#2E7D32' },
    { name: 'Elite', desc: 'Expert Tutor', bgcolor: '#E3F2FD', btncolor: '#1A237E' },
  ];

  const tiers = [
    { type: 'Private Tutoring', students: 1, prices: [60, 80, 120] },
    { type: 'Bring 1 Friend', students: 2, prices: [52.5, 70, 105] },
    { type: 'Bring 2 Friends', students: 3, prices: [45, 60, 90] },
    { type: 'Bring 3 Friends', students: 4, prices: [37.5, 50, 75] },
  ];

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h1" sx={{ 
            color: '#1A237E',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2 
          }}>
            Pricing Plans
          </Typography>
          <Typography sx={{ 
            color: '#666',
            fontSize: { xs: '1rem', md: '1.1rem' },
            maxWidth: 800,
            mx: 'auto',
            mb: 5,
            px: 2
          }}>
            Choose the perfect plan that fits your needs. Group learning options available for better value.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
          mb: 6,
          px: 2
        }}>
          {plans.map((plan) => (
            <StyledCard key={plan.name} bgcolor={plan.bgcolor} btncolor={plan.btncolor}>
              <Typography variant="h5" sx={{ color: '#1A237E', fontWeight: 600 }}>
                {plan.name}
              </Typography>
              <Typography sx={{ color: '#666', mb: 2 }}>{plan.desc}</Typography>
              <Button>Get Started</Button>
            </StyledCard>
          ))}
        </Box>

        <Box sx={{ maxWidth: 900, mx: 'auto', px: 2 }}>
          {tiers.map((tier) => (
            <PriceGrid key={tier.type} sx={{ 
              pb: 3, 
              borderBottom: '1px solid rgba(0,0,0,0.08)',
              '&:last-child': { borderBottom: 'none' }
            }}>
              <Box>
                <Typography sx={{ color: '#1A237E', fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' }, mb: 0.5 }}>
                  {tier.type}
                </Typography>
                <Typography sx={{ color: '#666', fontSize: '0.875rem' }}>
                  ({tier.students} Student{tier.students > 1 ? 's' : ''} per class, full price)
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: 2 
              }}>
                {tier.prices.map((price, idx) => (
                  <Box key={idx} sx={{
                    display: 'flex',
                    justifyContent: isMobile ? 'space-between' : 'center',
                    alignItems: 'center',
                    p: isMobile ? 2 : 0,
                    bgcolor: isMobile ? plans[idx].bgcolor : 'transparent',
                    borderRadius: 1,
                  }}>
                    {isMobile && <Typography sx={{ color: '#1A237E' }}>{plans[idx].name}</Typography>}
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography sx={{ 
                        color: plans[idx].btncolor,
                        fontWeight: 600,
                        fontSize: '1.5rem'
                      }}>
                        ${price}
                      </Typography>
                      {!isMobile && (
                        <Typography sx={{ color: '#666', fontSize: '0.875rem' }}>
                          Per student<br />per hour
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </PriceGrid>
          ))}
        </Box>
      </Container>
    </StyledSection>
  );
};

export default Pricing; 