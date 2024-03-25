class AddTodoService {
  async add(todoData) {
    // Lógica para agregar la tarea
    // Como es un ejemplo simple, solo vamos a simular la adición
    return { id: Date.now(), ...todoData };
  }
}

module.exports = AddTodoService;
