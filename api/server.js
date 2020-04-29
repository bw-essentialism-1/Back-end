const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const essentialsRouter = require("../essentials/essentials-router.js");
const projectsRouter = require("../projects/projects-router.js");
const missionRouter = require("../mission/mission-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/essentials", authenticate, essentialsRouter);
server.use("/api/projects", authenticate, projectsRouter);
server.use("/api/mission", authenticate, missionRouter);

module.exports = server;
