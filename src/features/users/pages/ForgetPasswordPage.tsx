import { useForm, SubmitHandler } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Container } from "@mui/material";
import { validateEmail } from "../../utils/functions";

interface FormData {
  email: string;
}

const ForgetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
      <Typography variant="h4" gutterBottom>
        Forgot Password
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Enter your email address to reset your password.
      </Typography>
      <TextField
        label="Email Address"
        type="email"
        variant="outlined"
        fullWidth
        {...register("email", {
          required: "Email is required",
          validate: (value) => validateEmail(value) || "Invalid email format",
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button
        onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        disabled={!isValid}
      >
        Send Password Reset Request
      </Button>
      {isSubmitSuccessful && (
        <Alert severity="success" sx={{ marginTop: 2 }}>
          Check your email for further instructions.
        </Alert>
      )}
    </Container>
  );
};

export default ForgetPasswordPage;
