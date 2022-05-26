<script setup>
import { RouterLink } from "vue-router";

defineProps({
  name: String,
  href: String,
});
</script>
<template>
  <li class="navbar-links">
    <RouterLink :to="href">{{ name }}</RouterLink>
  </li>
</template>
<style>
.navbar-links {
  display: inline;
  font-family: var(--ff-poppins);
  margin-left: 4em;

  & a {
    color: var(--color-dark-gray);
  }

  & a:hover {
    color: var(--color-primary);
  }

  & a::after {
    margin: auto;
    content: "";
    width: 0;
    height: 2px;
    display: block;
    background: var(--color-primary);
    transition: 300ms;
  }

  & a:hover::after {
    width: 100%;
  }
}

@media (max-width: 1024px) {
  .navbar-links {
    display: none;
    width: 100%;
    text-align: center;
    margin: 0.5em;

    & a::after {
      margin-top: 0.5em;
    }

    & a:hover::after {
      width: 30%;
    }
  }
}
</style>
