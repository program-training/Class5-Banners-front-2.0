import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/routes";
import { logOut } from "../user-slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { deleteUserReq } from "../service/asyncReq";
type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading, userState } = useAppSelector((store) => store.user);
  const handleDeleteUser = () => {
    dispatch(deleteUserReq());
    setOpenDialog(false);

    if (!loading && !error && !userState) {
      dispatch(logOut());
      navigate(ROUTES.SignUpPage);
    }
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
        <Button onClick={handleDeleteUser} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
