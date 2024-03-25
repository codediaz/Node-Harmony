const express = require('express');
const { scopePerRequest } = require('awilix-express');
const container = require('../providers/container');
const addTodoRoutes = require('./features/addTodo/routes');


const app = express();

// Parsear el cuerpo de las peticiones
app.use(express.json());

// Hace disponible el contenedor para cada request
app.use(scopePerRequest(container));

// Montar rutas
app.use('/api', addTodoRoutes);

// Definir rutas (Puedes crear archivos de rutas separados para cada feature)
// Por ahora, vamos a definir una ruta de ejemplo directamente aquí
app.get('/api/todos', (req, res) => {
  // Aquí, normalmente invocarías métodos en tus controladores
  res.send('List of todos');
});

// Rutas para agregar, eliminar y ver todos pueden ser añadidas aquí

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
