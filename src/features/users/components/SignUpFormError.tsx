import { Typography } from "@mui/material";

// Displays a relative message as long the form is not filled out as needed
const FormError = () => {
    return (
        <Typography
            variant="body2"
            color="error"
            align="center"
            style={{ margin: "10px 0" }}
        >
            Please fill out all fields properly to submit.
        </Typography>
    );
};

export default FormError;
