import { Button } from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
interface CancelCreateBannerButtonProps {
    setAutocompleteValue: React.Dispatch<
        React.SetStateAction<ProductInterface | null>
    >;
    setBannerURL: React.Dispatch<React.SetStateAction<string>>;
    setSelectedProduct: React.Dispatch<
        React.SetStateAction<ProductInterface | null>
    >;
}

const CancelCreateBannerButton = ({
    setSelectedProduct,
    setBannerURL,
    setAutocompleteValue,
}: CancelCreateBannerButtonProps) => {
    return (
        <Button
            sx={{ ml: 2 }}
            variant="contained"
            color="secondary"
            onClick={() => {
                setSelectedProduct(null);
                setBannerURL("");
                setAutocompleteValue(null); // Reset the Autocomplete value
            }}
        >
            Cancel
        </Button>
    );
};

export default CancelCreateBannerButton;
