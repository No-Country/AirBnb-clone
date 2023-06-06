import AccModel from "../models/accommodation.js";
import jwt from "jsonwebtoken";

const getAcc = async (req, res) => {
  try {
    const accommodation = await AccModel.find().populate({
      path: 'userOwner',
      select: 'firstname lastname',
    });

    res.status(200).json({ accommodation });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error in fetching accommodation" });
  }
};
const getUserAcc = async (req, res) => {
  try {
    const { id } = req.params;
    const accommodation = await AccModel.find({ userOwner: id })

    res.status(200).json({ accommodation });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error in fetching accommodation" });
  }
};
const getAccById = async (req, res) => {
  try {
    const { id } = req.params;
    const accommodation = await AccModel.findById(id).populate({
      path: 'userOwner',
      select: 'firstname lastname',
    });

    if (!accommodation) {
      return res.status(404).json({ message: "No accommodation found" });
    }
    res.status(200).json({ accommodation });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error in fetching accommodation" });
  }
};

const addAcc = async (req, res) => {
  try {
    const {
      name,
      hostImage,
      summary,
      space,
      description,
      rooms,
      price,
      image,
      address,
      category,
      bedrooms,
      bathrooms,
      parking,
      wifi,
      number_of_reviwes,
      rating,
      reviews,
      tv,
      air_condition
    } = req.body;

    const token = req.cookies.refreshToken;

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        const decodedToken = jwt.verify(token, process.env.JWT_REFRESH);
        const userOwner = decodedToken.uid;

    const accommodation = new AccModel({
      name,
      hostImage,
      summary,
      space,
      description,
      rooms,
      price,
      image,
      address,
      category,
      bedrooms,
      bathrooms,
      parking,
      wifi,
      number_of_reviwes,
      rating,
      reviews,
      tv,
      air_condition,
      userOwner
    });
    const add = await accommodation.save();
    res.status(200).json({ add });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error in adding accommodation" });
  }
};
const editAcc = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    const edit = await AccModel.findByIdAndUpdate(id, { $set: update }, {
      new: true,
    });
    if (!edit) {
      return res.status(404).json({ msg: 'Accommodation not found' })
    }
    res.status(200).json('Accommodation update successfully');
  } catch (error) {
    console.log(error)
    res.json({ error: "Error in editing accommodation" });
  }
}

const deleteAcc = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAcc = await AccModel.findByIdAndDelete(id);
    if (!deleteAcc) {
      return res.status(404).json({ msg: 'Accommodation not found' })
    }
    res.status(200).json('Accommodation delete successfully');
  } catch (error) {
    console.log(error)
    res.json({ error: "Error in deleting accommodation" });
  }
}


export default {
  getAcc,
  getUserAcc,
  getAccById,
  addAcc,
  editAcc,
  deleteAcc
};
