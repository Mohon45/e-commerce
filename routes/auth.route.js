const { Router } = require("express");
const router = Router();

const authController = require("../controllers/auth.controller");

/* GET users listing. */
router.post("/signup", authController.signUp);
router.post("/signin", authController.signIn);
router.get("/", authController.getAllUsers);
router.get("/:id", authController.getSingleUser);
router.patch("/update/:id", authController.updateUser);
router.post("/delete/:id", authController.deleteUser);

module.exports = router;
