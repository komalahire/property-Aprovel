import React, {useState } from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Header from "./Header";
import CitizenDetail from './citizenDetail'
import axios from'axios';

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

const [searchPtin, SetSearchPtin]= useState('')
const [userData , SetUserData] = useState([])

const handleChange = (event) => {
  SetSearchPtin(event.target.value );
};


const handleSubmit = (e)=>{
e.preventDefault();

console.log(searchPtin, "STATE")
axios.get(`http://localhost:4000/getthedata/${searchPtin}`)
.then(res=>{
  SetUserData(res.data)
  // console.log(res.data, "dataaaaaaaaa")
})
.catch(err=>{
  console.log(err, "errrrrrrrrrrrrrrrrrrr")
})
}

  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <Container className={classes.root} maxWidth="lg">
        <div className="serchBox">
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            label="Search property by PTIN"
            margin="normal"
            variant="outlined"
            name="searchPtin"
            fullWidth
            className={classes.input}
            defaultValue={searchPtin}
            onChange={handleChange}
          />
         </form>
        </div>
      </Container>
    <CitizenDetail userData={userData }/>

    </React.Fragment>
  );
}
