const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img');
  },
  filename: function (req, file, cb) {
    const filename = file.originalname.toLowerCase();
    cb(null, Date.now() + '-' + filename.replace(/ /g, ''));
  }
});
// var upload = multer({ dest: 'uploads/' })
const upload = multer({
  storage: storage
});

module.exports = upload;
