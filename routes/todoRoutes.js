const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todosController');
const authenticateToken = require('../middleware/authenticateToken');

router.post('/', authenticateToken, todoController.createTodo);
router.get('/', authenticateToken, todoController.getTodos);
router.put('/:id', authenticateToken, todoController.updateTodo);
router.delete('/:id', authenticateToken, todoController.deleteTodo);

module.exports = router;
