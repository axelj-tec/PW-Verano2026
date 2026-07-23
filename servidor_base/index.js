const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const PORT = 3000;

let peliculas = [
	{
		id: 1,
		titulo: "Interestelar",
		director: 'Christopher Nolan',
		año: 2014
	},
	{
		id: 2,
		titulo: "Titanic",
		director: 'James Cameron',
		año: 1997
	},
]

let idActual = peliculas.length + 1;

app.get('/peliculas', (req, res) => {
	res.json(peliculas)
})

app.get('/peliculas/:id', (req, res) => {
	const id = Number(req.params.id)
	const pelicula = peliculas.find(pelicula => pelicula.id == id);

	if (!pelicula) return res.status(404).json({mensaje: "Pelicula no encontrada"});

	const indice = peliculas.findIndex(pelicula => pelicula.id == id)
	res.json(pelicula)
})

app.post('/peliculas', (req, res) => {
	const {titulo, director, año } = req.body;
	if (!titulo || !director || !año) {
		return res.status(400).json({mensaje: "Faltan datos de la película"})
	}
	const nuevaPelicula = {
		id: idActual++,
		titulo,
		director,
		año: Number(año)
	}

	peliculas.push(nuevaPelicula)

	res.status(201).json({mensaje: "Película registrada correctamente", pelicula: nuevaPelicula})
})

app.put('/peliculas/:id', (req, res) => {
	const id = Number(req.params.id)
	const {titulo, director, año } = req.body;

	const indice = peliculas.findIndex(pelicula => pelicula.id == id)

	if (indice == -1)
		return res.status(404).json({mensaje: "Pelicula no encontrada"})

	peliculas[indice] = {
		id: id,
		titulo,
		director,
		año: Number(año)
	}

	res.json(pelicula)
})

app.delete('/peliculas/:id', (req, res) => {
	const id = Number(req.params.id)

	const indice = peliculas.findIndex(pelicula => pelicula.id == id)

	if (indice == -1)
		return res.status(404).json({mensaje: "Pelicula no encontrada"})

	const peliculaEliminada = peliculas[indice]

	peliculas.splice(indice, 1);

	res.json({
		mensaje: "Pelicula eliminada correctamente",
		pelicula: peliculaEliminada
	})
})

app.get('/', (req, res) => {
  res.send('Bienvenido a mi primer servidor con express');
});


app.get('/dashboard/', (req, res) => {
  res.send('Dashboard');
});
app.get('/pagina/', (req, res) => {
  res.send(`
            <style>
                h1 { color: red; }
            </style>
            <h1>Mi pagina</h1>
            <p>Creada con Express</p>
        `);
});
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;

  res.send(`
            <h1>Hola ${nombre}<h1>
        `);
});

app.get('/par/:numero', (req, res) => {
  const num = req.params.numero;
	if (isNaN(num)) {
		res.send('Ingresa un numero válido')
		return;
	}
  res.send(`${num} es un número ${num % 2 == 0 ? 'par' : 'impar'}`);
});

app.get('/edad/:edad', (req, res) => {
  const edad = req.params.edad;
	if (isNaN(edad)) {
		res.send('Ingresa un numero válido')
		return;
	}
  res.send(`Eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`);
});

app.get('/calculadora/:operacion/:a/:b', (req, res) => {
  const opc = req.params.operacion;
  const a = Number(req.params.a);
  const b = Number(req.params.b);
	if (isNaN(a)) {
		res.send('Ingresa un numero válido')
		return;
	}
	if (isNaN(b)) {
		res.send('Ingresa un numero válido')
		return;
	}
  let re;
  switch (opc) {
    case 'suma':
      re = a + b;
      break;
    case 'resta':
      re = a - b;
      break;
    case 'multiplicación':
      re = a * b;
      break;
    case 'división':
      re = a / b;
      break;
    default:
      break;
  }
  if (re) {
		res.send(`Resultado: ${re}`);
	} else {
		res.send(`Ocurrio un error, intente nuevamente`);
  }
});

app.get('/tabla/:numero', (req, res) => {
  let num = Number(req.params.numero);
	if (isNaN(num)) {
		res.send('Ingresa un numero válido')
		return;
	}
  let salida = 'Tabla del ' + num;
  salida += '<ul>';
  for (let i = 1; i <= 10; i++) {
    salida += `<li>${num} x ${i} = ${num * i}</li>`;
  }
  salida += '</ul>';
  res.send(salida);
});

app.get('/calificacion/:nota', (req, res) => {
    let nota = Number(req.params.nota);

    if (isNaN(nota)) {
			res.send('Ingresa un numero válido')
			return;
    }

    res.send(nota < 70 ? 'Reprobado' : nota < 80 ? 'Aprobado' : nota < 90 ? 'Muy bien' : 'Excelente')
})

app.listen(PORT, () => {
  console.log('Servidor iniciado en http://localhost:' + PORT);
});
