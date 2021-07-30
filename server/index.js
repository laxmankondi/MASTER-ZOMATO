//env import variables
require ("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//config
import googleAuthConfig from "./config/google.config";

//microservices routs
import Auth from "./API/Auth";

//database connection
import ConnectDB from "./database/connection";

const zomato = express();

//middlewares application
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());

//passport config
googleAuthConfig(passport);

//Application Routes
zomato.use("/auth", Auth);

zomato.get("/", (req, res) => res.json({ message: "setup success"}));

zomato.listen(4000, () => ConnectDB()
.then(() => console.log("server is running"))
.catch(() => console.log("Server is running, but database connection failed")));