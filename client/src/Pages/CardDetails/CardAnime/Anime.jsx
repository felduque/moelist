import style from "./Anime.module.css";
import { getAnimeById } from "../../../Api/Anime/anime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const Anime = () => {
  const [animes, setAnimes] = useState([]);
  const [scans, setScans] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchAnimes = async () => {
      const animes = await getAnimeById(id);
      setAnimes(animes?.data?.anime);
      setScans(animes?.data?.scans);
    };
    fetchAnimes();
  }, []);

  return (
    <div className={`container-fluid ${style.bg_card}`}>
      <div className={`row pt-5 ${style.content_sinopsis_and_banner}`}>
        <div className="col-12 col-xl-3 text-center">
          <img
            className={style.content_primary_card__img}
            src={animes?.image}
            alt={animes?.title}
          />
        </div>
        <div className="col-12 col-xl-9">
          <div className={style.title_card_content}>
            <h1 className={style.content_card__title}>{animes?.title}</h1>
          </div>
          <h2 className={style.content_sinopsis__title}>Sinopsis</h2>
          <p className={style.content_sinopsis__text}>{animes?.description}</p>
          <div className={style.content_title_genres}>
            <h2 className={style.content_genre_title}>Generos</h2>
          </div>

          <div className={style.content_sinopsis__generos}>
            {animes?.genres?.map((genre, index) => (
              <li key={index} className={style.content_sinopsis__generos__item}>
                {genre}
              </li>
            ))}
          </div>
        </div>
      </div>
      <div className="row mx-3 py-5">
        <div className="col-12 col-lg-3">
          <div className={style.content_primary_card__info}>
            <div className={style.content_primary_card__info__title}>
              <h2 className={style.content_primary_card__info__title__text}>
                Información
              </h2>
            </div>
            <div className={style.content_primary_card__info__content}>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Tipo
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.type}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Episodios
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.episodes}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Source
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.source}
                </p>
              </div>

              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estado
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.status}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estreno
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.premiered}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Duración
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.duration}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Demografia
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.demography}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Temporada
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.season}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Estudio
                </h3>
                {animes?.studios?.map((studio, index) => (
                  <p
                    className={
                      style.content_primary_card__info__content__item__text
                    }
                    key={index}
                  >
                    {studio}
                  </p>
                ))}
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Autor
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.author}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Artista
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {animes?.artist}
                </p>
              </div>
              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Producido
                </h3>
                {animes?.producers?.map((item, index) => (
                  <p
                    className={
                      style.content_primary_card__info__content__item__text
                    }
                    key={index}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 mt-5  mt-lg-0">
          <div className={`row position-sticky ${style.scan_list}`}>
            <div className={style.title_scans_list}>
              Disfruta de todo el contenido en las siguientes paginas
            </div>
            {scans?.map((scan, index) => (
              <div className="col-12 col-md-6 col-xl-4" key={index}>
                <a href={animes?.urlContent} target="_blank">
                  <div className={style.content_afiliates_logos}>
                    <img
                      className={style.afiliate_logo}
                      src={scan?.image}
                      alt={scan?.name}
                    />

                    <h3 className="text-white text-center">{scan?.name}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={style.content_primary_card__info_all_content}></div>
      </div>
    </div>
  );
};
