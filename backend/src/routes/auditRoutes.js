const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configures multer to save uploaded files to the /uploads directory

const router = express.Router();

router.post('/audit', upload.single('smartContract'), (req, res) => {
  // Process the uploaded file
  res.send('File uploaded and processing started');
});

module.exports = router;
