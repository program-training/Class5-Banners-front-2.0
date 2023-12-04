import { ChangeEvent, useEffect, useState } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    CircularProgress,
    Alert,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
    editBannerReq,
    getBannerByIdReq,
} from "../service/bannerReqFromServer";
import ROUTES from "../../router/routes";
import { BannerInterface } from "../interface/BannerInterface";

const EditBannerPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { bannerID } = useParams();
    const { specificBanner, error, pending } = useAppSelector(
        (store) => store.banners
    );

    const [editedBanner, setEditedBanner] = useState<BannerInterface | null>(
        specificBanner ? { ...specificBanner } : null
    );

    useEffect(() => {
        if (bannerID) {
            dispatch(getBannerByIdReq(bannerID));
        }
    }, [bannerID, dispatch]);

    useEffect(() => {
        if (specificBanner) {
            setEditedBanner({ ...specificBanner });
        }
    }, [specificBanner]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        editedBanner && dispatch(editBannerReq(editedBanner));

        navigate(ROUTES.home);
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setEditedBanner((prevBanner) => ({
            ...prevBanner!,
            [name]: value,
        }));
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
            <Typography variant="h2">Edit Banner</Typography>
            <Typography variant="h5">Edit Banner's Details</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="ProductID"
                    name="productID"
                    value={editedBanner?.productID || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={true}
                />
                <TextField
                    label="Title"
                    name="title"
                    value={editedBanner?.title || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Description"
                    name="description"
                    value={editedBanner?.description || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Image URL"
                    name="imageURL"
                    value={editedBanner?.imageURL || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Category"
                    name="category"
                    value={editedBanner?.category || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Author ID"
                    name="authorID"
                    value={editedBanner?.authorID || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={true}
                />
                <TextField
                    label="Created At"
                    name="createdAt"
                    value={editedBanner?.createdAt || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={true}
                />
                <TextField
                    label="Updated At"
                    name="updatedAt"
                    value={editedBanner?.updatedAt || ""}
                    onChange={handleChange}
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={true}
                />
                <Box display="flex" justifyContent="space-evenly" marginTop={2}>
                    {!pending && (
                        <Box
                            sx={{
                                mb: 5,
                                display: "flex",
                                gap: 2,
                            }}
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => navigate(ROUTES.home)}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Save
                            </Button>
                        </Box>
                    )}
                    {pending && <CircularProgress />}
                    {error && (
                        <Alert severity="error">
                            An internal server error occurred. Try again later.
                        </Alert>
                    )}
                </Box>
            </form>
        </Container>
    );
};

export default EditBannerPage;
