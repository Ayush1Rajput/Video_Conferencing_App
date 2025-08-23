import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import httpStatus from "http-status";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: "Please provide username and password" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid username or password" });
    }

    const token = crypto.randomBytes(20).toString("hex");
    user.token = token;
    await user.save();

    return res.status(httpStatus.OK).json({ token });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong", error: e.message });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(httpStatus.BAD_REQUEST).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(httpStatus.FOUND).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(httpStatus.CREATED).json({ message: "User registered" });
  } catch (e) {
    return res.json({ message: "Something went wrong", error: e.message });
  }
};

const getUserHistory = async(req,res)=>{
  const {token} = req.query;

  try{
    const user = await User.findOne({token});
    const meetings = await meetings.find({user_id : user.username});
    res.json(meetings)
  }catch(e){
    res.json({message:`Something went wrong ${e}`});
  }
}


export { login, register}