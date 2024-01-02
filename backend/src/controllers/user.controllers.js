import { StatusCodes } from "http-status-codes";

export const uploadProfile = async (req, res) => {
  console.log(req.file);

  return res.status(StatusCodes.CREATED).send({ message: "Image uploaded" });
};

export const uploadCitizenship = async (req, res) => {
  if (!req.files?.front[0]?.path || !req.files?.back[0]?.path) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: "Please provide citizenship front and back image.",
    });
  }
  const citizenshipFront = req.files?.front[0]?.path;
  const citizenshipBack = req.files?.back[0]?.path;

  if (!citizenshipFront || !citizenshipBack) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      error: "Error while uploading with middleware.",
    });
  }

  return res.status(StatusCodes.CREATED).send({
    message: "Successfully uploaded images",
    citizenshipFront,
    citizenshipBack,
  });
};
