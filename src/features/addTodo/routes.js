const { Router } = require('express');
const { makeInvoker } = require('awilix-express');
const AddTodoController = require('./addTodoController');

const router = Router();
const api = makeInvoker(AddTodoController);

router.post('/todos', api('addTodo'));

module.exports = router;
