const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = 3000;

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'c0d1g0_s3cr3t0_3n_lab14',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// make flash and user available in all views
app.use((req, res, next) => {
  res.locals.error_msg = req.flash('error');
  res.locals.success_msg = req.flash('success');
  res.locals.username = req.session.username;
  next();
});

// routes
app.use('/', authRoutes);

// catch-all 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Not Found' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));