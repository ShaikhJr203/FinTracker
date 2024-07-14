import express, { Express } from "express";
import mongoose from "mongoose";
import FinancialRecordModel from "./schema/financial-record";
import FinancialRecordRouter from "./routes/financial-record";
import cors from "cors"

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://uzairphotos203:JFdo4KuoXyR0raCZ@fintracker.1p1ogl2.mongodb.net/"

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB"))
    .catch((err) => console.log("Failed to connect", err));


app.use("/financial-records", FinancialRecordRouter);

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
});