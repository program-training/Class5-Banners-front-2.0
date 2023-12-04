import { useEffect, useState } from "react";
import {
    Typography,
    Box,
    Button,
    Autocomplete,
    TextField,
} from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
import BannerCard from "../components/BannerCard";
import { centeredBox } from "../../utils/styles";
import CancelCreateBannerButton from "../components/CancelCreateBannerButton";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
    addBannerReq,
    getUnbannerdProducts,
} from "../service/bannerReqFromServer";
import { Navigate } from "react-router-dom";
import ROUTES from "../../router/routes";

const CreateNewBannerPage = () => {
    const [selectedProduct, setSelectedProduct] =
        useState<ProductInterface | null>(null);
    const [bannerURL, setBannerURL] = useState("");
    const { products, pending } = useAppSelector((store) => store.banners);
    const { userState: user } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const [autocompleteValue, setAutocompleteValue] =
        useState<ProductInterface | null>(null); // New state for Autocomplete value

    const handleSave = () => {
        dispatch(addBannerReq({ imageURL: bannerURL }));
    };
    useEffect(() => {
        dispatch(getUnbannerdProducts());
    }, []);

    if (!user) return <Navigate replace to={ROUTES.LogInPage} />;

    return (
        <Box sx={centeredBox}>
            <Typography variant="h2">Create Banner</Typography>
            <Typography variant="h5">
                Create your own Banners with any link you want!
            </Typography>
            <TextField
                sx={{ width: "300px" }}
                label="Banner URL"
                value={bannerURL}
                onChange={(e) => setBannerURL(e.target.value)}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={products || []}
                loading={pending} // assuming 'pending' is a boolean indicating loading state
                loadingText="Loading..." // optional, add a loading text if needed
                sx={{ width: 300 }}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                    <TextField {...params} label="Product Title" />
                )}
                value={autocompleteValue}
                onChange={(_, value) => {
                    const selected = products?.find(
                        (product) => product.id === value?.id
                    );
                    console.log("selected", selected);
                    setSelectedProduct(selected || null);
                    setAutocompleteValue(selected || null); // Set Autocomplete value
                }}
            />
            {selectedProduct && (
                <BannerCard selectedProduct={selectedProduct} />
            )}
            <Box
                sx={{
                    mb: 5,
                    display: "flex",
                    gap: 2,
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    disabled={!selectedProduct || !bannerURL}
                >
                    Save
                </Button>
                <CancelCreateBannerButton
                    {...{
                        setAutocompleteValue,
                        setBannerURL,
                        setSelectedProduct,
                    }}
                />
            </Box>
        </Box>
    );
};

export default CreateNewBannerPage;
