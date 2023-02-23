import React, { useEffect, useState } from "react";
import style from "./Manga.module.css";
import { useParams } from "react-router-dom";
import { getMangasById } from "../../../Api/Mangas/mangas";
export const Manga = () => {
  const [mangas, setMangas] = useState([]);
  const [scans, setScans] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchMangas = async () => {
      const manga = await getMangasById(id);
      setMangas(manga?.data);
      setScans(manga?.data?.Scan);
    };
    fetchMangas();
  }, []);

  return (
    <div className={`container-fluid ${style.bg_card}`}>
      <div className={`row pt-5 ${style.content_sinopsis_and_banner}`}>
        <div className="col-12 col-xl-3 text-center">
          <img
            className={style.content_primary_card__img}
            src={mangas?.image}
            alt={mangas?.title}
          />
        </div>
        <div className="col-12 col-xl-9">
          <div className={style.content_sinopsis}>
            <div className={style.title_card_content}>
              <h1 className={style.content_card__title}>{mangas?.title}</h1>
            </div>
            <h2 className={style.content_sinopsis__title}>Sinopsis</h2>
            <p className={style.content_sinopsis__text}>
              {mangas?.description}
            </p>
            <div className={style.content_title_genres}>
              <h2 className={style.content_genre_title}>Generos</h2>
            </div>
            <div className={style.content_sinopsis__generos}>
              {mangas?.genres?.map((genre, index) => (
                <li
                  key={index}
                  className={style.content_sinopsis__generos__item}
                >
                  {genre}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.content_sinopsis_and_banner}></div>
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
                  {mangas?.type}
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
                  {mangas?.chapters}
                </p>
              </div>

              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Nuevo Capitulo
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {mangas?.day}
                </p>
              </div>

              <div className={style.content_primary_card__info__content__item}>
                <h3
                  className={
                    style.content_primary_card__info__content__item__title
                  }
                >
                  Volumenes
                </h3>
                <p
                  className={
                    style.content_primary_card__info__content__item__text
                  }
                >
                  {mangas?.volumes}
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
                  {mangas?.status}
                </p>
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
                  {mangas?.authors}
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
                  {mangas?.artists}
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
                  {mangas.demography}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 mt-5  mt-lg-0">
          <div className={`row position-sticky ${style.scan_list}`}>
            <div className={style.title_scans_list}>
              Disfruta de todo el contenido en las siguientes paginas
            </div>

            <div className="col-12 col-md-6 col-xl-4">
              <a href={mangas?.urlContent} target="_blank">
                <div className={style.content_afiliates_logos}>
                  <img
                    className={style.afiliate_logo}
                    src={scans.image}
                    alt={scans?.name}
                  />

                  <h3 className="text-white text-center">{scans?.name}</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={style.content_primary_card__info_all_content}></div>
      </div>
    </div>
  );
};
