import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10; // Environment variable or configuration for easier adjustment

// Function to hash the password securely with error handling
export const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS); // Generate random salt
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error('Error hashing password:', error); // Re-throw with informative message
  }
};

// Function to compare the provided password with the hashed password
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    throw new Error('Error comparing passwords:', error); // Re-throw with informative message
  }
};
