<template>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <div class="block">
            <div class="section-title">
              <h2>About Us ID={{ book.book_name }}</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id </p>
          </div>
        </div><!-- .col-md-7 close -->
        <div class="col-md-5">
          <div class="block">
            <img src="images/wrapper-img.png" alt="Img">
          </div>
        </div><!-- .col-md-5 close -->
      </div>
    </div>

</template>

<script>

export default {
  name: "Book",
  data() {
    return {
      book:{
        id: null,
        book_name: null,
        author: null,
        description: null,
        image: null
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.book = await this.getData(id)
  },
  methods: {
    async getData(id){
      const res = await fetch(`http://localhost:3000/books/${id}`, {method: 'GET'});
      return res.json();
    }
  }
}
</script>

<style scoped>

</style>

