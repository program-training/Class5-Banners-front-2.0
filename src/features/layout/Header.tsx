import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Extension } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import UserMenu from "./UserMenuLoggedIn";
import UserMenu2 from "./UserMenuLoggedOut";
import { useAppSelector } from "../../redux/hooks";
import ROUTES from "../router/routes";

const Header = () => {
  const navigate = useNavigate();
  const { userState } = useAppSelector((state) => state.user);

  return (
    <>
      <AppBar sx={{ backgroundColor: "#6d9edf" }} position="static">
        <Toolbar disableGutters>
          <IconButton
            onClick={() => {
              navigate(ROUTES.home);
            }}
            size="large"
            aria-label="go to banner management page"
            color="inherit"
          >
            <Extension />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={() => {
              navigate(ROUTES.MyBannersPage);
            }}
            variant="outlined"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            My Banners
          </Button>

          <Box sx={{ flexGrow: 1 }} />
          {userState ? <UserMenu /> : <UserMenu2 />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
