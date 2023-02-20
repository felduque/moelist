import { Anime } from "../../models/Anime/anime.model.js";
import { Scan } from "../../models/Scan/scan.model.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const createAnime = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      type,
      episodes,
      day,
      rating,
      premiered,
      duration,
      genres,
      studios,
      producers,
      demography,
      source,
      score,
      popularity,
      members,
      author,
      artist,
      favorites,
      season,
      trailer,
      opening,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/anime/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/anime/img/" + img?.name);
    if (!img) url = "google.com";

    const anime = await Anime.create({
      title,
      description,
      image: url,
      status,
      type,
      episodes,
      day,
      rating,
      premiered,
      duration,
      genres,
      studios,
      producers,
      demography,
      source,
      score,
      popularity,
      members,
      author,
      artist,
      favorites,
      season,
      trailer,
      opening,
    });

    // se relaciona con Scan
    const { scanId } = req.body;
    const scan = await Scan.findOne({
      where: {
        id: scanId,
      },
    });
    await anime.addScan(scan);

    res.status(201).json(anime);
  } catch (error) {
    console.log(error);
  }
};

export const getAnime = async (req, res) => {
  try {
    const anime = await Anime.findAll({
      include: Scan,
    });
    res.status(200).json(anime);
  } catch (error) {
    console.log(error);
  }
};

export const getAnimeById = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findOne({
      where: {
        id,
      },
      include: {
        model: Scan,
      },
    });
    res.status(200).json(anime);
  } catch (error) {
    console.log(error);
  }
};

export const updateAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      status,
      type,
      episodes,
      day,
      rating,
      premiered,
      duration,
      genres,
      studios,
      producers,
      demography,
      source,
      score,
      popularity,
      members,
      author,
      artist,
      favorites,
      season,
      trailer,
      opening,
    } = req.body;

    const img = req.files?.image;
    let pathImage = __dirname + "/../../public/anime/" + img?.name;
    img?.mv(pathImage);
    let url = (pathImage = "http://localhost:3000/anime/" + img?.name);
    if (!img) url = "google.com";

    const anime = await Anime.update(
      {
        title,
        description,
        image: url,
        status,
        type,
        episodes,
        day,
        rating,
        premiered,
        duration,
        genres,
        studios,
        producers,
        demography,
        source,
        score,
        popularity,
        members,
        author,
        artist,
        favorites,
        season,
        trailer,
        opening,
      },
      {
        where: {
          id,
        },
      }
    );
    res.status(200).json(anime);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(anime);
  } catch (error) {
    console.log(error);
  }
};
