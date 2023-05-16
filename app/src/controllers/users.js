import UsersModel from '../models/users.js';

export const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json({ users });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Server error' });
    }
};

const getUser = async (req, res) => {
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

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateUser = async (req, res) => {
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

const deleteUser = async (req, res) => {
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

export default {
    getUser,
    getUsers,
    registerUser,
    updateUser,
    deleteUser,
}