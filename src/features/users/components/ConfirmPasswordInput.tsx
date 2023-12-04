import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";

type Props = {
  setIsValidConfirmPassword: Dispatch<SetStateAction<boolean>>;
  prevPassword: string;
  isValidConfirmPassword: boolean;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  ConfirmPassword: string;
};
const PasswordInputs = ({
  setIsValidConfirmPassword,
  prevPassword,
  isValidConfirmPassword,
  setConfirmPassword,
  ConfirmPassword,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [password, setPassword] = useState("");

  function handlePasswordChange(value: string): void {
    setConfirmPassword(() => {
      const updatedPassword = value;
      setIsValidConfirmPassword(updatedPassword === prevPassword);
      return updatedPassword;
    });
  }

  return (
    <TextField
      label="ConfirmPassword"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      fullWidth
      value={ConfirmPassword}
      onChange={(e) => handlePasswordChange(e.target.value)}
      error={!isValidConfirmPassword}
      helperText={!isValidConfirmPassword && "Passwords doesn't match"}
      style={{ marginBottom: "10px" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInputs;
