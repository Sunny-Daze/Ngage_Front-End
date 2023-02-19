import { React } from "react";
import "./EditUserDetails.css";
import {
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl,
} from "@mui/material";

const headingStyle = {
  fontSize: "1.5rem",
  color: "darkslategray",
};

const defaultValue = {
  email: "",
  username: "",
  userRole: ""
}

function EditUserDetails({ props }) {

  const [userData, setUserData] = React.useState(defaultValue);

  const [role, setRole] = React.useState('employee');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUserInput = (e) => {
    setUserData({...userData, [e.target.name] : e.target.value});
    console.log(userData);
  }

  const handleClick = () => {
    console.log(defaultValue);
  }

  return (
    <div className="EditUserDetails">
      <Typography variant="body2" style={headingStyle}>
        Update User Details
      </Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={(e) => {
          handleUserInput(e);
        }}
        value={props.email}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={props.username}
      />

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Role"
            name="UserRole"
            onChange={handleChange}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"employee"}>Employee</MenuItem>
            <MenuItem value={"customer"}>Customer</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Button variant="contained" onClick={handleClick}>UPDATE USER</Button>
    </div>
  );
}

export default EditUserDetails;
