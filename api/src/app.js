import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
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
Scan.hasMany(Anime, { foreignKey: "scanId" });
Scan.hasMany(Manga, { foreignKey: "scanId" });
Scan.hasMany(Manhua, { foreignKey: "scanId" });
Scan.hasMany(Manhwa, { foreignKey: "scanId" });

// relaciones de uno a muchos
Anime.belongsTo(Scan, { foreignKey: "scanId" });
Manga.belongsTo(Scan, { foreignKey: "scanId" });
Manhua.belongsTo(Scan, { foreignKey: "scanId" });
Manhwa.belongsTo(Scan, { foreignKey: "scanId" });

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  // Se agrega el x-auth-token para que se pueda enviar el token en el header
  res.header(
    "Access-Control-Allow-Headers",
    "x-auth-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

app.use(animeroutes);
app.use(mangaroutes);
app.use(manhuaroutes);
app.use(users);
app.use(manhwaroutes);
app.use(scans);

export default app;
