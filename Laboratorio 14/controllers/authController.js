exports.getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;
  // simple check
  if (username === 'admin' && password === 'password') {
    req.session.username = username;
    req.flash('success', 'Has iniciado sesión correctamente!');
    res.cookie('lastLogin', new Date().toISOString(), { httpOnly: true });
    return res.redirect('/dashboard');
  }
  req.flash('error', 'Usuario o contraseña incorrectos');
  res.redirect('/login');
};

exports.getDashboard = (req, res) => {
  if (!req.session.username) {
    req.flash('error', 'Debes iniciar sesión primero');
    return res.redirect('/login');
  }
  const lastLogin = req.cookies.lastLogin;
  res.render('dashboard', { title: 'Dashboard', lastLogin });
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    res.clearCookie('lastLogin');
    res.redirect('/login');
  });
};