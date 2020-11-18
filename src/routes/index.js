const { Router } = require('express'); // desde express requiere el metodo Router para las rutas.
const router = Router(); // ejecuta el metodo Router para crear nuevas rutas del servidor.

router.get('/', (req, res) => {
    res.json({"Title": "Hello World"}); // Devuelve un objeto json
});

module.exports = router;
