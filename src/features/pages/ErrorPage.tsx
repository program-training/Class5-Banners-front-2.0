import { Typography, Button, Box } from "@mui/material";  

const ErrorPage = () => {

  return (
    <Box 
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={5}
    >
      <Typography variant="h3">404: Page Not Found</Typography>

      <Typography variant="subtitle1" textAlign="center">
        Sorry, the page you were trying to view does not exist.
      </Typography>

      <Button 
        variant="contained"
        color="primary"
        href="/"
      >
        Return Home
      </Button>
    </Box>
  );
}

export default ErrorPage;