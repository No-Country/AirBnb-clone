import UsersModel from '../models/users.js';
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const registerUser = async (req, res) => {
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

export const login = async (req, res) => {
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
export const infoUser = async (req, res) => {
  try {
    const user = await UsersModel.findById(req.uid).lean();
    return res.json({ email: user.email, uid: user._id });
  } catch (error) {
    return res.status(500).json({ error: "Server error." });
  }
};

export const refreshToken = (req, res) => {
  try {
    const { token, expiresIn } = generateToken(req.uid);

    return res.json({ token, expiresIn });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error." });
  }
};
export const getUsers = async (req, res) => {
  try {
      const users = await UsersModel.find();
      res.status(200).json({ users });
  } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Server error' });
  }
};

export const getUser = async (req, res) => {
  try {
      const { userId } = req.params;

      const user = await UsersModel.findById(userId);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ user });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
export const updateUser = async (req, res) => {
  try {
      const { userId } = req.params;
      const updates = req.body;

      const user = await User.findByIdAndUpdate(userId, { $set: updates }, { new: true });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};

export const deleteUser = async (req, res) => {
  try {
      const { userId } = req.params;

      const user = await UsersModel.findById(userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Remove user
      await user.remove();

      res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};

export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ ok: true });
};
