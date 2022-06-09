<template>
  <div class="position-relative overflow-hidden p-3 p-md-2 text-center bg-light vh-100">
    <div class="row">
      <div class="col-md-5 p-lg-5 mx-auto my-2">
        <h1 class="display-4 fw-normal text-black m-lg-5" style=" text-shadow: 0 0 2px black;">{{book.book_name}}</h1>
        <h3 class="" style=" text-shadow: 0 0 10px white;">Author: {{book.author}}</h3>
        <p class="lead fw-normal text-black">{{book.description}} </p>


      </div>
      <div class="col-md-5 p-lg-5 mx-auto my-3">
        <img :src="book.image" alt="photo" class="img-fluid shadow-4-strong"
             style="border-radius: 10px 15px 15px 15px; box-shadow: 0 0 10px gray; height: 80vh;">
      </div>
    </div>
  </div>



</template>

<script>

export default {
  name: "Book",
  data() {
    return {
      book:{ //object
        id: null,
        book_name: null,
        author: null,
        description: null,
        image: null
      }
    }
  },
  async mounted() { //Po nasazeni komponenty
    const id = this.$route.params.id; // id z url
    this.book = await this.getData(id) //nahraje data z metody getData
  },
  methods: {
    async getData(id){
      const res = await fetch(`http://localhost:3000/books/${id}`, {method: 'GET'}); //get book with "id" from server
      return res.json();
    }
  }
}
</script>

<style scoped>

</style>

