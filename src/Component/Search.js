import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Header from "./Header";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
  },
  input: {
    [`& fieldset`]: {
      borderRadius: 18,
    },
  },
  button: {
    height: 50,
    marginTop: 16,
    marginLeft: 10,
  },
}));

export default function Search(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root} maxWidth="lg">
        <div className="serchBox">
          <TextField
            label="Search property by PTI"
            margin="normal"
            id="query"
            variant="outlined"
            name="query"
            fullWidth
            className={classes.input}
          />
         
        </div>
      </Container>
    </React.Fragment>
  );
}
