import { User } from "../../models/User/user.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const verfiEmail = await User.findOne({ email });

    if (verfiEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
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
    const veryEmail = await findOne({ email });

    if (!veryEmail) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // check if password is correct
    const isMatch = await bcrypt.compare(password, veryEmail.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // create token
    const payload = {
      user: {
        id: veryEmail.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    res.status(200).json({ veryEmail });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params?.id;
    const user = await User.findById(id).select("-password");

    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

// export const updateUser = async (req, res) => {
//   try{
//     const id = req.params?.id;
//     const  { name, email, password, newPassword } = req.body;
//     const compare = await bcrypt.compare(password, password);
//     if(!compare){
//       return res.status(400).json({ error: "Invalid credentials" });
//     }
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(newPassword, salt);

//     const user = await User.update(
//       { name, email, password: hashedPassword },
//       { where: { id } }
//     );
//     res.status(200).json({ user })
//   }catch(err){
//     console.log(err);
//     res.status(500).json({ error: "Server error" });
//   }
// }
