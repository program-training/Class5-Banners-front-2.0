import { Typography } from "@mui/material";

const LoginTop = () => {
    return (
        <>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <Typography
                variant="h6"
                align="center"
                color="textSecondary"
                gutterBottom
            >
                Welcome back!
            </Typography>
        </>
    );
};

export default LoginTop;
