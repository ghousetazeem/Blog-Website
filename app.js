//jshint esversion:6
//required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//creating constants
const homeStartingContent = "lorem dfa hh oifjjfaijf sdjfha jsdj  ajdf asdk fjoiajhkf hadsh gksf ag  hfhdjk vdagfggsdhf ha ghak h kjhaipgh  v a f h hfkj fuha hgfa hff dfkj hfh kah fh adfasf lorem dfa hh oifjjfaijf sdjfha jsdj  ajdf asdk fjoiajhkf hadsh gksf ag  hfhdjk vdagfggsdhf ha ghak h kjhaipgh  v a f h hfkj fuha hgfa hff dfkj hfh kah fh adfasf";
const aboutContent = "haeljaj  jjf a nhan  hjajf lask hegdkajsf djdh gaf hkg hajf hads dk;gjhakdh gkdfhkg hakjh ghfdakjg hadkj ak f ads hfka gak  kadshlf hadsl gug jsd fgkajhflahf";
const contactContent = "Heheheh skj  hfasd hfahf hkjsdjkf ka h skfkahkjh hfhsddkj ghah fkhau hkjadjdh f dsh kjahf hkdsfhfh  sd hkdh hf jha  dah fhahg jkd h gukf sdhfdsdhfla";

//creating global varibles
let posts = [];


//assigining express module to app
const app = express();

//setting the ejs engine
app.set("view engine", "ejs");


//using modules and files
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//creating routes

app.get("/", function (req, res) {
    res.render("home", {
        homeContent: homeStartingContent,
        posts: posts
    });
});

app.get("/about", function (req, res) {
    res.render("about", { aboutCont: aboutContent});
});

app.get("/contact", function (req, res) {
    res.render("contact", { contactCont: contactContent});
});

app.get("/compose", function (req, res) {
    res.render("compose");
});

app.post("/compose", function (req, res) {
    // const contentTitle = req.body.postTitle;
    // const contentPost = req.body.postContent;
    // console.log(contentTitle);
    // console.log(contentPost);
    // console.log(post["postTitle"]);
    // console.log(post["postContent"]);
    const post = {
        postTitle: req.body.postTitle,
        postContent: req.body.postContent
    }
    posts.push(post);
    // console.log(posts);
    res.redirect("/");
});













app.listen(3000, function () {
    console.log("Server is Running Successfully");
});
