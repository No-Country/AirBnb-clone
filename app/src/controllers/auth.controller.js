import UsersModel from '../models/users.js';
import { getGoogleOAuthTokens, getGoogleUser,findAndUpdateUser } from '../service/auth.service.js';
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";
import config from '../config/mongodb.js'
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    // Username and password are flagged as UNIQUE
    // Check if username exist
    const username = user.username;
    const existingUser = await UsersModel.findOne({ username });

    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Check if email exist
    const email = user.email;
    const existingEmail = await UsersModel.findOne({ email });

    if (existingEmail) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new UsersModel(user);
    await newUser.save();

    const { token, expiresIn } = generateToken(user.id);
    generateRefreshToken(user.id, res);
    
    return res.status(201).json({ token, expiresIn });
  } catch (error) {
    console.log(error.code);
    return res.status(500).json({ error: "Server error." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await UsersModel.findOne({ email });
    if (!user) {
      return res.status(403).json({ error: "incorrect credentials" });
    }

    const responsePassword = await user.comparePassword(password);
    if (!responsePassword) {
      return res.status(400).json({ error: "incorrect credentials" });
    }
    const { token, expiresIn } = generateToken(user.id);

    generateRefreshToken(user.id, res);

    return res.json({ token, expiresIn });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error." });
  }
};

const googleOauthHandler = async(req,res) =>{
  try {
    const code = req.query.code;
    const {id_token,access_token} = await getGoogleOAuthTokens({code});
    const googleUser = await getGoogleUser({id_token, access_token});
    // jwt.decode(id_token)
    // console.log({googleUser})

    if(!googleUser.verified_email){
        return res.status(403).send('Google account is not verified.')
    }
    const user = await findAndUpdateUser(
        {
          email: googleUser.email,
        },
        {
          email: googleUser.email,
          name: googleUser.name,
          picture: googleUser.picture,
        },
        {
          upsert: true,
          new: true,
        }
    );
    const { token, expiresIn } = generateToken(user.id);
    generateRefreshToken(user.id, res);

    return res.status(201).json({ token, expiresIn });
  } catch (error) {
    console.log(error)
    return res.redirect(`${config.origin}/oauth/error`)
}
}

const infoUser = async (req, res) => {
  try {
    const user = await UsersModel.findById(req.uid).lean();
    return res.json({ email: user.email, uid: user._id });
  } catch (error) {
    return res.status(500).json({ error: "Server error." });
  }
};

const refreshToken = (req, res) => {
  try {
    const { token, expiresIn } = generateToken(req.uid);

    return res.json({ token, expiresIn });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error." });
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ ok: true });
};

export default{
  login,
  logout,
  registerUser,
  infoUser,
  refreshToken,
  googleOauthHandler
}