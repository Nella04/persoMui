import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function Creat() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/creat", { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <Container component="main" maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Ajouter un utilisateur
        </Typography>
        <form onSubmit={submit}>
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre nom"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="E-Mail"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre âge"
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Envoyer
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Creat;
