import { Manhua } from "../../models/Manhua/manhua.model.js";
import { Scan } from "../../models/Scan/scan.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createManhua = async (req, res) => {
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
    let pathImage = __dirname + "/../../public/manhua/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/manhua/" + img?.name);
    if (!img) url = "google.com";
    const manga = await Manhua.create({
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

    // se relaciona con Scan
    const { scanId } = req.body;
    const scan = await Scan.findOne({
      where: {
        id: scanId,
      },
    });
    await manga.addScan(scan);
    res.status(201).json(manga);
  } catch (error) {
    console.log(error);
  }
};

export const getManhua = async (req, res) => {
  try {
    const manhua = await Manhua.findAll({
      include: {
        model: Scan,
      },
    });
    res.status(200).json(manhua);
  } catch (error) {
    console.log(error);
  }
};

export const getManhuaById = async (req, res) => {
  try {
    const { id } = req.params;
    const manhua = await Manhua.findOne({
      where: { id },
      include: {
        model: Scan,
      },
    });
    res.status(200).json(manhua);
  } catch (error) {
    console.log(error);
  }
};

export const updateManhua = async (req, res) => {
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
    let pathImage = __dirname + "/../../public/manhua/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/manhua/" + img?.name);
    if (!img) url = "google.com";

    const manhua = await Manhua.update(
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
    res.status(200).json(manhua);
  } catch (error) {
    console.log(error);
  }
};

export const deleteManhua = async (req, res) => {
  try {
    const { id } = req.params;
    const manhua = await Manhua.destroy({ where: { id } });
    res.status(200).json(manhua);
  } catch (error) {
    console.log(error);
  }
};
