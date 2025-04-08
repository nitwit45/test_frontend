import React from 'react';
import { Box, Container, Typography, Rating, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#F8F9FA',
  minHeight: '80vh',
  display: 'flex',
  alignItems: 'center',
}));

const ReviewCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(1),
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: 'auto',
  paddingTop: theme.spacing(3),
}));

const StyledSlider = styled(Slider)(({ theme }) => ({
  '.slick-track': {
    display: 'flex',
    padding: '20px 0',
    '& .slick-slide': {
      height: 'inherit',
      '& > div': {
        height: '100%',
      },
    },
  },
  '.slick-dots': {
    bottom: -40,
    '& li button:before': {
      fontSize: 12,
      color: theme.palette.primary.main,
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
  '.slick-prev, .slick-next': {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
    zIndex: 1,
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&:before': {
      color: theme.palette.primary.main,
      fontSize: 20,
    },
  },
  '.slick-prev': {
    left: -20,
  },
  '.slick-next': {
    right: -20,
  },
}));

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      avatar: "/avatars/sarah.jpg",
      rating: 5,
      review: "The tutoring sessions have been incredibly helpful. My grades have improved significantly, and I feel much more confident in my studies.",
      date: "March 2024"
    },
    {
      name: "James Wilson",
      avatar: "/avatars/james.jpg",
      rating: 5,
      review: "Outstanding experience! The tutors are knowledgeable and patient. They really take the time to ensure you understand the material.",
      date: "March 2024"
    },
    {
      name: "Emily Thompson",
      avatar: "/avatars/emily.jpg",
      rating: 5,
      review: "I've tried other tutoring services before, but Strive Academics is by far the best. The personalized approach makes all the difference.",
      date: "February 2024"
    },
    {
      name: "Michael Lee",
      avatar: "/avatars/michael.jpg",
      rating: 5,
      review: "The flexible scheduling and online options make it so convenient. Plus, the quality of tutoring is exceptional!",
      date: "February 2024"
    },
    {
      name: "Jessica Patel",
      avatar: "/avatars/jessica.jpg",
      rating: 5,
      review: "My tutor helped me achieve a score I never thought possible. Their teaching methods are effective and engaging.",
      date: "January 2024"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Section>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              color: '#1A237E',
              fontWeight: 700,
              fontSize: '2.5rem',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            What Our Students Say
          </Typography>
          <Typography 
            sx={{ 
              color: '#666',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              maxWidth: '800px',
              mx: 'auto',
              mb: 5,
            }}
          >
            Hear from our students about their experience with Strive Academics tutoring
          </Typography>
        </Box>

        <StyledSlider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewCard>
                <Rating 
                  value={review.rating} 
                  readOnly 
                  sx={{ 
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#FF6D00',
                    }
                  }}
                />
                <Typography 
                  sx={{ 
                    color: '#666',
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    mb: 2,
                    flex: 1,
                  }}
                >
                  "{review.review}"
                </Typography>
                <UserInfo>
                  <Avatar 
                    src={review.avatar}
                    alt={review.name}
                    sx={{ width: 48, height: 48 }}
                  />
                  <Box>
                    <Typography 
                      sx={{ 
                        fontWeight: 600,
                        color: '#1A237E',
                        fontSize: '1rem',
                      }}
                    >
                      {review.name}
                    </Typography>
                    <Typography 
                      sx={{ 
                        color: '#666',
                        fontSize: '0.875rem',
                      }}
                    >
                      {review.date}
                    </Typography>
                  </Box>
                </UserInfo>
              </ReviewCard>
            </div>
          ))}
        </StyledSlider>
      </Container>
    </Section>
  );
};

export default Reviews; 