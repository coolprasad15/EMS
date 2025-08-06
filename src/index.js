import dotenv from 'dotenv';
dotenv.config()

// dotenv.config({
//     path: "./.env"
// });

import app from './app.js';
import connectDB from './db/database.js';

connectDB()
.then(() => {
    app.listen(process.env.PORT || 2000, () => {
        console.log(`Server running on ${process.env.PORT}!`);
    });
})
.catch((err) => {
    console.log("Server connction failed!", err);
});