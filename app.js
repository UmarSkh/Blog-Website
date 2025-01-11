//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://UmarMongoDBAtlas:Umar-123@cluster0.exjln.mongodb.net/blogDB");

const postSchema = new mongoose.Schema({
  title : String,
  content: String
});

const Post = mongoose.model("Post", postSchema);



const homeStartingContent = "Welcome to Daily Journal! Your trusted companion for thoughtful insights, interesting stories, and valuable tips. From lifestyle and travel to technology and personal development, we cover a wide range of topics to keep you informed and inspired. Whether you’re here to learn, laugh, or share, there’s something for everyone. Join our community of curious minds and explore the endless possibilities. Let’s make every day a journey of discovery with Daily Journal!";
const aboutContent = "Daily Journal is your one-stop destination for inspiring stories, practical tips, and engaging content on various topics. We believe in the power of knowledge and creativity to transform lives. Our mission is to provide a platform where readers can explore, learn, and grow every day. With a commitment to quality and relevance, we strive to bring you fresh perspectives and meaningful discussions. Whether you’re here to discover new ideas or connect with like-minded individuals, Daily Journal is here to make your journey worthwhile.";
const contactContent = "We value your feedback and inquiries! Reach out to us anytime. We aim to respond to all messages within 24 hours. Your thoughts and suggestions are important to us as we work to make Daily Journal even better for you. Let’s stay connected!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// let posts = [];

app.get("/", async function(req, res){

  const posts = await Post.find();

  res.render("home", {
    startingContent: homeStartingContent,
    posts: posts
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  // const post = {
  //   title: req.body.postTitle,
  //   content: req.body.postBody
  // };

  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  post.save();

  // posts.push(post);

  res.redirect("/");

});

app.get("/posts/:postId", async function(req, res){
  const requestedpostId = (req.params.postId);

  // posts.forEach(function(post){
  //   const storedTitle = _.lowerCase(post.title);

  //   if (storedTitle === requestedTitle) {
  //     res.render("post", {
  //       title: post.title,
  //       content: post.content
  //     });
  //   }
  // });

  const post = await Post.findOne({_id: requestedpostId});

  res.render("post", {title: post.title, content: post.content});

});


// const port = 3000;
const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server started on port 3000");
});
