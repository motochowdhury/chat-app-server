// External imports
const multer = require("multer");

function uploader(subFolder_path, allowed_file_type, max_file_size, errMsg) {
  // make upload folder
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subFolder_path}/`;

  // Define Storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const filename =
        file.originalname
          .replace(fileExt, "")
          .toLocaleLowerCase()
          .split("")
          .join("_") +
        "_" +
        Date.now();

      cb(null, filename + fileExt);
    },
  });

  //   prepare the final upload multer object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_type.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(errMsg));
      }
    },
  });

  return upload;
}
