import express from "express";
import bodyParser from "body-parser";
// import cors from 'cors';
import morgan from "morgan";
import animeroutes from "./routes/Anime/anime.routes.js";
import mangaroutes from "./routes/Manga/manga.routes.js";
import manhuaroutes from "./routes/Manhua/manhua.routes.js";
import manhwaroutes from "./routes/Manhwa/manhwas.routes.js";
import scans from "./routes/Scan/scan.routes.js";
import users from "./routes/User/user.routes.js";

// Models
import { Scan } from "./models/Scan/scan.model.js";
import { Anime } from "./models/Anime/anime.model.js";
import { Manga } from "./models/Manga/manga.model.js";
import { Manhua } from "./models/Manhua/manhua.model.js";
import { Manhwa } from "./models/Manhwa/manhwa.model.js";
import fileUpload from "express-fileupload";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from "path";

// IMPORT DOTEENV
import dotenv from "dotenv";
dotenv.config();

const app = express();

// relations
// relaciones de muchos a muchos
Anime.belongsToMany(Scan, { foreignKey: "anime_scan", through: "anime_scan" });
Scan.belongsToMany(Anime, { foreignKey: "anime_scan", through: "anime_scan" });

Manga.belongsToMany(Scan, { foreignKey: "manga_scan", through: "manga_scan" });
Scan.belongsToMany(Manga, { foreignKey: "manga_scan", through: "manga_scan" });

Manhua.belongsToMany(Scan, {
  foreignKey: "manhua_scan",
  through: "manhua_scan",
});
Scan.belongsToMany(Manhua, {
  foreignKey: "manhua_scan",
  through: "manhua_scan",
});

Manhwa.belongsToMany(Scan, {
  foreignKey: "manhwa_scan",
  through: "manhwa_scan",
});
Scan.belongsToMany(Manhwa, {
  foreignKey: "manhwa_scan",
  through: "manhwa_scan",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(animeroutes);
app.use(mangaroutes);
app.use(manhuaroutes);
app.use(users);
app.use(manhwaroutes);
app.use(scans);

export default app;
