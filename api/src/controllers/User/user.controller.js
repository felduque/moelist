import { User } from "../../models/User/user.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Anime } from "../../models/Anime/anime.model.js";
import { Manga } from "../../models/Manga/manga.model.js";
import { Manhua } from "../../models/Manhua/manhua.model.js";
import { Manhwa } from "../../models/Manhwa/manhwa.model.js";

export const createUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const verfiEmail = await User.findOne({ where: { email } });
    console.log(userName, email, password);

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
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    console.log(email, password);
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
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const addFavorite = async (req, res) => {
  console.log(req.body);
  try {
    const { type, idContent, idUser } = req.body;

    const userFound = await User.findByPk(idUser);

    if (!userFound) {
      return res.status(400).json({ error: "User not found" });
    }

    let content;
    switch (type) {
      case "anime":
        content = await Anime.findByPk(idContent);
        const anime = await userFound.addAnime(content);
        break;
      case "manga":
        content = await Manga.findByPk(idContent);
        const manga = await userFound.addManga(content);

        break;
      case "manhua":
        content = await Manhua.findByPk(idContent);
        const manhua = await userFound.addManhua(content);
        break;
      case "manhwa":
        content = await Manhwa.findByPk(idContent);
        const manhwa = await userFound.addManhwa(content);
        break;
      default:
        break;
    }

    res.status(200).json(content);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Anime,
          attributes: [
            "id",
            "title",
            "description",
            "image",
            "contentType",
            "genres",
          ],
          through: { attributes: [] },
        },
        {
          model: Manga,
          attributes: [
            "id",
            "title",
            "description",
            "image",
            "contentType",
            "genres",
          ],
          through: { attributes: [] },
        },
        {
          model: Manhua,
          attributes: [
            "id",
            "title",
            "description",
            "image",
            "contentType",
            "genres",
          ],
          through: { attributes: [] },
        },
        {
          model: Manhwa,
          attributes: [
            "id",
            "title",
            "description",
            "image",
            "contentType",
            "genres",
          ],
          through: { attributes: [] },
        },
      ],
    });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const favorites = [
      ...user.animes,
      ...user.mangas,
      ...user.manhuas,
      ...user.manhwas,
    ];

    res.status(200).json(favorites);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);

    const user = await User.findOne({
      where: { id },
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Anime,
          attributes: ["id", "title", "description", "image", "contentType"],
          through: { attributes: [] },
        },
        {
          model: Manga,
          attributes: ["id", "title", "description", "image", "contentType"],
          through: { attributes: [] },
        },
        {
          model: Manhua,
          attributes: ["id", "title", "description", "image", "contentType"],
          through: { attributes: [] },
        },
        {
          model: Manhwa,
          attributes: ["id", "title", "description", "image", "contentType"],
          through: { attributes: [] },
        },
      ],
    });

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const favorites = [
      ...user.animes,
      ...user.mangas,
      ...user.manhuas,
      ...user.manhwas,
    ];

    res.status(200).json({ user, favorites });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};
