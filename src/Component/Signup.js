import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "130px",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [useDeatil, setUserDeatil] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    otp: "",
  });

  const handleChange = (event) => {
    setUserDeatil({ ...useDeatil, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(useDeatil, "----");
    e.preventDefault();
    await axios
      .post("http://localhost:4000/newuser", useDeatil)
      .then((res) => {
        console.log(res, "respones");
        props.history.push('/searchptin')
      })
      .catch((err) => {
        console.log(err, "errorr");
      });
  };
  console.log(useDeatil, "state");
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="User Name"
            name="userName"
            autoComplete="username"
            autoFocus
            defaultValue={useDeatil.userName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
            defaultValue={useDeatil.userEmail}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPhone"
            label="Phone Number"
            type="number"
            autoComplete="phoneNumber"
            onChange={handleChange}
            defaultValue={useDeatil.userPhone}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="otp"
            label="OTP"
            name="otp"
            autoComplete="OTP"
            autoFocus
            defaultValue={useDeatil.otp}
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
