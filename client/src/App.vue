<script setup>
import { RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
 <Navigation/>

    <RouterView/>
<Footer/>
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
