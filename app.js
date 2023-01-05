require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const url = process.env.DATABASE_URL;
const user = require("./routes/user.js");

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
app.use("/", user);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});
// const port = 8000;
app.listen(process.env.PORT || 8000, () => {
    console.log("Server is Listening on the Port...");
});
