<script>
import Book from "../components/Book.vue";

export default {
  components: {Book},
  data() {
    return {
      books: []
    }
  },
  async created() {
    const res = await fetch('http://localhost:3000/books', {method: 'GET'});
    this.books = await res.json();
  },
  methods: {
    async deletebook(id) {
      try {
        const result = confirm("Want to remove this book?");
        if (result) {
          const res = await fetch(`http://localhost:3000/books/${id}`, {method: 'DELETE'});
          alert("Book was removed");
          window.location.assign("http://localhost:3001/books");
          return res.json();
        } else {
          alert("Nothing was removed");
          window.location.assign("http://localhost:3001/books");
        }
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<template>
  <div class="container mx-auto mt-4">
  <div class="row">
    <div class="col-md-3 pt-4" v-for="book in books">
      <div class="card text-center align-items-center" style="width: auto; height: auto;">
        <img :src="book.image" class="card-img-top" style="width: 300px; height: 500px;" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ book.book_name }}</h5>
          <p class="card-subtitle">{{ book.author }}</p>
        </div>
        <div class="mx-0 my-2 text-center card-footer">
          <router-link :to="`/book/${book.id}`" class="btn btn-primary ms-0 me-1">
            Více info
          </router-link>
          <router-link :to="`/edit_book/${book.id}`" class="btn btn-warning mx-2">
            Edit
          </router-link>
          <button @click="deletebook(book.id)" class="btn btn-danger ms-1 me-0">Delete</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>