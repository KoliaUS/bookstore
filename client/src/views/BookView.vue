<script>
import PreviewBook from "../components/PreviewBook.vue";

export default {
  components: {PreviewBook},
  data() {
    return {
      books:[
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
      ]
    }
  }
}
</script>

<template>
  <div class="row">
    <div class="col-3 pt-4 ps-4" v-for="book in books">
      <PreviewBook :id="book.id" :author="book.author" :book_name="book.book_name" :description="book.description" :image="book.image"></PreviewBook>
    </div>
  </div>
</template>