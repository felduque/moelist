import { Anime } from "../../models/Anime/anime.model.js";
import { Manga } from "../../models/Manga/manga.model.js";
import { Manhua } from "../../models/Manhua/manhua.model.js";
import { Manhwa } from "../../models/Manhwa/manhwa.model.js";
import { Op } from "sequelize";

export const filtersGeneral = async (req, res) => {
  let { type, status, demography, genres } = req.query;

  if (!status) status = undefined;
  if (!demography) demography = undefined;
  if (!genres) genres = undefined;
  if (!type) type = undefined;

  console.log(type, "type");
  console.log(status, "status");
  console.log(demography, "demography");
  console.log(genres, "genres");

  switch (type) {
    case "Anime":
      if (
        status === undefined &&
        demography === undefined &&
        genres === undefined
      ) {
        console.log("1");
        const anime = await Anime.findAll();
        res.json(anime);
      } else if (status === undefined && demography === undefined) {
        console.log("2");
        const anime = await Anime.findAll({
          where: {
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(anime);
      } else if (status === undefined && genres === undefined) {
        console.log("3");
        const anime = await Anime.findAll({
          where: {
            demography,
          },
        });
        res.json(anime);
      } else if (demography === undefined && genres === undefined) {
        console.log("4");
        const anime = await Anime.findAll({
          where: {
            status,
          },
        });
        res.json(anime);
      } else if (status === undefined) {
        console.log("5");
        const anime = await Anime.findAll({
          where: {
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(anime);
      } else if (demography === undefined) {
        console.log("6");
        const anime = await Anime.findAll({
          where: {
            status,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(anime);
      } else if (genres === undefined) {
        console.log("7");
        const anime = await Anime.findAll({
          where: {
            status,
            demography,
          },
        });
        res.json(anime);
      } else {
        console.log("8");
        const anime = await Anime.findAll({
          where: {
            status,
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(anime);
      }
      break;

    case "Manga":
      if (
        status === undefined &&
        demography === undefined &&
        genres === undefined
      ) {
        const manga = await Manga.findAll();
        res.json(manga);
      } else if (status === undefined && demography === undefined) {
        const manga = await Manga.findAll({
          where: {
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manga);
      } else if (status === undefined && genres === undefined) {
        const manga = await Manga.findAll({
          where: {
            demography,
          },
        });
        res.json(manga);
      } else if (demography === undefined && genres === undefined) {
        const manga = await Manga.findAll({
          where: {
            status,
          },
        });
        res.json(manga);
      } else if (status === undefined) {
        const manga = await Manga.findAll({
          where: {
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manga);
      } else if (demography === undefined) {
        const manga = await Manga.findAll({
          where: {
            status,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manga);
      } else if (genres === undefined) {
        const manga = await Manga.findAll({
          where: {
            status,
            demography,
          },
        });
        res.json(manga);
      } else {
        const manga = await Manga.findAll({
          where: {
            status,
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manga);
      }
      break;

    case "Manhua":
      if (
        status === undefined &&
        demography === undefined &&
        genres === undefined
      ) {
        const manhua = await Manhua.findAll();
        res.json(manhua);
      } else if (status === undefined && demography === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhua);
      } else if (status === undefined && genres === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            demography,
          },
        });
        res.json(manhua);
      } else if (demography === undefined && genres === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            status,
          },
        });
        res.json(manhua);
      } else if (status === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhua);
      } else if (demography === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            status,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhua);
      } else if (genres === undefined) {
        const manhua = await Manhua.findAll({
          where: {
            status,
            demography,
          },
        });
        res.json(manhua);
      } else {
        const manhua = await Manhua.findAll({
          where: {
            status,
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhua);
      }
      break;

    case "Manhwa":
      if (
        status === undefined &&
        demography === undefined &&
        genres === undefined
      ) {
        const manhwa = await Manhwa.findAll();
        res.json(manhwa);
      } else if (status === undefined && demography === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhwa);
      } else if (status === undefined && genres === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            demography,
          },
        });
        res.json(manhwa);
      } else if (demography === undefined && genres === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            status,
          },
        });
        res.json(manhwa);
      } else if (status === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhwa);
      } else if (demography === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            status,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhwa);
      } else if (genres === undefined) {
        const manhwa = await Manhwa.findAll({
          where: {
            status,
            demography,
          },
        });
        res.json(manhwa);
      } else {
        const manhwa = await Manhwa.findAll({
          where: {
            status,
            demography,
            genres: {
              [Op.contains]: [genres],
            },
          },
        });
        res.json(manhwa);
      }
      break;

    default:
      if (!type) {
        if (
          status === undefined &&
          demography === undefined &&
          genres === undefined
        ) {
          const anime = await Anime.findAll();
          const manga = await Manga.findAll();
          const manhua = await Manhua.findAll();
          const manhwa = await Manhwa.findAll();
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (status === undefined && demography === undefined) {
          const anime = await Anime.findAll({
            where: {
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manga = await Manga.findAll({
            where: {
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (status === undefined && genres === undefined) {
          const anime = await Anime.findAll({
            where: {
              demography,
            },
          });
          const manga = await Manga.findAll({
            where: {
              demography,
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              demography,
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              demography,
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (demography === undefined && genres === undefined) {
          const anime = await Anime.findAll({
            where: {
              status,
            },
          });
          const manga = await Manga.findAll({
            where: {
              status,
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              status,
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              status,
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (status === undefined) {
          const anime = await Anime.findAll({
            where: {
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manga = await Manga.findAll({
            where: {
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (demography === undefined) {
          const anime = await Anime.findAll({
            where: {
              status,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manga = await Manga.findAll({
            where: {
              status,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              status,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              status,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else if (genres === undefined) {
          const anime = await Anime.findAll({
            where: {
              status,
              demography,
            },
          });
          const manga = await Manga.findAll({
            where: {
              status,
              demography,
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              status,
              demography,
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              status,
              demography,
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        } else {
          const anime = await Anime.findAll({
            where: {
              status,
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manga = await Manga.findAll({
            where: {
              status,
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhua = await Manhua.findAll({
            where: {
              status,
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const manhwa = await Manhwa.findAll({
            where: {
              status,
              demography,
              genres: {
                [Op.contains]: [genres],
              },
            },
          });
          const result = anime.concat(manga, manhua, manhwa);
          res.json(result);
        }
      }
      break;
  }
};

export const filterTitle = async (req, res) => {
  const { title } = req.query;
  const anime = await Anime.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });
  const manga = await Manga.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });
  const manhua = await Manhua.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });
  const manhwa = await Manhwa.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`,
      },
    },
  });
  const result = anime.concat(manga, manhua, manhwa);
  res.json(result);
};
