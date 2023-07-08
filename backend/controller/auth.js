import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

// Register User

export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            contactNumber,
            role
        } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const newUser = await User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            contactNumber,
            role
        })
        const savedUser = await newUser.save();
        const data = {
            id: savedUser._id,
        }
        const token = jwt.sign(data, process.env.JWT_SECRET);
        res.status(201).json(token);

    }
    catch (err) {
        // console.log(`${err} Error has occured bitch`)
        res.status(500).send({ error: err.message });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ err: "Wrong credentials" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ err: "Wrong credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
    }

    catch (err) {
        res.status(500).send({ error: err.message });
    }

}

