import { Schema, model } from "mongoose";
import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

//////////////////////////////////////////////////////////////////////////////////
//                                SCHEMA DETAIL                                 //
//  firstname: String                                                           //
//  password: String                                                            //
//  password: password associated to an username, minlength 6, String.          //
//  email: unique, String.                                                      //
//  role: su, admin, host, user, by default starts with user, String.           //
//  status: active, banned, suspended, by default starts with active, String .  //
//  favourites: favs places, array.                                             //
//  placesForRent: only for hosts, array.                                       //
//  placesRented: list of places rented, for users, array.                      //
//  created_at: date of creation, automatic.                                    //
//  modified_at: date of last modification, automatic.                          //
//////////////////////////////////////////////////////////////////////////////////

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },

    status: {
      type: String,
      default: "active",
    },
    picture: {
      type: String,
      default: "img/avatar.png",
    },

    favourites: {
      type: Array,
    },

    placesForRent: {
      type: Array,
    },

    placesRented: {
      type: Array,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },

    modified_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    next();
  } catch (error) {
    console.log(error);
    throw new Error("Fallo el hash de contraseña.");
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcryptjs.compare(candidatePassword, this.password);
};


const UsersModel = mongoose.model("Users", userSchema);

export default UsersModel;