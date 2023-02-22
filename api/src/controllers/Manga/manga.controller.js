import { Manga } from "../../models/Manga/manga.model.js";
import { Scan } from "../../models/Scan/scan.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createManga = async (req, res) => {
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
      urlContent,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/manga/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "https://apix.moelist.online/manga/" + img?.name);
    if (!img)
      url =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
    const manga = await Manga.create({
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
      urlContent,
    });
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

export const getMangas = async (req, res) => {
  try {
    console.log(process.env.KEY);
    const mangas = await Manga.findAll({
      include: {
        model: Scan,
      },
    });

    res.status(200).json(mangas);
  } catch (error) {
    console.log(error);
  }
};

export const getMangaById = async (req, res) => {
  try {
    const { id } = req.params;
    const manga = await Manga.findOne({
      where: { id },
    });

    const scans = await manga.getScans();
    res.status(200).json({ manga, scans });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateManga = async (req, res) => {
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
    let pathImage = __dirname + "/../../public/manga/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "https://apix.moelist.online/manga/" + img?.name);
    if (!img)
      url =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";

    const manga = await Manga.update(
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
    res.status(200).json(manga);
  } catch (error) {
    console.log(error);
  }
};

export const deleteManga = async (req, res) => {
  try {
    const { id } = req.params;
    const manga = await Manga.destroy({ where: { id } });
    res.status(200).json(manga);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
