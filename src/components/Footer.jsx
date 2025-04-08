import React from 'react';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A237E',
  padding: theme.spacing(4, 0),
  color: '#fff',
}));

const FooterLink = styled(Typography)({
  color: '#fff',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const ActionButton = styled(Button)(({ variant }) => ({
  borderRadius: 50,
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: 500,
  ...(variant === 'contained' && {
    backgroundColor: '#FF6B00',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#e65c00',
    },
  }),
  ...(variant === 'outlined' && {
    borderColor: '#fff',
    color: '#fff',
    '&:hover': {
      borderColor: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  }),
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr' },
          gap: { xs: 4, md: 2 },
        }}>
          {/* Logo and Contact Info */}
          <Box>
            <Box sx={{ mb: 2 }}>
              <img 
                src="/logo.svg" 
                alt="Strive Academics"
                style={{ height: '40px' }}
              />
            </Box>
            <Stack spacing={1} sx={{ mb: { xs: 2, md: 0 } }}>
              <Typography variant="body2">email@gmail.com</Typography>
              <Typography variant="body2">+94 123456789</Typography>
              <Typography variant="body2">
                221B, Baker Street,<br />
                London
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <SocialButton aria-label="instagram">
                  <InstagramIcon />
                </SocialButton>
                <SocialButton aria-label="facebook">
                  <FacebookIcon />
                </SocialButton>
                <SocialButton aria-label="linkedin">
                  <LinkedInIcon />
                </SocialButton>
              </Stack>
            </Stack>
          </Box>

          {/* Links */}
          <Box sx={{ 
            display: { xs: 'grid', md: 'block' },
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: '1fr' },
            gap: 2
          }}>
            <Stack spacing={2}>
              <FooterLink>Terms and Conditions</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>FAQ</FooterLink>
            </Stack>
          </Box>

          {/* Action Buttons */}
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: 2,
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}>
            <ActionButton variant="outlined">
              Become a Tutor
            </ActionButton>
            <ActionButton variant="contained">
              Find a Tutor
            </ActionButton>
          </Box>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default Footer; 