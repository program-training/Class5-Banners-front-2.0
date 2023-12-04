const ROUTES = {
  home: '/banners',
  layout: "/banners",
  BannerManagementPage: "",
  BannerHorizontalPage: "/banners/horizontal/products/:id",
  BannerPage: "/banners/vertical/products/:id",
  BannerPageByCategory: "/banners/categories/:categoryName",
  MyBannersPage: "/banners/my-banners",
  CreateNewBannerPage: "/banners/create",
  EditBannerPage: "/banners/edit/:bannerID",
  SignUpPage: "/banners/user/sign-up",
  LogInPage: "/banners/user/login",
  ShowUserPage: "/banners/user/show/",
  EditUserPage: "/banners/user/edit/",
  ForgetPasswordPage: "/banners/user/forget-password/",
  ResetPasswordPage: "/banners/reset-password/",
  ErrorPage: "*"
};

export default ROUTES;