//jshint esversion:6
//required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

//creating constants
const homeStartingContent = "Welcome to our blog website! We are a community of writers and thinkers who share a passion for exploring ideas, sharing stories, and engaging in thoughtful discussions. Our blog covers a wide range of topics, from current events and politics to personal growth and wellness.";
const aboutContent = "Welcome to our blog website! Our about page is designed to help you get to know us and our mission a little better.Our blog is a community of writers and thinkers who are passionate about exploring ideas, sharing stories, and engaging in thoughtful discussions. We believe that everyone has a unique perspective to offer, and we're committed to creating a space where diverse voices can be heard. \n Our team is made up of individuals from a wide range of backgrounds, experiences, and expertise. We are writers, researchers, educators, and professionals who share a common goal: to create a better world through the power of words.We are dedicated to providing our readers with high-quality, informative, and engaging content on a variety of topics, including current events, politics, culture, personal growth, and wellness. \n Our writers bring a fresh and unique perspective to each topic they cover, and we're always on the lookout for new voices to join our community.At our blog, we believe that words have the power to change the world. \n By sharing our thoughts and experiences, we hope to inspire others to think critically, engage in meaningful conversations, and take action to create positive change in their own lives and communities.Thank you for visiting our blog, and we look forward to sharing our journey with you";
const contactContent = "We would love to hear from you! Our contact page is the best way to get in touch with us, whether you have a question, comment, or just want to say hello.You can reach us by filling out the contact form on this page, or by sending us an email at [insert email address here]. We read every message that comes our way, and we'll do our best to respond as quickly as possible.We also invite you to connect with us on social media. You can follow us on [insert social media platform(s) here] to stay up-to-date on our latest blog posts, news, and events. We love hearing from our readers, and we're always looking for new ways to engage with our community.If you're interested in contributing to our blog, we'd love to hear from you too! We welcome guest posts from writers and thinkers who share our passion for exploring ideas, sharing stories, and engaging in thoughtful discussions. Please visit our Write for Us page for more information on how to submit a guest post.Thank you for taking the time to visit our blog, and we look forward to hearing from you soon!";

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
    // console.log(contentTitle);Hellf ajdkfljlajjlkd jfjd 
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

app.get("/posts/:testing", function(req, res){
    const test = (req.params.testing);
    const testLower = lodash.lowerCase(test);
    posts.forEach(function(post){
        const title = (post.postTitle);
        const titleLower = lodash.lowerCase(title);
        if(titleLower === testLower){
            res.render("post", {postTit: post.postTitle, postCont: post.postContent});
        }
    });
});










app.listen(3000, function () {
    console.log("Server is Running Successfully");
});
