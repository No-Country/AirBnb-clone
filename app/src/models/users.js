import mongoose from 'mongoose';


//////////////////////////////////////////////////////////////////////////////////
//                                SCHEMA DETAIL                                 //
//  username:  unique, String.                                                  //
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


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
        },

        password: {
            type: String,
            minlength: 6,
        },

        email: {
            type: String,
            unique: true,
        },

        role: {
            type: String,
            default: "user",
        },

        status: {
            type: String,
            default: "active",
        },

        avatar: {
            type:String,
            default: 'img/avatar.png',
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
            default: Date.now
        },

        modified_at: {
            type: Date,
            default: Date.now
        },
    },
    {
        versionKey: false,
    }
);

mongoose.set("strictQuery", false);

const UsersModel = mongoose.model("Users", userSchema);

export default UsersModel;