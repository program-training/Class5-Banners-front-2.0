import { useState } from "react";
import {
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Alert,
} from "@mui/material";
import EmailInput from "../components/EmailInput";
import PasswordInputs from "../components/PasswordInput";
import ConfirmPasswordInput from "../components/ConfirmPasswordInput";
import SignUpTopContent from "../components/SignUpTopContent";
import SignUpBottomContent from "../components/SignUpBottomContent";
import SignUpSubmitButton from "../components/SignUpSubmitButton";
import FormError from "../components/SignUpFormError";
import { useAppSelector } from "../../../redux/hooks";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routes";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../service/queries";

const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const { userState: user } = useAppSelector((store) => store.user);
  const [Signup, { data, loading, error }] = useMutation(SIGNUP);
  const isAllValid =
    username &&
    email &&
    password &&
    ConfirmPassword &&
    isValidEmail &&
    isValidPassword &&
    isValidConfirmPassword;
  const handleSignUp = () => {
    if (isAllValid) {
      Signup({
        variables: { user: { username, email, password, isAdmin } },
      });

      if (!error && !loading && data)
        return <Navigate replace to={ROUTES.LogInPage} />;
    }
  };
  if (user) return <Navigate replace to={ROUTES.BannerManagementPage} />;
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ padding: "20px", mt: 2 }}
    >
      <Grid
        item
        xs={10}
        md={6}
        lg={4}
        style={{
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
        }}
      >
        <SignUpTopContent />
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <EmailInput
          email={email}
          setEmail={setEmail}
          isValidEmail={isValidEmail}
          setIsValidEmail={setIsValidEmail}
        />
        <PasswordInputs
          password={password}
          setPassword={setPassword}
          setIsValidPassword={setIsValidPassword}
          isValidPassword={isValidPassword}
        />
        <ConfirmPasswordInput
          isValidConfirmPassword={isValidConfirmPassword}
          setIsValidConfirmPassword={setIsValidConfirmPassword}
          prevPassword={password}
          ConfirmPassword={ConfirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
          }
          label="Do you want to be registered as an administrator?"
        />
        {isAllValid ? (
          <SignUpSubmitButton onClick={handleSignUp} />
        ) : (
          <FormError />
        )}
        {loading && <CircularProgress />}
        {error && (
          <Alert severity="error">
            an internal server error had occurred. try again later.
          </Alert>
        )}
        <SignUpBottomContent />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
