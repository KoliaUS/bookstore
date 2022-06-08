<template>

  <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: rgba(241,239,239,0.85); -webkit-backdrop-filter: saturate(180%) blur(20px); backdrop-filter: saturate(180%) blur(20px);">
    <a class="navbar-brand ms-3 me-4" href="#">BookStore</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/">
            <em class="bi-house"></em> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/books">
            <em class="bi-book"></em> Books
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/add_book">
            <em class="bi-plus-square"></em> Add book
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>