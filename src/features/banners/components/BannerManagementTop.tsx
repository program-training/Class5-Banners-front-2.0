import { AddCircle } from "@mui/icons-material";
import {
  Box,
  Autocomplete,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BannerInterface } from "../interface/BannerInterface";
import { useAppDispatch } from "../../../redux/hooks";
import { setSpecificBanner } from "../bannersSlice";
import ROUTES from "../../router/routes";

const BannerManagementTop = ({ banners }: { banners: BannerInterface[] }) => {
  const dispatch = useAppDispatch();
  const [, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (value: string) => {
    setSearchValue(value);
    const filteredBanners = banners.filter(
      (banner) =>
        banner.title.toLowerCase().includes(value.toLowerCase()) ||
        banner.authorID.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setSpecificBanner(filteredBanners));
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      mt={2}
    >
      <Box width={200}>
        <Autocomplete
          freeSolo
          disableClearable
          options={Array.from(
            new Set(banners.map((banner) => banner.authorID))
          ).concat(Array.from(new Set(banners.map((banner) => banner.title))))}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
          onChange={(_, value) => {
            handleSearch(value || "");
          }}
        />
      </Box>
      <Typography variant="h5">Edit or Delete Banners</Typography>
      <Button onClick={() => navigate(ROUTES.CreateNewBannerPage)}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>
    </Box>
  );
};

export default BannerManagementTop;
