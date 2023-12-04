import { Delete, Edit } from "@mui/icons-material";
import {
  styled,
  TableContainer,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";

type Props = {
  setOpenDialog: Dispatch<SetStateAction<string | null | boolean>>;
  page: "banner-management" | "my-banners";
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(1),
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

export const BannerTable = ({ setOpenDialog, page }: Props) => {
  const { bannersState } = useAppSelector((store) => store.banners);
  const rows = ["Image", "Title", "Creation Date", "Note", "Delete", "Edit"];

  if (page === "banner-management") {
    rows.splice(2, 0, "Author");
  }

  const navigate = useNavigate();
  const handleOpenDeleteDialog = (id: string) => {
    setOpenDialog(id);
  };

  return (
    <TableContainer component={Box} mt={5} width="80%" alignSelf="center">
      <Table>
        <TableHead>
          <TableRow>
            {rows.map((item, i) => (
              <StyledTableCell align="center" key={i}>
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bannersState?.map((banner) => (
            <StyledTableRow key={banner._id}>
              <StyledTableCell align="center" sx={{ cursor: "pointer" }}>
                <img
                  onClick={() =>
                    navigate(`/banners/horizontal/products/${banner.productID}`)
                  }
                  src={banner.imageURL}
                  alt={banner.title}
                  width="50"
                  height="50"
                />
              </StyledTableCell>
              <StyledTableCell align="center">{banner.title}</StyledTableCell>
              {page === "banner-management" && (
                <StyledTableCell align="center">
                  {banner.authorUsername}
                </StyledTableCell>
              )}
              <StyledTableCell align="center">
                {String(banner.createdAt.substring(0, 10))}
              </StyledTableCell>
              <StyledTableCell align="center">
                {banner.note || "none"}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleOpenDeleteDialog(banner._id)}>
                  <Delete />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => navigate(`/banners/edit/${banner._id}`)}>
                  <Edit />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
