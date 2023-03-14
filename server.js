// version avec Express Framework
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require('cors')
const routePost = require("./backend/route/route");
mongoose.models = {};

const app = express();

// pour formater les données post en format json
app.use(express.json());

app.use(cors());

// connection vers mongoDB Atlas (service cloud)
mongoose
  .connect(
    "mongodb+srv://zarrougabdelhafidh:mynameishafa@cluster0.5mwcivt.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected !!!");
  })
  .catch(() => {
    console.log("Problème de connection !");
  });
  app.get("/posts", (req, res) => {
    const post = mongoose.model.post || mongoose.model("post", { titre: String, contenu: String });
    post.find().then((posts) => {
    console.log(posts);
    res.status(200).json(posts)
    });
   });
  app.use("/postsAPI", routePost);
  
  app.use(express.static(path.join(__dirname, "backend/www")));
app.listen(4000, () => {
  console.log("server is running on port 4000...");
});