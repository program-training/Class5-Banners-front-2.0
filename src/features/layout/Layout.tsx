import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Box, Stack } from "@mui/material";

const Layout = () => {
  return (
    <Stack
      minHeight={"100vh"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Box>
        <Header />
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Layout;
