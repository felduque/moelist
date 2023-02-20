import { Manhwa } from "../../models/Manhwa/manhwa.model.js";
import { Scan } from "../../models/Scan/scan.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createManhwa = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      day,
      type,
      source,
      chapters,
      volumes,
      rating,
      genres,
      authors,
      artists,
      score,
      popularity,
      scans,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/manhwa/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/manhwa/" + img?.name);
    if (!img) url = "google.com";
    const manhwa = await Manhwa.create({
      title,
      description,
      image: url,
      status,
      day,
      type,
      source,
      chapters,
      volumes,
      rating,
      genres,
      authors,
      artists,
      score,
      popularity,
      scans,
    });

    const { scanId } = req.body;
    const scan = await Scan.findOne({
      where: {
        id: scanId,
      },
    });
    await scan.addManhwa(manhwa);

    res.status(201).json(manhwa);
  } catch (error) {
    console.log(error);
  }
};

export const getManhwas = async (req, res) => {
  try {
    const manhwa = await Manhwa.findAll({
      include: {
        model: Scan,
      },
    });
    res.status(200).json(manhwa);
  } catch (error) {
    console.log(error);
  }
};

export const getManhwasById = async (req, res) => {
  try {
    const { id } = req.params;
    const manhwa = await Manhwa.findOne({
      where: { id },
      include: {
        model: Scan,
      },
    });
    res.status(200).json(manhwa);
  } catch (error) {
    console.log(error);
  }
};

export const updateManhwa = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      status,
      day,
      type,
      source,
      chapters,
      volumes,
      rating,
      genres,
      authors,
      artists,
      score,
      popularity,
      scans,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/manhwa/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/manhwa/" + img?.name);
    if (!img) url = "google.com";

    const manhwa = await Manhwa.update(
      {
        title,
        description,
        image: url,
        status,
        day,
        type,
        source,
        chapters,
        volumes,
        rating,
        genres,
        authors,
        artists,
        score,
        popularity,
        scans,
      },
      { where: { id } }
    );
    res.status(200).json(manhwa);
  } catch (error) {
    console.log(error);
  }
};

export const deleteManhwa = async (req, res) => {
  try {
    const { id } = req.params;
    const manhwa = await Manhwa.destroy({ where: { id } });
    res.status(200).json(manhwa);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
