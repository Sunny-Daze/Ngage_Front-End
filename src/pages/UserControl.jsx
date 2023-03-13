import React from "react";
import Card from "../widgets/HeadingBanner";
import UserTable from "../components/UserTable";
import "./UserControl.css";
import { styled, alpha, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(50),
  marginLeft: theme.spacing(2),
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "50%",
    height: "20%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// Modal

const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: 500,
  p: 4,
};

function UserControl() {
  return (
    <div className="User-Control">
      <Card
        heading="User Management"
        subheading="Manage users in the service"
      />
      <div className="User-Table">
        <div className="User-Search-Bar">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for user"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default UserControl;
