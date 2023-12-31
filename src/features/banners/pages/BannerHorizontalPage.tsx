import { styled } from "@mui/system";
import { keyframes } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Alert, Box, Stack } from "@mui/material";
import { getBannerByIdReq } from "../service/bannerReqFromServer";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect } from "react";
import { getBannerByProdIdReq } from "../service/bannerReqFromServer";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  minWidth: "100%",
  maxHeight: "100%",
  objectFit: "cover",
});

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const BannerHorizontalPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { specificBanner: banner } = useAppSelector((store) => store.banners);

  useEffect(() => {
    id && dispatch(getBannerByProdIdReq(id));
  }, [banner]);

  return (
    <Box onClick={() => open(specificBanner?.imageURL)}>
      <Box
        sx={{
          backgroundImage: `url("/ad-background.png")`,
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundSize: "cover",
          zIndex: -1,
        }}
      ></Box>
      <Stack
        direction={"row"} // Changed to horizontal stacking
        width={"100vw"}
        height={"100vh"} // Changed height to fill the viewport height
        alignItems={"center"}
        justifyContent={"space-between"}
        overflow={"hidden"}
        textAlign={"center"}
        sx={{
          cursor: "pointer",
        }}
      >
        <Box flex="1">
          {/* Added Box for image */}
          <Img
            sx={{
              m: 0,
              height: "100vh", // Adjusted height to fill the viewport height
              width: "100%", // Ensure image width takes up entire box
              objectFit: "cover", // Maintain image aspect ratio
              animation: `${slideInFromLeft} 1s ease-in-out`, // Added animation
            }}
            alt="ad"
            src={specificBanner?.imageURL}
          />
        </Box>
        <Box flex="1">
          <Typography variant="h4" fontFamily="fantasy" color="white">
            {specificBanner?.title}
          </Typography>
          <Typography variant="subtitle1" fontFamily="fantasy" color="white">
            {specificBanner?.description}
          </Typography>
          {specificBanner?.note && (
            <Typography
              variant="body1"
              fontFamily="cursive"
              color="lightyellow"
            >
              {specificBanner.note}
            </Typography>
          )}
        </Box>

        {pending && <Pending />}
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </Box>
  );
};

export default BannerHorizontalPage;
