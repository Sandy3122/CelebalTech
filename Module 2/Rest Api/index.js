const express = require("express");
const app = express(); //Created Instance with app

app.use(express.json());


//Data Storage Variable
let BooksData = [];

//GET Request to get all the Data from Database
app.get("/", (req, res) => {
  res.json(BooksData);
});

//GET Request to get specific Data from Database
app.get("/books/:id", (req, res) => {
  try {
    const bookId = req.params.id;
    const book = BooksData.find((book) => book.id === bookId);

    book ? res.json(book) : res.status(404).json({ message: 'Book not found' });
    // if (book) {
    //   res.json(book);
    // } else {
    //   res.status(404).json({
    //     message: "Book not found",
    //   });
    // }
    
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

//Post The Data
app.post("/books", (req, res) => {
  try {
    const { id, Booktitle, author, price } = req.body;

    if (!id || !Booktitle || !author || !price) {
      res.status(400).json({
        message: "Please Provide all the required fields",
      });
      return;
    }
    const newBook = {
      id,
      Booktitle,
      author,
      price,
    };
    BooksData.push(newBook);

    res.status(201).json({
      message: "Book Created Successfully",
      book: newBook,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
                                                                               
// PUT update a book
app.put("/books/:id", (req, res) => {
  try {
    const bookId = req.params.id;
    const { Booktitle, author, price } = req.body;

    const bookIndex = BooksData.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
      BooksData[bookIndex].Booktitle =
        Booktitle || BooksData[bookIndex].Booktitle;
      BooksData[bookIndex].author = author || BooksData[bookIndex].author;
      BooksData[bookIndex].price = price || BooksData[bookIndex].price;
      res.json({
        message: "Book updated successfully",
        book: BooksData[bookIndex],
      });
    } else {
      res.status(404).json({
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

port = 4000;
app.listen(port, () => {
  console.log(`Server is running successfully, http://localhost:${port}`);
});
