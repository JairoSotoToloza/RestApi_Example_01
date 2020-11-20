const { Router } = require('express')
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/', (req, res) => {
   res.json(movies); 
});

router.post('/', (req, res) => {
  const { title, director, year, rating } = req.body; // recibimos la data a traves de un objeto req.body
  // (title && director && year && rating) ? res.json('saved') : res.send('wrong answer') // el ternario va sin ;
  if (title && director && year && rating) {
    const id = movies.length + 1;
    const newMovie = {id, ...req.body}; // Inserta un nuevo objeto movie con todos sus campos concatenado con id autoincremental comenzando desde 2n+1
    movies.push(newMovie); // Guardamos la nueva pelicula en el arreglo de peliculas.
    res.json(movies); // Enviamos al cliente las peliculas actualizadas.
  } else {
    res.send('wrong answer');
  } 
  
});


module.exports = router;
