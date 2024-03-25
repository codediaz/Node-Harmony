const { addTodoDAL } = require('./addTodoDAL');

class AddTodoService {
  async add(todoData) {
    // Logic to add the todo, e.g., validate data, then call the DAL method
    const createdTodo = await addTodoDAL.add(todoData);
    return createdTodo;
  }
}

module.exports = new AddTodoService();
