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
      urlContent,
      artists,
      score,
      popularity,
      scans,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/manhwa/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "https://apix.moelist.online/manhwa/" + img?.name);
    if (!img)
      url =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
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
      urlContent,
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
    const manhwa = await Manhwa.findAll();
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
    });

    const scans = await manhwa.getScans();
    res.status(200).json({ manhwa, scans });
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
    let url = (pathImage = "https://apix.moelist.online/manhwa/" + img?.name);
    if (!img)
      url =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";

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
