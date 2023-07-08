import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: 5,
        max: 20,
        required: true,
    },
    lastName: {
        type: String,
        min: 5,
        max: 20,
        required: true,
    },
    email: {
        type: String,
        min: 5,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 5,
        required: false,
    },
    contactNumber:{
        type:Number,
        min:10,
        max:10,
        required:true,
    },
    role:{
        type:String,
        required:true
    }
}
)
const User=mongoose.model("User",UserSchema);
export default User;