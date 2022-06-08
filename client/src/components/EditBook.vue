<template>
  <form>
    <div class="row justify-content-center mt-5 align-items-center" style="max-width: 1500px; margin: 0 auto 100px;padding: 45px;">
      <div class="col-6 p-3" style=" box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);">
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
        <button @click="editData" type="button" class="btn btn-primary float-end">Submit</button>
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
        id: null,
        book_name: null,
        author: null,
        description: null,
        image: null
      }
    }

  },
  async mounted(){
    const id = this.$route.params.id;
    this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = (await fetch(`http://localhost:3000/books/${id}`, {method: 'GET'}));
      const data = await res.json();
      console.log(data);
      this.book = data;
    },
    async editData(){
      try {
        console.log(this.book);
        await fetch(`http://localhost:3000/books/${this.book.id}`,
            {
              method: 'PATCH',
              body: JSON.stringify(this.book),
              headers:{
                'Content-type':'application/json'
              }
            }
        )

        alert("Done!");
      } catch (e) {
        alert(e);
      }
    }
  }
}

</script>

<style scoped>

</style>