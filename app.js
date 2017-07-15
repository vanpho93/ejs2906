const express = require('express');

const app = express();

//Middleware: 1 function co 3 tham so la req, res, next

//app.use

//truyen vao giua rout name va hanlde function

// app.use((req, res, next) => {
//     // res.send('Bi chan lai');
//     req.user = 'PHO';
//     res.send('Chao');
//     next();
// });

app.listen(3000, () => console.log('Server started'));

app.get('/', (req, res) => res.send(x));

app.get('/', (req, res) => res.send('Hi'));

app.get('/show/:name', (req, res, next) => {
    if (req.params.name !== 'pho') return  res.send('AAA');
    next();
});

app.get('/show/pho', (req, res) => res.send('PHO'));

app.get('/aaa', (req, res, next) => {
    req.txtName = 'PHO';
    next();
}, (req, res) => res.send(req.txtName));

app.use((err, req, res, next) => {
    res.send('LOI');
});
