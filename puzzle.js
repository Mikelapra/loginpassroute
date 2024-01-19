// Snippets de código para poder componer el programa

//Usado?: YES
  const middlewares = require('./middlewares');
//--- Explicación: 
// Requerimos lo que se exporta del /middleware en app. Lo muevo a app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:
// Requerir body-parses. Copiar en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const express = require('express');
//--- Explicación:
// Requerimos express. Copiar a app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const bodyParser = require('body-parser');
//--- Explicación:
// Requerir body-parses. Copiar en app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const session = require('express-session');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const middlewares = require('./middlewares');
//--- Explicación:
// Requerimos lo que se exporta del /middleware en routes. Lo muevo a routes.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const routes = require('./routes');
//--- Explicación:
// Requerimos lo que se exporta del /middleware en routes. Lo muevo a routes.js
// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
const app = express();
//--- Explicación:
// Llamar a la funcion express. Lo copio app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const PORT = 4000;
//--- Explicación:
// Es el puerto que vamos a utilizar 

// -------------------------------------------------------------------------------------

//Usado?: YES
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?: YES
middlewares.setupApp(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
routes.setup(app);
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
// Si acierta la palabra porseguirá (next()) si no redirecciona a error. Lo copiamos en app.js
// -------------------------------------------------------------------------------------


//Usado?: YES
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: 
//Booleano para acceder a la profile tras poner la palabra correcta. Lo copiamos a app.js

// -------------------------------------------------------------------------------------


//Usado?: YES
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">iar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: 
//
// Pintar HTML. Lo copiamos en routes.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--- Explicación: 
/////////////////////////POR HACER/////////////////////
// -------------------------------------------------------------------------------------

//Usado?: YES
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//
// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?:YES
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
// Para que el servidor escuche lo que estamos haciendo. Lo muevo app.js
// -------------------------------------------------------------------------------------

//Usado?: YES
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
// Condicional para verificar la palabra secreta. Lo copiamos en middleware.js
// -------------------------------------------------------------------------------------


//Usado?: YES
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 

// -------------------------------------------------------------------------------------


//Usado?: YES
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  setup,
};
//--- Explicación:
// Exportamos objeto con setup dentro de routes. Lo copiamos en routes.js
// -------------------------------------------------------------------------------------

//Usado?: YES
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
// Exportamos objeto con validarPalabraMiddleware,verificarSesionMiddleware, setupAPP dentro de middleware.js. Lo copiamos en middleware.js
// -------------------------------------------------------------------------------------

