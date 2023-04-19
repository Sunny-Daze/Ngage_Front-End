import React from "react";
import "./EditUserDetails.css";
import {
  Typography,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import axios from "axios";
import { domain, endPoints } from "../services/endPoints";

const headingStyle = {
  fontSize: "1.5rem",
  color: "darkslategray",
};

function EditUserDetails({ props }) {
  const [role, setRole] = React.useState(props.role);
  const [email, setEmail] = React.useState(props.email);
  const [username, setUsername] = React.useState(props.username);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username);
  };

  const handleChange = (event) => {
    setRole(event.target.value);
    // console.log(role);
  };

  const editUser = async () => {
    let user = {
      userId: props.id,
      email: email,
      username: username,
      role: role,
    };

    let token = localStorage.getItem("token");

    // console.warn(token);

    let response = await axios.post(domain + endPoints.updateUser, user, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.data.success) {
      console.log("done");
      props.dialogClose();
    } else {
      // console.log("fucked");
    }

    // console.log(user);
  };

  return (
    <div className="EditUserDetails">
      <Typography variant="body2" style={headingStyle}>
        Update User Details
      </Typography>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => {
          handleEmail(e);
        }}
        defaultValue={email}
      />
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        onChange={(e) => {
          handleUsername(e);
        }}
        defaultValue={username}
      />

      <FormControl style={{width:'14rem'}}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Employee"}>Employee</MenuItem>
          <MenuItem value={"Customer"}>Customer</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" onClick={editUser}>
        UPDATE USER
      </Button>
    </div>
  );
}

export default EditUserDetails;
