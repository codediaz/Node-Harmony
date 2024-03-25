class AddTodoController {
    constructor({ addTodoService }) {
      this.addTodoService = addTodoService;
    }
  
    async addTodo(req, res, next) {
      try {
        const newTodo = await this.addTodoService.add(req.body);
        res.status(201).json(newTodo);
      } catch (error) {
        next(error);
      }
    }
  }
  
  module.exports = AddTodoController;
  