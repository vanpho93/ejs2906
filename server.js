const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    filename: (req, file, cb) => cb(null, Date.now() + '.png')
});

const upload = multer({ storage }).single('avatar');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/upload', (req, res) => res.render('upload'));

app.post('/upload', upload, (req, res) => {
    res.send('Da nhan file ' + req.file.originalname);
});

app.listen(3000, () => console.log('Server is running'));