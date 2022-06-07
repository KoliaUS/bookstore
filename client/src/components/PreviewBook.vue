<template>
  <div class="card" style="width: 18rem;">
    <img :src = "image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{book_name}}</h5>
      <p class="card-subtitle">{{author}}</p>
     <router-link :to="`/book/${id}`" class="btn btn-primary">
       Číst dále
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PreviewBook",
  props: {
    id: Number,
    book_name: String,
    image: String,
    author: String,
    description: String

  }
}
</script>

<style scoped>

</style>