import express from "express";
import morgan from "morgan";
import { routeUser } from "./route/aboutRoute.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Users } from "./Model/User.js";
import {creteTokens} from './lib/index.js';
import jwt from 'jsonwebtoken';

//connect mongodb
const URI =
  "mongodb+srv://hiep:hiep123@cluster0.d7cl6dz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
  console.log("db connected");
});
// middleware
const app = express();
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use("/about", routeUser);

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  Users.findOne({ username: username, password: password })
    .then((data) => {
      if (data) {
        const accessToken = creteTokens(data)
        res.cookie('access-token',accessToken,{ expires: new Date(Date.now() + 900000)})
        res.json("logined");
      } else {
        return res.status(500).json({ message: "login error" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: err });
    });
});
app.get('/login', function(req, res){
  res.render('/login');
});

app.get("/",(req, res,next) => {
  res.status(200).json({message:"welcom"});
});
app.get('/login',(req, res, next) => {
  res.send("deo biet")
})

app.listen(4000, () => {
  console.log("server run");
});
