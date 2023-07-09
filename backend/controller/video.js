import User from "../models/User.js";
import Video from "../models/Video.js"


//Video Addition

export const addition = async (req, res) => {
    try {
        const {
            description,
            name,
            approved,
            link,
            views,
            grade

        } = req.body;
        const newVideo = await Video({
            description,
            name,
            approved,
            link,
            views,
            grade

        })
        console.log(req.user);
        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    }
    catch (err) {
        // console.log(`${err} Error has occured bitch`)
        res.status(500).send({ error: err.message });
    }
}
export const approve = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.role === 'Admin') {
            const video = await Video.findById(req.body.id);
            video.approved = true;
            await video.save();
            res.status(200).send(video);
        }
        else {
            res.status(404).send("Invalid Credentials");
        }

    }
    catch (err) {
        // console.log(`${err} Error has occured bitch`)
        res.status(500).send({ error: err.message });
    }
}
export const disapprove = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.role === 'Admin') {
            const video = await Video.findByIdAndDelete(req.body.id);
            res.status(200).send(video);
        }
        else {
            res.status(404).send("Invalid Credentials");
        }

    }
    catch (err) {
        // console.log(`${err} Error has occured bitch`)
        res.status(500).send({ error: err.message });
    }
}