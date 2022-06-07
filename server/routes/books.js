var express = require('express');
var router = express.Router();

const books = [
    {
        id:1,
        author:"Karel Capek",
        book_name: "RUR",
        description: "sdsdkadjshdjshdashdasjdhs",
        image: "https://www.knihydobrovsky.cz/thumbs/book-detail/mod_eshop/produkty/r/r-u-r-9788073900625.jpg"
    },
    {
        id:2,
        author:"Josef Capek",
        book_name: "RUR",
        description: "sdsdkadjshdjshdashdasjdhs",
        image: "https://www.knihydobrovsky.cz/thumbs/book-detail/mod_eshop/produkty/r/r-u-r-9788073900625.jpg"
    },
    {
        id:3,
        author:"Josef Capek",
        book_name: "R",
        description: "sdsdkadjshdjshdashdasjdhs",
        image: "https://www.knihydobrovsky.cz/thumbs/book-detail/mod_eshop/produkty/r/r-u-r-9788073900625.jpg"
    },
    {
        id:4,
        author:"Josef Capek",
        book_name: "RfewfwefUR",
        description: "sdsdkadjshdjshdashdasjdhs",
        image: "https://www.knihydobrovsky.cz/thumbs/book-detail/mod_eshop/produkty/r/r-u-r-9788073900625.jpg"
    }
];
router.get("/", function (req, res, next) {
    res.send(books);
});
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    console.debug(req.params);
    if (id) {
        const book = books.find((a) => a.id === Number.parseInt(id));
        res.send(book);
    } else {
        res.send("Not Found");
    }
});
module.exports = router;