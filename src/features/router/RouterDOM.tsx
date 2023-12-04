import { Routes, Route } from "react-router-dom";
import SignUpPage from "../users/pages/SignUpPage";
import BannerManagementPage from "../banners/pages/BannerManagementPage";
import ShowUserPage from "../users/pages/ShowUserPage";
import ErrorPage from "../pages/ErrorPage";
import LogInPage from "../users/pages/LogInPage";
import ForgetPasswordPage from "../users/pages/ForgetPasswordPage";
import ResetPasswordPage from "../users/pages/ResetPasswordPage";
import EditUserPage from "../users/pages/EditUserPage";
import CreateNewBannerPage from "../banners/pages/CreateNewBannerPage";
import EditBannerPage from "../banners/pages/EditBannerPage";
import MyBannersPage from "../banners/pages/MyBannersPage";
import Layout from "../layout/Layout";
import BannerPage from "../banners/pages/BannerPage";
import BannerHorizontalPage from "../banners/pages/BannerHorizontalPage";
import ROUTES from "./routes";

const RouterDom = () => {
  return (
    <Routes>
      <Route path="banners">
        <Route
          path={ROUTES.BannerHorizontalPage}
          element={<BannerHorizontalPage />}
        />
        <Route path={ROUTES.BannerPage} element={<BannerPage />} />
        <Route path={ROUTES.BannerPageByCategory} element={<BannerPage />} />
      </Route>

      <Route path={ROUTES.layout} element={<Layout />}>
        <Route
          path={ROUTES.BannerManagementPage}
          element={<BannerManagementPage />}
        />
        <Route path={ROUTES.MyBannersPage} element={<MyBannersPage />} />
        <Route
          path={ROUTES.CreateNewBannerPage}
          element={<CreateNewBannerPage />}
        />
        <Route path={ROUTES.EditBannerPage} element={<EditBannerPage />} />

        <Route path={ROUTES.SignUpPage} element={<SignUpPage />} />
        <Route path={ROUTES.LogInPage} element={<LogInPage />} />
        <Route path={ROUTES.ShowUserPage} element={<ShowUserPage />} />
        <Route path={ROUTES.EditUserPage} element={<EditUserPage />} />
        <Route
          path={ROUTES.ForgetPasswordPage}
          element={<ForgetPasswordPage />}
        />
        <Route
          path={ROUTES.ResetPasswordPage}
          element={<ResetPasswordPage />}
        />
      </Route>

      <Route path={ROUTES.ErrorPage} element={<ErrorPage />} />
    </Routes>
  );
};
export default RouterDom;
