const express = require('express'); 
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello fotsiny');
});

// Assurez-vous de remplacer <username> et <password> par vos véritables identifiants MongoDB
mongoose.connect("mongodb+srv://admin:<1234.admin>@backend.fsz67.mongodb.net/?retryWrites=true&w=majority&appName=Backend")
    .then(() => {
        console.log("Connecté à MongoDB");
    })
    .catch((err) => {
        console.log("Erreur de connexion à MongoDB:", err);
    });

