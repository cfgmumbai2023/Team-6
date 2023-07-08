import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if (!token) {
            return res.status(403).json({ err: "Access Denied" });
        }
        if (token.startsWith("Beared ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
}