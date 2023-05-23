
import jwt from "jsonwebtoken";
import UsersModel from '../models/users.js';


const addFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        // Decode token
        const decodedToken = jwt.verify(token, process.env.JWT_REFRESH);

        // Check if user exists
        const userID = await UsersModel.findById(decodedToken.uid)

        if (!userID) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const favorite = await UsersModel.findOneAndUpdate(
            { _id: decodedToken.uid },
            { $push: { favourites: id } },
            { new: true },
        );
        res.json(favorite);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while adding the favorite." });
    }
};

const removeFavorite = async (req, res) => {
    try {
        const { id } = req.params;
        const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Decode token
        const decodedToken = jwt.verify(token, process.env.JWT_REFRESH);

        // Check if user exists
        const userID = await UsersModel.findById(decodedToken.uid)

        if (!userID) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const favorite = await UsersModel.findOneAndUpdate(
            { _id: decodedToken.uid },
            { $pull: { favourites: id } },
            { new: true },
        );

        res.json(favorite);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while adding the favorite." });
    }
};

export default {
    addFavorite,
    removeFavorite
};
