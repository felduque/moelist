import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://postgres:sY99wFUv2*t3rQ@127.0.0.1:5432/postgres",
  {
    logging: true,
  }
);

export default sequelize;
