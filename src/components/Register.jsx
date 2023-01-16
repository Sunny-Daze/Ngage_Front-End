import React, { useState } from "react";
import "./Register.css";
import { userRegister } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  TextField,
  Typography,
  FormControl,
  Button,
  styled,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Grid from "@mui/material/Grid";

const Container = styled(FormGroup)`
  margin-left: 35px;
  & > div {
    margin-top: 20px;
  }
  & > a {
    margin-top: 15px;
  }
`;

const defaulValue = {
  name: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

function Register() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(defaulValue);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userRegisteration = async () => {
    const { name, email, password, reEnterPassword } = userData;
    console.log(name, email, password, reEnterPassword);
    if (name && email && password && password === reEnterPassword) {
      await userRegister(userData)
      .then(res => {
        alert(res.message)
        if(res.message === 'User successfully registered!')
          navigate('/');
      })
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className="Register">
      <div className="BannerPicture">
      </div>
      <div className="Form">
        <Container>
          <Grid item xs={1}>
            <LockOutlinedIcon
              style={{
                fontSize: "2.3rem",
                color: "white",
                background: "#8B008B",
                borderRadius: "50%",
                padding: "5",
              }}
            />
          </Grid>
          <Typography
            variant="h6"
            style={{ fontSize: "18px", marginTop: "5px" }}
          >
            SIGN UP
          </Typography>
          <Typography
            variant="h6"
            style={{
              fontSize: "13px",
              width: "25vw",
              lineHeight: "1.1",
              marginTop: "10px",
            }}
          >
            By continuing, you are setting up a Ngage account and agree to our{" "}
            <Link href="#" onclick underline="always">
              {"User Agreement"}
            </Link>{" "}
            and{" "}
            <Link href="#" onclick underline="always">
              {"Privacy Policy"}
            </Link>
            .
          </Typography>
          <FormControl style={{ width: "25vw" }}>
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              onChange={(e) => {
                handleChange(e);
              }}
              name="email"
            />
          </FormControl>
          <FormControl style={{ width: "25vw" }}>
            <TextField
              required
              id="outlined-required"
              label="User Name"
              onChange={(e) => {
                handleChange(e);
              }}
              name="name"
            />
          </FormControl>
          <FormControl style={{ width: "25vw" }}>
            <TextField
              required
              id="outlined-required"
              label="Password"
              onChange={(e) => {
                handleChange(e);
              }}
              name="password"
              type="password"
            />
          </FormControl>
          <FormControl style={{ width: "25vw" }}>
            <TextField
              required
              id="outlined-required"
              label="Confirm-Password"
              onChange={(e) => {
                handleChange(e);
              }}
              name="reEnterPassword"
              type="password"
            />
          </FormControl>
          <FormControl>
            <Button
              variant="contained"
              style={{ width: "25vw" }}
              onClick={userRegisteration}
            >
              SIGN UP
            </Button>
          </FormControl>
          <div onClick={() => navigate("/")}>
            <Link className='link' onclick underline="always">
              {"Already have a account? Sign In"}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Register;
