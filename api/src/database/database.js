import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://vuttrckd:tCWEpi4n8jxHPxJ-QUy8TMTp4dHQy_SC@drona.db.elephantsql.com/vuttrckd",
  {
    logging: true,
  }
);

export default sequelize;
