import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ROUTES from "../router/routes";
import {
  Email,
  Extension,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        backgroundColor: "lightsteelblue",
        zIndex: 2,
      }}
      showLabels
    >
      <BottomNavigationAction
        onClick={() => navigate(ROUTES.home)}
        label="management banner"
        icon={<Extension />}
        title="title for test"
      />
      <BottomNavigationAction label="050-7233332" icon={<Phone />} />
      <BottomNavigationAction label="Company@Banners.com" icon={<Email />} />

      <BottomNavigationAction label="Twitter / X" icon={<Twitter />} />
      <BottomNavigationAction label="Instagram" icon={<Instagram />} />
      <BottomNavigationAction label="Facebook" icon={<Facebook />} />
    </BottomNavigation>
  );
};

export default Footer;
