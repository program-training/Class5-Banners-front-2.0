import Snackbar from "@mui/material/Snackbar";
import { forwardRef, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { resetError } from "../users/user-slice";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarPop = () => {
  const { error: bannerError } = useAppSelector((store) => store.banners);
  const { error: userError } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(Boolean(bannerError) || Boolean(userError));
  useEffect(() => {
    if (bannerError || userError) {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
        dispatch(resetError());
      }, 6000);
    }
  }, [bannerError, userError]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {bannerError || userError}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default SnackbarPop;
