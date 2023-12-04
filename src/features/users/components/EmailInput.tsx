import { Email } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { validateEmail } from "../../utils/functions";
type Props = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  isValidEmail: boolean;
  setIsValidEmail: Dispatch<SetStateAction<boolean>>;
};
const EmailInput = ({
  setIsValidEmail,
  email,
  setEmail,
  isValidEmail,
}: Props) => {
  const handleEmailChange = (value: string) => {
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  return (
    <TextField
      label="Email"
      variant="outlined"
      fullWidth
      value={email}
      onChange={(e) => handleEmailChange(e.target.value)}
      error={!isValidEmail}
      helperText={!isValidEmail && "Please enter a valid email"}
      InputProps={{
        startAdornment: <Email />,
      }}
      style={{ marginBottom: "10px" }}
    />
  );
};

export default EmailInput;
