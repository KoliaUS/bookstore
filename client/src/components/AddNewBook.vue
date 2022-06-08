<template>

  <form>
    <div class="row justify-content-center mt-5 align-items-center" style="max-width: 1500px; margin: 0 auto 100px;padding: 45px; ">
      <div class="col-6 p-3" style="box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);">
        <div class="mb-3">
          <label class="form-label">Book name</label>
          <input v-model="book.book_name" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Author</label>
          <input v-model="book.author" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea v-model="book.description" class="form-control" rows="6"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Image URL</label>
          <input v-model="book.image" type="text" class="form-control">
        </div>
        <button @click="send" type="button" class="btn btn-primary float-end">Submit</button>
      </div>
    </div>
  </form>

</template>

<script>
//
export default {
  name: "AddNewBook",
  data() {
    return {
      book: { //object kniha
        book_name: null,
        author: null,
        description: null,
        image: null
      }
    }
  },

  //
  methods: {
    async send() {
      try {
        console.log(this.book);
        await fetch('http://localhost:3000/books', //komunikace server
            {
              method: 'POST',
              body: JSON.stringify(this.book), //poslani na server, convert
              headers: {
                'Content-type': 'application/json' //Message body info
              }
            }
        )
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }
}

</script>

<style scoped>

</style>