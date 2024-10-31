const express = require("express");
const connectDB = require("./config/db");
const port = 5000;
const dotenv = require("dotenv").config();
const path = require("path");
const admin_uri = "/WVpr@C2eKL5k"

// Connection à la DB
connectDB();

const app = express();

// Configuration du moteur de rendu EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

// Configure le dossier "public" comme dossier statique
app.use(express.static(path.join(__dirname, './public')));



// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/home", require("./routes/home.route"));
app.use("/register", require("./routes/inscrits.route"))

app.use(admin_uri, require("./routes/admin.route"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
 
