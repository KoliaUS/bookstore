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
    <div class="col-3 pt-4 ps-4" v-for="book in books" :key="book.id">
      <div class="card" style="width: 18rem;">
        <img :src = "book.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{book.book_name}}</h5>
          <p class="card-subtitle">{{book.author}}</p>
          <router-link :to="`/book/${book.id}`" class="btn btn-primary">
            Číst dále
          </router-link>
          <router-link :to="`/edit_book/${book.id}`" class="btn btn-warning">
            Edit
          </router-link>
          <button @click="deletebook(book.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>