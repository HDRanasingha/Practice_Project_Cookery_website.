import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "scenes/footer";

const LandingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleJoinUs = () => {
    navigate("/login");
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: 'url("../assets/R (3).jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.background.alt,
        color: theme.palette.text.primary, // Ensure text color is readable on the background
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: Add a dark overlay for better text readability
          zIndex: -1,
        }}
      />
      <Typography fontWeight="bold" fontSize="32px" color="primary" sx={{ mb: "1rem" }}>
        Welcome to CookeryParadise
      </Typography>
      <Typography variant="h6" sx={{ mb: "2rem", maxWidth: '600px', color: "white" }}>
        CookeryParadise is a vibrant social platform designed for connecting with like-minded individuals who share your passions and interests. Whether you're looking to discover new content, share your thoughts, or engage in meaningful conversations, Sociopedia offers a space where you can truly belong. Our community is all about fostering connections, sparking creativity, and promoting positive interactions. With tailored features to help you find and connect with people who resonate with your values, Sociopedia is more than just a social network—it's a thriving community that encourages growth, collaboration, and shared experiences. Join us and be part of something meaningful!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleJoinUs}
      >
        Join Us
      </Button>
      <Footer />
    </Box>
  );
};

export default LandingPage;