import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Dashboard() {
    return (
        <Box sx={{ width: "100%" }}>
            <BarChart
                height={300}
                series={series.map((s) => ({
                    ...s,
                    data: s.views
                        ? s.views.slice(0, 20)
                        : s.clicks.slice(0, 20),
                }))}
                skipAnimation={false}
            />
        </Box>
    );
}

// data
interface BannerData {
    name: string;
    data: {
        views: number;
        clicks: number;
    };
}

const banners: BannerData[] = [
    {
        name: "banner 1",
        data: {
            views: 250,
            clicks: 22,
        },
    },
    {
        name: "banner 2",
        data: {
            views: 326,
            clicks: 59,
        },
    },
    {
        name: "banner 1",
        data: {
            views: 250,
            clicks: 22,
        },
    },
];
const series = [
    {
        label: "views",
        views: banners.map((banner) => banner.data.views),
    },
    {
        label: "clicks",
        clicks: banners.map((banner) => banner.data.clicks),
    },
];
