import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";

export const Manhua = sequelize.define("manhuas", {
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
  source: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  chapters: {
    type: DataTypes.INTEGER,
  },
  volumes: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  genres: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  authors: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  artists: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  score: {
    type: DataTypes.INTEGER,
  },
  popularity: {
    type: DataTypes.INTEGER,
  },
  day: {
    type: DataTypes.STRING,
  },
  scans: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
});
