import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";

export const Anime = sequelize.define(
  "animes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    episodes: {
      type: DataTypes.INTEGER,
    },
    day: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    premiered: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
    genres: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    studios: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    producers: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    demography: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    popularity: {
      type: DataTypes.INTEGER,
    },
    members: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    author: {
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
    },
    favorites: {
      type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.STRING,
    },
    trailer: {
      type: DataTypes.TEXT,
    },
    opening: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
