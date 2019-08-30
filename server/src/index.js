import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import passport from "passport";
import session from "express-session";
import { config } from "./config";
import { initPassport } from "./api/auth";
import { initApi } from "./api";
import { initSwagger } from "./swagger";
import path from "path";

export const app = express();

mongoose.Promise = global.Promise;
mongoose
  .connect(config.dbConfig.host, {
    auth: {
      user: "prepsnutrition",
      password: "prepsnutrition13"
    },
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("connection succesful"))
  .catch(err => console.error(err));

app.use(morgan("combined"));
app.use(bodyParser.json());
initPassport();
app.use(
  session({
    secret: "elephant",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

initApi(app);
initSwagger(app);


app.listen(process.env.PORT || "3001", () => {
  console.log("Server started on 3001 port");
});
