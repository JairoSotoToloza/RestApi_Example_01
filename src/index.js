const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', 3000);	 // establecer el numero de puerto siendo este el 3000.

// Middlewares
app.use(morgan('dev')); // permite ver por consola lo que va llegando al servidor y su formato visual siendo 'dev'.
app.use(express.urlencoded({extended: false})); // entender los datos provenientes de los formularios, tales como inputs.
app.use(express.json());

// Starting the server
app.listen(app.get('port'), () => { // utilizamos la variable del puerto, 'port' = 3000
    console.log(`Server on port ${app.get('port')}`);

});
