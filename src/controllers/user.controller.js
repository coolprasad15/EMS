import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import connectDB from '../db/database.js';

const registerUser = asyncHandler (async(req, res) => {
    // res.status(200).json("Hey worldsss!");
    connectDB();
    const hashPass = await bcrypt.hash("admin", 10);
    const newUser = new User({
        name: "Admin",
        email: "admin@gmail.com",
        password: hashPass,
        role: "Admin"
    })
    await newUser.save();
});

export { registerUser };