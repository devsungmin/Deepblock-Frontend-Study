const express = require('express');
const app = express();
const multer = require('multer');

app.use('/uploadImg', express.static('upload'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        console.log(file)
        const fileName = "ㅇㅅㅇ" + req.params.id + ".jpg";
        cb(null, fileName);
    }
});

const upload = multer({
    storage: storage
}).single('myfile');

app.post('/upload/:id', (req, res) => {
    upload(req, res, err => {
        if (err) console.log(err);
    });
})
app.listen(12000, () => {
    console.log("서버시작 - 12000포트");
})