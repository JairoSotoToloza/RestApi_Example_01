const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3000); // establecer el numero de puerto siendo otorgado por el servicio en la nube, de no ser así que sea el 3000
app.set('json spaces', 2);

// Middlewares
app.use(morgan('dev')); // permite ver por consola lo que va llegando al servidor y su formato visual siendo 'dev'.
app.use(express.urlencoded({extended: false})); // entender los datos provenientes de los formularios, tales como inputs.
app.use(express.json()); // metodo que permite al server entender formatos json.

// Routes
app.use(require('./routes/index')); // Utiliza desde la carpeta Routes el archivo index.js
app.use('/api/movies',require('./routes/movies'));

// Starting the server
app.listen(app.get('port'), () => { // utilizamos la variable del puerto, 'port' = 3000
    console.log(`Server on port ${app.get('port')}`);

});
