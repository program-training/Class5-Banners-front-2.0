import { Button } from "@mui/material";

const SignUpSubmitButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Button variant="contained" color="primary" fullWidth onClick={onClick}>
      Submit
    </Button>
  );
};

export default SignUpSubmitButton;
