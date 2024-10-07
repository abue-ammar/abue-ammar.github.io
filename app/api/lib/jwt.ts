import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

// Sign a JWT token
export const signToken = (payload: any) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); // Token valid for 1 hour
};

// Verify a JWT token
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY); // Verify the token
  } catch (error: any) {
    console.log("Token verification failed:", error.message); // Log any token verification errors
    return null; // Return null if verification fails
  }
};
