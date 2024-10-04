import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch(err => console.log(err));
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
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
          Modifier l'utilisateur
        </Typography>
        <form onSubmit={updateUser}>
          <TextField
            label="Nom"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            label="E-Mail"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Votre âge"
            type="number"
            value={age}
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

export default Update;
