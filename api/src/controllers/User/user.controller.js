import { User } from "../../models/User/user.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const verfiEmail = await User.findOne({ email });

    if (verfiEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const veryEmail = await User.findOne({ where: { email } });

    if (!veryEmail)
      return res.status(400).json({ error: "Invalid credentials" });

    console.log(veryEmail);

    // check if password is correct
    const isMatch = await bcrypt.compare(password, veryEmail.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // create token
    const payload = {
      id: veryEmail.id,
      role: veryEmail.role,
    };
    jwt.sign(
      payload,
      "HOXmtwgjUmhOtDutUaXK/PQX5RGV4lSbgU1CbAq+wFc=",
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};
