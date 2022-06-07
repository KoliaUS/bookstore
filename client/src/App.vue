<script setup>
import { RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
 <Navigation/>
  <div class="container-fluid bg-white">
    <RouterView/>
  </div>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
