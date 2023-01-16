import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "../services/api";
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
  email: "",
  password: "",
};

const Login = ( {setLoginUser} ) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState(defaulValue);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const userLogin = async () => {
    await loginUser(userData)
    .then(m => {
      console.log(m.message);
      console.log(m.user);
      alert(m.message);
      setLoginUser(m.user);
      if(m.message === 'Login Succesfull')
        navigate('/community');
    })
  };

  return (
    <div>
      <div className="Login">
        <div className="BannerPicture"></div>
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
              LOG IN
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
              By continuing, you agree to our{" "}
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
                label="Password"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="password"
                type="password"
              />
            </FormControl>
            <FormControl>
              <Button
                variant="contained"
                style={{ width: "25vw" }}
                onClick={userLogin}
              >
                LOG IN
              </Button>
            </FormControl>
            <div onClick={() => navigate("/register")}>
              <Link className='link' underline="always">
                {"Don't have an account? Sign Up"}
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Login;
