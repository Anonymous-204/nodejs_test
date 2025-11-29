const path = require('path');
const express = require('express')
const hbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources','views'));
console.log('Path:', path.join(__dirname, 'resources','views'));

app.get('/', (req, res) => {res.render('home');})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
