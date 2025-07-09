import {User} from '../models/user.model.js'
import bcrypt, {hash} from "bcrypt";

const register = async (req,res)=>{
    const {name,username, password} = req.body

    try{
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(302).json({message:"User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name:name,
            username:username,
            password:hashedPassword
        });

        await newUser.save();

        res.status(201).json({message:"User registered"});
    }
    catch(e) {
        res.json({message:"Something is wrong"})
    }
}
