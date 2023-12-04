import { ChangeEvent, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Alert, CircularProgress, Container } from "@mui/material";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { UserInterface } from "../interfaces/userInterface";
import { editUserReq } from "../user-slice";

const EditUserPage = () => {
    const { error, loading, userState } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm();

    const [userData, setUserData] = useState<UserInterface | null>(userState);

    useEffect(() => {
        setUserData(userState);
    }, [userState]);

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setUserData((prev) => ({
            ...prev!,
            [name]: value,
        }));
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const updatedUserData = {
            ...userData,
            username: data.username,
            isAdmin: data.isAdmin ? true : false,
        };
        dispatch(editUserReq(updatedUserData));
    };
    console.log(userState);

    return (
        <>
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
                <Typography variant="h4">Edit User Details</Typography>
                <Typography variant="subtitle1">
                    Edit Name and Status
                </Typography>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "#555" }}
                >
                    Email Address: {userData?.email || "waiting to server..."}
                </Typography>
                <TextField
                    label="username"
                    variant="outlined"
                    fullWidth
                    {...register("username")}
                    value={userData?.username || ""}
                    sx={{ mb: 2 }}
                    onChange={handleChange}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            {...register("isAdmin")}
                            defaultChecked={userData?.isAdmin === true}
                        />
                    }
                    label={"Admin"}
                    sx={{ mb: 2 }}
                />
                {!loading && (
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        variant="contained"
                        color="primary"
                    >
                        Save Changes
                    </Button>
                )}
                {loading && <CircularProgress />}
                {error && (
                    <Alert severity="error">
                        an internal server error had occurred. try again later.
                    </Alert>
                )}
            </Container>
        </>
    );
};

export default EditUserPage;
