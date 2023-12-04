import { Alert, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router";
import Pending from "../components/Pending";
import { getBannersReq } from "../service/bannerReqFromServer";
import ROUTES from "../../router/routes";

const BannerManagementPage = () => {
  const { userState } = useAppSelector((state) => state.user);
  const { bannersState, pending, error } = useAppSelector(
    (state) => state.banners
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [BannerToDelete, setBannerToDelete] = useState<string | null | boolean>(
    null
  );

  useEffect(() => {
    if (!userState) {
      navigate(ROUTES.LogInPage);
    } else {
      dispatch(getBannersReq());
    }
  }, []);

  return (
    <>
      {bannersState && (
        <Container maxWidth="md">
          <Typography variant="h2" padding={2} align="center">
            Banner Management
          </Typography>
          <BannerManagementTop banners={bannersState} />
          {!pending && (
            <BannerTable
              setOpenDialog={setBannerToDelete}
              page="banner-management"
            />
          )}
          {pending && <Pending />}
          {error && (
            <Alert severity="error">
              can't get banners list from server. try again later.
            </Alert>
          )}
          <DeleteBannerDialog
            openDialog={BannerToDelete}
            setOpenDialog={setBannerToDelete}
          />
        </Container>
      )}
    </>
  );
};

export default BannerManagementPage;
