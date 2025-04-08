import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';

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

const StyledLink = styled('span')({
  color: '#1A237E',
  fontWeight: 600,
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const PrivateTutoring = () => {
  const features = [
    {
      icon: <SchoolOutlinedIcon />,
      title: "Free Academic Consultation",
      description: 'Click "Find a Tutor" to connect with a tutor from our stellar team. Plus, enjoy a complimentary 30-minute FREE Academic Consultation. No strings attached, no questions asked. It\'s our way of ensuring you receive tailored support hassle-free from a tutor that gets you.'
    },
    {
      icon: <PersonOutlineOutlinedIcon />,
      title: "Expert Tutors",
      description: "Our tutors embody academic excellence. They have achieved stellar scores (top 3% ATAR or ranked no.1 in subjects) and possess extensive tutoring experience. Many of them are current medical students!"
    },
    {
      icon: <ShowChartOutlinedIcon />,
      title: "Personalised Approach",
      description: "We understand that every student is unique. That's why we tailor our tutoring sessions to meet your individual needs, learning style, and pace."
    }
  ];

  return (
    <Section>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
          <Box sx={{ width: { xs: '100%', md: '55%' }, mb: { xs: 6, md: 0 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#1A237E',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Private Tutoring
            </Typography>

            <Typography 
              sx={{ 
                color: '#666',
                fontSize: '1rem',
                lineHeight: 1.7,
                mb: 5,
                pr: { md: 4 },
              }}
            >
              At Strive Academics, excellence meets expertise. Our team consists of top-performing tutors with proven track records of success. We meticulously select the{' '}
              <StyledLink>top 3% of ATAR scorers</StyledLink>{' '}and{' '}
              <StyledLink>tutors that ranked #1 in subjects</StyledLink>{' '}
              from across Australia, guaranteeing unmatched quality in our tutoring services. With a focus on personalised attention and tailored learning strategies, we're dedicated to helping you achieve your academic goals and unlock your full potential.
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
          
          <Box sx={{ 
            width: { xs: '100%', md: '45%' }, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
          }}>
            <Box 
              component="img"
              src="/tutoring-illustration.svg"
              alt="Student studying"
              sx={{
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default PrivateTutoring; 