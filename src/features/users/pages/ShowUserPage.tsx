import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../../redux/hooks";
import ROUTES from "../../router/routes";

const ShowUserPage = () => {
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user.userState);

    if (!user) navigate(ROUTES.LogInPage);

    return (
        <Paper
            elevation={3}
            sx={{
                padding: "20px",
                maxWidth: "400px",
                margin: "auto",
                marginTop: "50px",
                backgroundColor: "#f5f5f8",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ color: "#333" }}>
                User Profile
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
                Username: {user?.username}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
                user id: {user?.user_id}
            </Typography>
            <Typography variant="subtitle1" gutterBottom sx={{ color: "#555" }}>
                Admin Status: {user?.isAdmin ? "Yes" : "No"}
            </Typography>
        </Paper>
    );
};

export default ShowUserPage;
