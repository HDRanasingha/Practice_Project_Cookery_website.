import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        py: "1rem",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Sociopedia. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: "0.5rem" }}>
        <a href="/privacy-policy" style={{ color: "inherit", textDecoration: "underline" }}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms-of-service" style={{ color: "inherit", textDecoration: "underline" }}>
          Terms of Service
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
