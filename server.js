const express = require("express");
const { readMetadata } = require("imagemagick");
const im = require("imagemagick");
const path = require("path");
const app = express();
const port = 4000;
const sharp = require("sharp");

const imgPath = path.join(__dirname, "public/320.png");
console.log(imgPath);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// im.identify(imgPath, function (err, features) {
//   if (err) throw err;
//   console.log({
//     format: features.format,
//     width: features.width,
//     height: features.height,
//   });
// });

// im.convert(
//   [
//     imgPath,
//     "-crop",
//     "300x300",
//     path.join(__dirname, "public/kittens-small.jpg"),
//   ],
//   function (err, stdout) {
//     if (err) throw err;
//     console.log("stdout:", stdout);
//   }
// );

// im.crop(
//   {
//     srcPath: imgPath,
//     dstPath: path.join(__dirname, "public/cropped.jpg"),
//     width: 300,
//     height: 300,
//     quality: 1,
//     gravity: "East",
//   },
//   function (err, stdout, stderr) {
//     // foo
//   }
// );

// original image
let originalImage = imgPath;

// file name for cropped image
let outputImage = "croppedImage.jpg";

sharp(originalImage)
  .extract({ width: 300, height: 300, left: 60, top: 100 })
  .toFile(outputImage)
  .then(function (new_file_info) {
    console.log("Image cropped and saved");
  })
  .catch(function (err) {
    console.log("An error occured");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
