import express from "express";
import usercontroller from "../controllers/usersController.js";
const router = express.Router();

router.get("/users", usercontroller.index);

router.get("/user/:id", usercontroller.show);

router.post("/user", usercontroller.store);

router.put("/user/:id", usercontroller.update);

router.delete("/user/:id", usercontroller.delete);

export default router;
