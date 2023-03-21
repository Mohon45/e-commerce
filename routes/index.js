const express = require("express");
const router = express.Router();
const authRoutes = require("./auth.route");

//school admin route
// const branchRoutes = require("./schoolAdminRoutes/branchRoutes");

let rootRouter = router;

rootRouter.use(authRoutes);
module.exports = rootRouter;
