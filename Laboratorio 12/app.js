const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages');
const formRouter = require('./routes/form');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', pagesRouter);
app.use('/', formRouter);

app.use((req, res) => {
  res.status(404).render('404', { title: 'Página No Encontrada' });
});

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
