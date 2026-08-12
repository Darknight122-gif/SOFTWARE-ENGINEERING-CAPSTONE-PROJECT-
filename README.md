# Book Library API

A simple REST API for managing a book collection, built with Node.js and Express. Data is stored in memory (a JavaScript array) — no database required.

## Endpoints

| Method | Endpoint  | Description                |
|--------|-----------|------------------------------|
| GET    | `/books`  | Returns the list of books    |
| POST   | `/books`  | Adds a new book               |

### POST body example
```json
{
  "title": "Things Fall Apart",
  "author": "Chinua Achebe"
}
```

### POST response example
```json
{
  "message": "Book added successfully.",
  "data": {
    "id": 1,
    "title": "Things Fall Apart",
    "author": "Chinua Achebe"
  }
}
```

## Setup Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd book-library-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the server**
   ```bash
   npm start
   ```
   The API will run at `http://localhost:3000`.

4. **Test the endpoints**

   Using curl:
   ```bash
   # Get all books
   curl http://localhost:3000/books

   # Add a new book
   curl -X POST http://localhost:3000/books \
     -H "Content-Type: application/json" \
     -d '{"title": "Things Fall Apart", "author": "Chinua Achebe"}'
   ```

   Or use Postman / Insomnia / Thunder Client:
   - `GET http://localhost:3000/books`
   - `POST http://localhost:3000/books` with a JSON body as shown above

## Screenshots

> Add screenshots here after testing on your machine — e.g. a Postman screenshot of the GET request showing the returned array, and a POST request showing the 201 response with the new book.

- `screenshots/get-books.png`
- `screenshots/post-books.png`

## Notes
- Data resets every time the server restarts (in-memory storage only, no database).
- Both `title` and `author` are required fields; the API returns a `400` error if either is missing.
