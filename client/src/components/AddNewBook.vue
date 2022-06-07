<template>
  <form>
    <div class="row justify-content-center mt-5">
      <div class="col-6 border p-3">
        <div class="mb-3">
          <label class="form-label">Book name</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Author</label>
          <input type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" rows="6"></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Image URL</label>
          <input type="text" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddNewBook"
}
</script>

<style scoped>

</style>