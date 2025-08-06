import express from 'express';
const app = express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb" }));
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));
app.use(cookieParser());

//router
import userRouter from './routes/user.route.js';

app.use("/api/users", userRouter);

export default app;