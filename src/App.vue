<script setup>
import NavBar from "./components/ui/NavBar.vue";
import { RouterView } from "vue-router";
import FooterComponent from "./components/ui/FooterComponent.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
  <FooterComponent />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Poppins:wght@500;600&display=swap");
@import "@/assets/base.css";
</style>
