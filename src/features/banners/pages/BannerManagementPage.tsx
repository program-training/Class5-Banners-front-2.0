import { Alert, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import BannerManagementTop from "../components/BannerManagementTop";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Pending from "../components/Pending";
import ROUTES from "../../router/routes";
import { useQuery } from "@apollo/client";
import { GET_ALL_BANNERS } from "../service/GraphQl/queries";
import { Navigate } from "react-router-dom";
import { setBanners } from "../bannersSlice";

const BannerManagementPage = () => {
  const { userState } = useAppSelector((state) => state.user);
  const { bannersState } = useAppSelector((store) => store.banners);
  const { data, loading, error } = useQuery(GET_ALL_BANNERS);
  const dispatch = useAppDispatch();
  const [BannerToDelete, setBannerToDelete] = useState<string | null | boolean>(
    null
  );

  useEffect(() => {
    !loading &&
      !error &&
      data.getAllBannersQuery &&
      dispatch(setBanners(data.getAllBannersQuery));
  }, [data]);

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
        {loading && <Pending />}
        {error && <Alert severity="error">{error.message}</Alert>}
        <DeleteBannerDialog
          openDialog={BannerToDelete}
          setOpenDialog={setBannerToDelete}
        />
      </Container>
    </>
  );
};

export default BannerManagementPage;
