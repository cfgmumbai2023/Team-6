import mongoose from "mongoose";

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
        type: String,
        required: true,
        unique: true,
    },
    rating: {
        type: Number,
        default: 0,
    },
    grade: {
        type: String,
        required: true,
    },
    views: {
        type: Map,
        default: {},
    }
}
)
const Video = mongoose.model("Video", VideoSchema);
export default Video;