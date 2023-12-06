import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Alert,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../service/queries";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../router/routes";
import { logOut } from "../user-slice";
import { useAppDispatch } from "../../../redux/hooks";
type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
  const [deleteUser, { error, data }] = useMutation(DELETE_USER);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDeleteUser = () => {
    deleteUser();
    setOpenDialog(false);
    if (data) {
      dispatch(logOut);
      navigate(ROUTES.SignUpPage);
    }
    if (error) return <Alert severity="error">{error.message}</Alert>;
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
