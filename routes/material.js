const express = require('express');
const router = express.Router();
const multer = require('multer');
const Book = require('../models/book');
const Material = require('../models/material');

router.post('/',async (req, res) => {
    try {
      let text = '';
      let filepath = '';
      let book='';
      //console.log(' uppper req  ',req);

      const xyz = await Material.uploadedMaterial(
        req,
        res,
        async function (err) {
          if (err) {
            console.log('****Multer err', err);
          }
          console.log(' req   ', req.body);
          text = req.body.text;
          book=req.body.book;
          console.log('---------->>', req.file);

          if (req.file) {
            // console.log("REQ FILE ------>>>>" , req.file) ;
            filepath = req.file.filename;
            // console.log('_____________>', filepath);;
          }

          //console.log(' file path : ', filepath);
          //console.log(' text  ', text);

          try {
            const newMaterial = new Material({
              text: text,
              material: filepath,
              book:book
            });

            await newMaterial.save();
          } catch (err) {
            console.error('@#$%^&*^%$#', err.message);
            res.status(500).send('Server error');
          }
        }
      );

      //console.log('xyz->>>>>', xyz);
      //  console.log('material->>>>>', filepath);

      res.json('success');
    } catch (err) {
      console.error('@#$%^&*^%$#', err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/:id', async (req, res) => {
  try {
    const bookid = req.params.id;
    const book = await Book.find({ _id: bookid });
    if (!book) {
      return res.json('No Book Found!');
    }

    const materialArray = await Material.findOne({ book: bookid });

    console.log('backend material array ---->.>', materialArray);

    res.json(materialArray);
  } catch (err) {
    console.error('@#$%^&*^%$#', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
