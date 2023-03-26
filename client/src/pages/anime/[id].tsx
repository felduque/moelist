import React from "react";
import { useRouter } from "next/router";
import style from "@/styles/CardDetail.module.css";
import { useEffect, useState } from "react";

import moment from "moment";

import { getAnimeById } from "@/utils/api/anime";
import { AuthorBox } from "@/components/Author/AuthorBox";
import { CardTopBar } from "@/components/CardDetail/CardAuthorBar";
import { ContentType, Scan, User } from "@/utils/types";
import Image from "next/image";

const CardAnime = () => {
  const router = useRouter();
  const [anime, setAnime] = useState<ContentType>();
  const [scans, setScans] = useState<Scan>();
  const [author, setAuthor] = useState<User>();
  const id =
    router.query["id"] ||
    router.asPath.match(new RegExp(`[&?]${"id"}=(.*)(&|$)`));

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchAnimes = async () => {
      const animes = await getAnimeById(parseInt(id as string));

      setAnime(animes?.data);
      setScans(animes?.data?.Scan);
      setAuthor(animes?.data?.User);
    };

    fetchAnimes();
  }, [id]);

  return (
    <>
      <CardTopBar />
      <div className={`container-fluid ${style.bg_card}`}>
        <div className={`row pt-5 ${style.content_sinopsis_and_banner}`}>
          <div className="col-12 col-xl-3 text-center text-white">
            <Image
              className={style.content_primary_card__img}
              src={anime?.image!}
              alt={anime?.title!}
              width={440}
              height={440}
            />

            <AuthorBox
              type={anime?.contentType || ""}
              author={author?.userName || ""}
            />
          </div>
          <div className="col-12 col-xl-9">
            <div className={style.title_card_content}>
              <h1 className={style.content_card__title}>{anime?.title}</h1>
            </div>
            <h2 className={style.content_sinopsis__title}>Sinopsis</h2>
            <p className={style.content_sinopsis__text}>{anime?.description}</p>
            <div className={style.content_title_genres}>
              <h2 className={style.content_genre_title}>Generos</h2>
            </div>

            <div className={style.content_sinopsis__generos}>
              {anime?.genres?.map((genre, index) => (
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
        <div className="row mx-3 py-5">
          <div className="col-12 col-lg-3">
            <div className={style.content_primary_card__info}>
              <div className={style.content_primary_card__info__title}>
                <h2 className={style.content_primary_card__info__title__text}>
                  Información
                </h2>
              </div>
              <div className={style.content_primary_card__info__content}>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.type}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.episodes}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.source}
                  </p>
                </div>

                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.status}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {moment(anime?.premiered).format("MM/DD/YY")}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.duration}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.demography}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.season}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
                  <h3
                    className={
                      style.content_primary_card__info__content__item__title
                    }
                  >
                    Estudio
                  </h3>
                  {anime?.studios?.map((studio, index) => (
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
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.author}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
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
                    {anime?.artist}
                  </p>
                </div>
                <div
                  className={style.content_primary_card__info__content__item}
                >
                  <h3
                    className={
                      style.content_primary_card__info__content__item__title
                    }
                  >
                    Producido
                  </h3>
                  {anime?.producers?.map((item, index) => (
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
              <div className="col-12 col-md-6 col-xl-4">
                <a href={anime?.urlContent} target="_blank">
                  <div className={style.content_afiliates_logos}>
                    <Image
                      className={style.afiliate_logo}
                      src={scans?.image!}
                      alt={scans?.name!}
                      width={350}
                      height={260}
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
    </>
  );
};

export default CardAnime;
