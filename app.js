const express = require("express");
const mongoose = require ("mongoose");
const dbInfo = require("./dbadmin");
const feedRoutes = require("./routes/feedRoutes");

const app = express();

const dbURI = "mongodb+srv://"+ dbInfo.username +":"+ dbInfo.password +"@blog1.80x2gko.mongodb.net/"+ dbInfo.collection +"?retryWrites=true&w=majority"

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

    app.set("view engine", "ejs");

    app.use(express.static("public"));
    app.use(express.urlencoded({extended:true}));
    app.use((req, res, next) => {
        res.locals.path = req.path;
        next();
    });

    app.use("/feed", feedRoutes);

    app.get("/feed", (req, res) =>{
        res.render("index", { title: "Welcome to Facebook" });
    });

    app.get("/", (req, res) =>{
        res.redirect("/feed");
    });

    app.use((req, res) =>{
        res.status(404).render("404", { title: "Not found" });
    });

