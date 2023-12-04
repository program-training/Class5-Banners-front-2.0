import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { ProductInterface } from "../interface/ProductInterface";
type Props = { selectedProduct: ProductInterface };
const BannerCard = ({ selectedProduct }: Props) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={selectedProduct.imageUrl}
        alt={selectedProduct.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedProduct.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {selectedProduct.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BannerCard;
