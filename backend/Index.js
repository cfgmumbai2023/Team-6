import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { verifyToken } from "./middleware/auth.js";
import authRoutes from "./routes/auth.js"
import User from "./models/User.js";

const app = express();

// CONFIGURATION
dotenv.config();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// LOGIN

app.use('/auth', authRoutes);

// SETUP MONGOOSE
const PORT = process.env.PORT || 5002;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`PORT is ${PORT}`)
    });
    console.log("Connected Successfully");
}).catch((err) => {
    console.log(`${err} Cannot connect`)
})