import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ROUTES from "../../router/routes";

const SignUpBottomContent = () => {
    return (
        <>
            <Typography
                variant="body2"
                align="center"
                style={{ marginTop: "10px" }}
            >
                Already registered?
                <Link to={ROUTES.LogInPage}>Log In</Link>
            </Typography>
        </>
    );
};

export default SignUpBottomContent;
