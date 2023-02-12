import React from "react";
import Card from "../widgets/HeadingBanner";
import UserTable from "../components/UserTable";
import "./UserControl.css";
import {
  styled,
  alpha,
  InputBase,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { domain, endPoints } from "../services/endPoints";
import {postMethod} from "../services/Http.services";

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

// Add New User modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// User role Options

let userRoles = ["ADMIN", "EMPLOYEE", "USER", "COOPERATE"];

async function saveNewUser(fullName, email, role, phoneNumber, id) {
  let respone = await postMethod(domain + endPoints.createuser, {
    email: email,
    password: "ngage123",
    fullName: fullName,
    phone: phoneNumber,
    countryCode: "+91",
    role: role,
  });


  console.log(respone);
}

function UserControl() {
  const [fullName, setfullName] = React.useState("");
  const [email, setemail] = React.useState("");
  const [phoneNumber, setphoneNumber] = React.useState("");

  const [role, setrole] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Button onClick={handleOpen} variant="contained">
            Contained
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Create New User
              </Typography>

              <div className="add-user-form ">
                <div className="mb-2 w-5">
                  <TextField
                    required
                    id="outlined-required"
                    label="Full Name"
                    defaultValue=""
                    value={fullName}
                    onChange={(value) => setfullName(value.target.value)}
                  />
                </div>

                <div className="mb-2 w-5">
                  <TextField
                    required
                    id="outlined-required"
                    label="Email "
                    defaultValue=""
                    value={email}
                    onChange={(value) => setemail(value.target.value)}
                  />
                </div>

                <div className="mb-2 w-5">
                  <TextField
                    required
                    id="outlined-required"
                    label="Phone Number"
                    defaultValue=""
                    value={phoneNumber}
                    onChange={(value) => setphoneNumber(value.target.value)}
                  />
                </div>

                <div className="mb-2 w-5">
                  <TextField
                    id="user-role"
                    select
                    size="15"
                    label="Role"
                    defaultValue=""
                    helperText="Please select user's role"
                    value={role}
                    onChange={(value) => setrole(value.target.value)}
                  >
                    {userRoles.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
              </div>

              <div className="bottom-buttons">
                <div className="mr-2">
                  <Button onClick={handleClose} variant="outlined">
                    Cancel
                  </Button>
                </div>

                <div className="">
                  <Button
                    onClick={() => saveNewUser(fullName, email, role, "")}
                    variant="contained"
                  >
                    Save User
                  </Button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default UserControl;
