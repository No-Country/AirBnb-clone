import AccModel from "../models/accommodation.js";

const getAcc = async (req, res) => {
  try {
    const accommodation = await AccModel.find();
    res.status(200).json({ accommodation });
  } catch (error) {
    console.log(error);
    res.json({ error: "Error in fetching accommodation" });
}
};
const getAccById = async(req,res) => {
    try{
        const {id} = req.params;
        const accommodation = await AccModel.findById(id);
        if(!accommodation){
            return res.status(404).json({message:"No accommodation found"});
        }
        res.status(200).json({accommodation});
        }catch(error){
            console.log(error);
            res.json({error:"Error in fetching accommodation"});
    }
};

const addAcc = async (req, res) => {
try {
    const {
    name,
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
  const accommodation = new AccModel({
    name,
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
        const {id} = req.params;
        const update = req.body;

        const edit = await AccModel.findByIdAndUpdate(id, {$set: update}, {
            new: true,
            });
            if(!edit){
                return res.status(404).json({msg: 'Accommodation not found'})
            } 
            res.status(200).json('Accommodation update successfully');            
    }catch (error) {
        console.log(error)
        res.json({error: "Error in editing accommodation"});
        }
    }

const deleteAcc = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteAcc = await AccModel.findByIdAndDelete(id);
        if(!deleteAcc){
            return res.status(404).json({msg: 'Accommodation not found'})
            }
            res.status(200).json('Accommodation delete successfully');
            }catch (error) {
                console.log(error)
                res.json({error: "Error in deleting accommodation"});
                }
            }


export default {
  getAcc,
  getAccById,
  addAcc,
  editAcc,
  deleteAcc
};
