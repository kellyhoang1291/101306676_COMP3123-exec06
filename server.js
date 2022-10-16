const express = require('express');
const notesRoutes = require("./routes/NoteRoutes")
const mongoose = require('mongoose');

const app = express();

const DB_URL = "mongodb+srv://diemphuong1291:Di3mphuong@cluster0.rdmmjv6.mongodb.net/db_f2022_comp3123?retryWrites=true&w=majority"

app.use(express.json())
app.use(express.urlencoded())


mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/v1/", notesRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});