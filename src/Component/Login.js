import React from 'react'
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "130px",
     
    },
  card:{
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius:'5%'
  },

  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
}))



export default function Login() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs" className={classes.card}>
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Login
          </Typography>
          <form className={classes.form} noValidate >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="User Name"
              name="userName"
              autoComplete="username"
              autoFocus
           
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
             
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              pattern="^\d{4}-\d{3}-\d{4}$" required 
              name="userPhone"
              label="Phone Number"
              type="phone"
              autoComplete="phoneNumber"
             
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
    )
}
