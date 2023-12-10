import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../users/user-slice";
import DeleteUserDialog from "../users/components/DeleteUserDialog";
import ROUTES from "../router/routes";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDisplayProfile = () => {
    handleCloseUserMenu();
    navigate(ROUTES.ShowUserPage);
  };

  const handleEditProfile = () => {
    handleCloseUserMenu();
    navigate(ROUTES.EditUserPage);
  };

  const handleLogout = () => {
    dispatch(logOut());
    navigate(ROUTES.LogInPage);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
    handleCloseUserMenu();
  };

  return (
    <>
      <Tooltip title="Open user menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
          <Avatar />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleDisplayProfile}>Display Profile</MenuItem>
        <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
        <MenuItem onClick={handleOpenDeleteDialog}>Delete Profile</MenuItem>
      </Menu>
      <DeleteUserDialog
        openDialog={openDeleteDialog}
        setOpenDialog={setOpenDeleteDialog}
      />
    </>
  );
};

export default UserMenu;
