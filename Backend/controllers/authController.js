// backend/controllers/authController.js

import { getDB } from '../config/db.js';
import { hashPassword, comparePassword } from '../utils/passwordUtils.js';
import { generateToken, verifyToken } from '../utils/tokenUtils.js';

import { User } from '../models/userModel.js';

export const register = async (req, res) => {
    const db = getDB();
    const { username, password } = req.body;

    try {
        const hashedPassword = await hashPassword(password);
        const newUser = {
            username,
            password: hashedPassword,
            role: 'user',
        };

        const result = await db.collection('users').insertOne(newUser);

        const token = generateToken(result.insertedId);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const db = getDB();
    const { username, password } = req.body;

    try {
        const user = await db.collection('users').findOne({ username });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(user._id);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
