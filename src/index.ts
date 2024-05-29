import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users";
import projectsRoutes from "./routes/projects";
import pullRequestsRoutes from "./routes/pullRequests";
import issuesRoutes from './routes/issues'
import bodyParser from 'body-parser'
import paymentRoutes from './routes/payments'

require('dotenv').config();

const app = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRoutes);
app.use(projectsRoutes);
app.use(pullRequestsRoutes);
app.use(issuesRoutes)
app.use(paymentRoutes)

const uri: string = `mongodb://127.0.0.1:27017/hezzie`;

const options: ConnectOptions = {};

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error;
    });
