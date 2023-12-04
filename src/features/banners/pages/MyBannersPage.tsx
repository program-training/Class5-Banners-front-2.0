import { Alert, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { BannerTable } from "../components/BannerTable";
import DeleteBannerDialog from "../components/DeleteBannerDialog";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { AddCircle } from "@mui/icons-material";
import Pending from "../components/Pending";
import { getMyBannersReq } from "../service/bannerReqFromServer";
import ROUTES from "../../router/routes";

const MyBannersPage = () => {
  const { bannersState, error, pending } = useAppSelector(
    (store) => store.banners
  );
  const [bannerToDelete, setBannerToDelete] = useState<string | null | boolean>(
    null
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.userState);

  if (!user) navigate(ROUTES.LogInPage);
  useEffect(() => {
    //   if (!user) return navigate(ROUTES.LogInPage);
    dispatch(getMyBannersReq());
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h2" padding={2} align="center">
        The Banners You Created
      </Typography>
      <Button onClick={() => navigate(ROUTES.CreateNewBannerPage)}>
        <Typography pr={2}>Create Banner</Typography>
        <AddCircle />
      </Button>

      {bannersState && (
        <BannerTable setOpenDialog={setBannerToDelete} page="my-banners" />
      )}
      {pending && <Pending />}
      {error && (
        <Alert severity="error">
          cant get banners list from server. try again later.
        </Alert>
      )}
      {!pending && !error && !bannersState && (
        <Alert severity="info">You hadn't created banners yet.</Alert>
      )}
      <DeleteBannerDialog
        openDialog={bannerToDelete}
        setOpenDialog={setBannerToDelete}
      />
    </Container>
  );
};

export default MyBannersPage;
