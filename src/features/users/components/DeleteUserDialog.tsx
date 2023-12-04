import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteUserReq } from "../../users/user-slice";
type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteBanner = () => {
    dispatch(deleteUserReq());
    setOpenDialog(false);
  };

  return (
    <Dialog open={!!openDialog} onClose={() => setOpenDialog(false)}>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this banner?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenDialog(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteBanner} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
