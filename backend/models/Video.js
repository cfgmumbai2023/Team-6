import mongoose from "mongoose";
import MongooseMap from 'mongoose-map';

const VideoSchema = new mongoose.Schema({
    description: {
        type: String,
        min: 5,
        max: 20,
        required: true,
    },
    name: {
        type: String,
        min: 5,
        max: 30,
        required: true,
    },
    tags: {
        type: Array
    },
    approved: {
        type: Boolean,
        required: true,
    },
    link: {
        type: URL,
        required: true,
        unique: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    class: {
        type: String,
        required: true,
    },
    views: {
        type: Map,
        default: {},
    }
}
)
const User = mongoose.model("User", UserSchema);
export default User;