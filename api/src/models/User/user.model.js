import { DataTypes } from "sequelize";
import sequelize from "../../database/database.js";

export const User = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "User",
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Picture.png",
    },
  },
  {
    timestamps: false,
  }
);
