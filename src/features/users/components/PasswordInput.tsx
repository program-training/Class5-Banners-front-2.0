import { VisibilityOff, Visibility } from "@mui/icons-material";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { validatePassword } from "../../utils/functions";
type Props = {
  setIsValidPassword: Dispatch<SetStateAction<boolean>>;
  isValidPassword: boolean;
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
};
const PasswordInputs = ({
  setIsValidPassword,
  isValidPassword,
  setPassword,
  password,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  function handlePasswordChange(value: string): void {
    setPassword(value);
    setIsValidPassword(validatePassword(value));
  }

  return (
    <TextField
      label="Password"
      variant="outlined"
      type={showPassword ? "text" : "password"}
      fullWidth
      value={password}
      onChange={(e) => handlePasswordChange(e.target.value)}
      error={!isValidPassword}
      helperText={
        !isValidPassword &&
        "Password requirements: 1 uppercase, 1 lowercase, 4 numbers, 1 symbol"
      }
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
