import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../utils/functions";
import ROUTES from "../../router/routes";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
  isPasswordValid: boolean;
}

const ResetPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<ResetPasswordFormData>({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = (data) => {
    if (data.isPasswordValid) {
      console.log("Password reset successful", data);
      navigate(ROUTES.LogInPage);
    } else {
      console.log("Password validation failed");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        marginY: "50px",
      }}
    >
      <Typography variant="h4">Reset Password</Typography>
      <TextField
        label="New Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          validate: (value) =>
            validatePassword(value) || "Password does not meet requirements",
        })}
        error={!!errors.password}
        helperText={errors.password?.message}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        type={showConfirmPassword ? "text" : "password"}
        variant="outlined"
        fullWidth
        {...register("confirmPassword", {
          required: "This field is required",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                edge="end"
              >
                {showConfirmPassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Reset Password
      </Button>
    </Container>
  );
};

export default ResetPasswordPage;
