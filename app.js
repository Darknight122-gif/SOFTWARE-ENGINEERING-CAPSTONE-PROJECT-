const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory data store
let books = [];

// GET /books -> return list of books
app.get('/books', (req, res) => {
  res.status(200).json({
    count: books.length,
    data: books
  });
});

// POST /books -> add a book
app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({
      error: 'Both "title" and "author" are required.'
    });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);

  res.status(201).json({
    message: 'Book added successfully.',
    data: newBook
  });
});

// Fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.listen(PORT, () => {
  console.log(`Book Library API running on http://localhost:${PORT}`);
});
