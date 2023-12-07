import { Alert, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Pending from "../components/Pending";
import ROUTES from "../../router/routes";
import { Navigate } from "react-router-dom";
import { getBannersReq } from "../service/bannerReqFromServer";

const BannerManagementPage = () => {
  const { userState } = useAppSelector((state) => state.user);
  const { bannersState, error, pending } = useAppSelector(
    (store) => store.banners
  );
  const dispatch = useAppDispatch();
  const [BannerToDelete, setBannerToDelete] = useState<string | null | boolean>(
    null
  );

  useEffect(() => {
    dispatch(getBannersReq());
  }, [bannersState]);

  if (!userState) return <Navigate replace to={ROUTES.LogInPage} />;
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" padding={2} align="center">
          Banner Management
        </Typography>
        {bannersState && (
          <>
            <BannerManagementTop banners={bannersState} />
            <BannerTable
              setOpenDialog={setBannerToDelete}
              page="banner-management"
            />
          </>
        )}
        {pending && <Pending />}
        {error && <Alert severity="error">{error}</Alert>}
        <DeleteBannerDialog
          openDialog={BannerToDelete}
          setOpenDialog={setBannerToDelete}
        />
      </Container>
    </>
  );
};

export default BannerManagementPage;
