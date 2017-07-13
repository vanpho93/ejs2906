const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('home', { name: 'Pho' }));

app.get('/admin', (req, res) => res.render('admin', { isAdmin: false }));

const arrSubjects = ['Node', 'React', 'PHP'];

app.get('/list', (req, res) => res.render('list', { mang: arrSubjects }));

app.get('/emps', (req, res) => res.render('emps', { mang: arrEmp }));

app.listen(3000, () => console.log('Server started!'));

//ejs
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const arrEmp = [
    new Employee('Ti', 10),
    new Employee('Teo', 20),
    new Employee('Tun', 30)
];