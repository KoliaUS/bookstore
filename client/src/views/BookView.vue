<script>
import PreviewBook from "../components/PreviewBook.vue";
import Book from "../components/Book.vue";

export default {
  components: {PreviewBook, Book},
  data() {
    return {
      books: []
    }
  },
  async created() {
    const res = await fetch('http://localhost:3000/books', {method: 'GET'});
    console.log(res);
    this.books = await res.json();
  },
  methods: {
    async deletebook(id) {
      try {
        const result = confirm("Want to delete?");
        if (result) {
          const res = await fetch(`http://localhost:3000/books/${id}`, {method: 'DELETE'});
          alert("Deleted!");
          window.location.assign("http://localhost:3001");
          return res.json();
        }
        else{
          alert("Nothing was deleted!");
          window.location.assign("http://localhost:3001");
        }
      } catch (e) {
        alert(e);
      }
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