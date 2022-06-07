<template>
  <form>
    <div class="row justify-content-center mt-5">
      <div class="col-6 border p-3">
        <div class="mb-3">
          <label class="form-label">Book name edit</label>
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
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditBook",
  data() {
    return {
      book: {
        book_name: null,
        author: null,
        description: null,
        image: null
      }
    }

  }
}
</script>

<style scoped>

</style>