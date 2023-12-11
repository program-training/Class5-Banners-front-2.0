import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteBannerReq, getBannersReq } from "../service/bannerReqFromServer";
type Props = {
  openDialog: string | null | boolean;
  setOpenDialog: Dispatch<SetStateAction<string | null | boolean>>;
};
const DeleteBannerDialog = ({ openDialog, setOpenDialog }: Props) => {
  const dispatch = useAppDispatch();

  const { pending } = useAppSelector((store) => store.banners);
  const handleDeleteBanner = () => {
    dispatch(deleteBannerReq(openDialog as string));
    setOpenDialog(false);
    dispatch(getBannersReq());
  };

  return (
    <Dialog open={!!openDialog} onClose={() => setOpenDialog(null)}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this banner?
        </DialogContentText>
        {pending && <CircularProgress />}
      </DialogContent>
      {
        <DialogActions>
          <Button onClick={() => setOpenDialog(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteBanner} color="secondary">
            Delete
          </Button>
        </DialogActions>
      }
    </Dialog>
  );
};

export default DeleteBannerDialog;
