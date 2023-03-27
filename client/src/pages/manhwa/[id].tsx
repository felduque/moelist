import React from "react";
import { useRouter } from "next/router";
import style from "@/styles/CardDetail.module.css";
import { useEffect, useState } from "react";

import { AuthorBox } from "@/components/Author/AuthorBox";
import { CardTopBar } from "@/components/CardDetail/CardAuthorBar";
import { ContentType, Scan, User } from "@/utils/types";
import Image from "next/image";
import { getManhwasById } from "@/utils/api/manhwas";

const CardManhwa = () => {
  const [manhwa, setmanhwa] = useState<ContentType>();
  const [scans, setScans] = useState<Scan>();
  const [author, setAuthor] = useState<User>();

  const router = useRouter();
  const id =
    router.query["id"] ||
    router.asPath.match(new RegExp(`[&?]${"id"}=(.*)(&|$)`));

  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchManhwa = async () => {
      const manhwa = await getManhwasById(parseInt(id as string));

      setmanhwa(manhwa?.data);
      setScans(manhwa?.data?.Scan);
      setAuthor(manhwa?.data?.User);
    };

    fetchManhwa();
  }, [id]);
  return (
    <>
      <CardTopBar />
      <div className={`container-fluid ${style.bg_card}`}>
        <div className={`row pt-5 ${style.content_sinopsis_and_banner}`}>
          <div className="col-12 col-xl-3 text-center">
            <Image
              className={style.content_primary_card__img}
              src={manhwa?.image!}
              alt={manhwa?.title!}
              width={440}
              height={440}
            />

            <AuthorBox
              type={manhwa?.contentType || ""}
              author={author?.userName || ""}
            />
          </div>
          <div className="col-12 col-xl-9">
            <div className={style.content_sinopsis}>
              <div className={style.title_card_content}>
                <h1 className={style.content_card__title}>{manhwa?.title}</h1>
              </div>
              <h2 className={style.content_sinopsis__title}>Sinopsis</h2>
              <p className={style.content_sinopsis__text}>
                {manhwa?.description}
              </p>
              <div className={style.content_title_genres}>
                <h2 className={style.content_genre_title}>Generos</h2>
              </div>
              <div className={style.content_sinopsis__generos}>
                {manhwa?.genres?.map((genre, index) => (
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
                    {manhwa?.type}
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
                    {manhwa?.chapters}
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
                    Nuevo Capitulo
                  </h3>
                  <p
                    className={
                      style.content_primary_card__info__content__item__text
                    }
                  >
                    {manhwa?.day}
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
                    Volumenes
                  </h3>
                  <p
                    className={
                      style.content_primary_card__info__content__item__text
                    }
                  >
                    {manhwa?.volumes}
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
                    {manhwa?.status}
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
                    Autor
                  </h3>
                  <p
                    className={
                      style.content_primary_card__info__content__item__text
                    }
                  >
                    {manhwa?.authors}
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
                    {manhwa?.artists}
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
                    {manhwa?.demography}
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
                <a href={manhwa?.urlContent} target="_blank">
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

export default CardManhwa;
