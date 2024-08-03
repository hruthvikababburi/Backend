const db = require('../models/db');

exports.createTodo = (req, res) => {
  const { description, status } = req.body;
  const userId = req.user.id;

  const sql = 'INSERT INTO todos (user_id, description, status) VALUES (?, ?, ?)';
  db.run(sql, [userId, description, status], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to create todo', error: err.message });
    }
    res.status(201).json({ message: 'Todo created successfully', todoId: this.lastID });
  });
};

exports.getTodos = (req, res) => {
  const userId = req.user.id;

  const sql = 'SELECT * FROM todos WHERE user_id = ?';
  db.all(sql, [userId], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to fetch todos', error: err.message });
    }
    res.json(rows);
  });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { description, status } = req.body;

  const sql = 'UPDATE todos SET description = ?, status = ? WHERE id = ? AND user_id = ?';
  db.run(sql, [description, status, id, req.user.id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to update todo', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo updated successfully' });
  });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM todos WHERE id = ? AND user_id = ?';
  db.run(sql, [id, req.user.id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Failed to delete todo', error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json({ message: 'Todo deleted successfully' });
  });
};
