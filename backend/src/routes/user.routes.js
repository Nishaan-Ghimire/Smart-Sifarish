import { Router } from "express";
import {
  uploadCitizenship,
  uploadProfile,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.post("/upload", upload.single("profile"), uploadProfile);

router.post(
  "/citizenship",
  upload.fields([
    { name: "front", maxCount: 1 },
    { name: "back", maxCount: 1 },
  ]),
  uploadCitizenship
);

export default router;
