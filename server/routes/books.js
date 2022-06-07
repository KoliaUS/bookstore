var express = require('express');
var router = express.Router();
var debug = require('debug')('router:books');

const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('books.sqlite', options);

router.get("/", function (req, res, next) {
    const books = db.prepare('SELECT * FROM book').all();
    res.send(books);
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    if (id) {
        const book_get = db.prepare('SELECT * FROM book WHERE id = ?').get(id);
        res.send(book_get);
    } else {
        res.send("Not Found");
    }
});
router.post("/", (req, res) => {
    const body = req.body
    console.log(body);
    const book = {
        book_name: body.book_name,
        author: body.author,
        description: body.description,
        image: body.image
    }
    const book_post = db.prepare('INSERT INTO book (book_name, author, description, image) VALUES (?,?,?,?)');
    book_post.run(...Object.values(book));
    res.send(book);
});
router.patch("/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id;
    if (id) {
        const book = db.prepare('SELECT * FROM book WHERE id = ?').get(id);
        if (book) {
            Object.assign(book, body);
            const book_patch = db.prepare("UPDATE book SET book_name = ?, author = ?, description = ?, image = ? WHERE id = ?");
            book_patch.run(book.book_name, book.author,book.description,book.image,parseInt(id));
            res.sendStatus(200);
        } else {
            res.sendStatus(404)
        }
        res.send(book);
    } else {
        res.sendStatus(404);
    }
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    if (id) {
        db.prepare("DELETE FROM book WHERE id = ?").run(id)
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
})

module.exports = router;