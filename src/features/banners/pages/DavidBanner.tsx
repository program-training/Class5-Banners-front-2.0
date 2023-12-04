import { useEffect, useState } from "react";
// import { styled } from "@mui/system";
// import { Link } from "react-router-dom";
// import axios from "axios";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
interface ResponsiveAdProps {
    imageUrl: string;
    title: string;
    description: string;
    note?: string;
    to?: string;
}
// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   minWidth: "100%",
//   maxHeight: "100%",
//   objectFit: "cover",
// });
const DavidsBanner = () => {
    const [data, setData] = useState<ResponsiveAdProps>({
        imageUrl: "",
        title: "",
        description: "",
        note: "",
    });
    useEffect(() => {
        // try {
        //   axios.get("YOUR_API_ENDPOINT").then((response) => setData(response.data));
        // } catch (error) {
        //   console.error("Error fetching data:", error);
        // }
        setData({
            title: "Blue T-Shirt",
            description: "Cotton short sleeve t-shirt",
            imageUrl:
                "https://cdn.discordapp.com/attachments/1061944547246088242/1175870410601009272/meir_asulin_Cotton_short_sleeve_t-shirt_blue_71fa9687-e15c-4961-ba15-eac5122b3c51.png",
        });
    }, []);
    return (
        // <Link to={to}>
        <Stack
            sx={{
                backgroundImage: data.imageUrl,
            }}
            width={"100vw"}
            height={"100vh"}
            alignItems={"center"}
            justifyContent={"space-between"}
            overflow={"hidden"}
        >
            <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontSize: "2rem", fontWeight: "bold", color: "#3F51B5" }}
            >
                {data.title}
            </Typography>
            <Typography
                variant="body1"
                gutterBottom
                sx={{ fontSize: "1.2rem", color: "#333" }}
            >
                {data.description}
            </Typography>
            {data.note && (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "1rem", color: "#777" }}
                >
                    {data.note}
                </Typography>
            )}
            {/* <Img sx={{ m: 0 }} alt="ad" src={data.imageUrl} /> */}
        </Stack>
        // </Link>
    );
};
export default DavidsBanner;
