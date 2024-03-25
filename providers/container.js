const { createContainer, asClass, asValue, asFunction } = require('awilix');

const container = createContainer();

// Aquí podrías requerir tus controladores y servicios
const AddTodoController = require('../src/features/addTodo/addTodoController');
const AddTodoService = require('../src/features/addTodo/addTodoService');

container.register({
  // Registra tus controladores y servicios como clases
  addTodoController: asClass(AddTodoController).scoped(),
  addTodoService: asClass(AddTodoService).scoped()
});

module.exports = container;
