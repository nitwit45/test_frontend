import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import EditIcon from '@mui/icons-material/Edit';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#F8F9FA',
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: 8,
  backgroundColor: '#E3F2FD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    color: '#1A237E',
    fontSize: '28px',
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  alignItems: 'flex-start',
}));

const BringFriend = () => {
  const features = [
    {
      icon: <SchoolIcon />,
      title: "Learn Together, Save Together",
      description: "The more friends you bring, the more you save. This means you can get the same high-quality tutoring at a discounted rate, making it more affordable for everyone involved."
    },
    {
      icon: <PeopleIcon />,
      title: "Peer Support",
      description: "Having friends to learn with provides a built-in support system. You can discuss concepts, ask questions, and celebrate successes together, making the learning process more engaging and effective."
    },
    {
      icon: <EditIcon />,
      title: "Commitment-Free Learning",
      description: "We believe in transparency and flexibility which means no lock-in contracts! Enjoy the flexibility of our tutoring services without the worry of long-term commitments. You can easily adjust your tutoring schedule as needed, ensuring that your learning experience always aligns with your evolving goals."
    }
  ];

  return (
    <Section>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 4, md: 8 },
          alignItems: 'center'
        }}>
          {/* Left side - Image */}
          <Box sx={{ 
            width: { xs: '100%', md: '45%' },
            order: { xs: 2, md: 1 }
          }}>
            <Box
              component="img"
              src="/tutoring-illustration.svg"
              alt="Students discussing"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>

          {/* Right side - Content */}
          <Box sx={{ 
            width: { xs: '100%', md: '55%' },
            order: { xs: 1, md: 2 }
          }}>
            <Typography 
              variant="h2"
              sx={{ 
                color: '#1A237E',
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Bring a Friend and Save!
            </Typography>

            <Typography 
              sx={{ 
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Unlock the power of group learning with our exclusive Bring-a-Friend offer! Enjoy a fantastic 12.5% discount when you and your friend book tutoring sessions together, whether it's for $60, $80, or $120 packages. Plus, bring two friends along, and save more with a 25% discount on your tutoring sessions. Don't miss out on this incredible opportunity to save while you learn and succeed together. Join our tutoring marketplace now and elevate your learning experience with friends by your side!
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>
                    {feature.icon}
                  </FeatureIcon>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      sx={{
                        color: '#1A237E',
                        fontWeight: 600,
                        fontSize: '1.25rem',
                        mb: 1,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#666',
                        fontSize: '1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </FeatureItem>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default BringFriend; 