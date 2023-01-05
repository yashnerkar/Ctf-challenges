require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const url = process.env.DATABASE_URL;

try {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
} catch (error) {
    console.log(error);
}
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(require(path.join(__dirname, "routes/user.js")));
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}
// const port = 8000;
app.listen(process.env.PORT || 8000, () => {
    console.log("Server is Listening on the Port...");
});