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
<style lang="scss">
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

  &:last-child {
    & a::after {
      height: 0;
    }
  }
}

.navbar-links.user {
  display: inline;
  font-family: var(--ff-poppins);
  margin: 0;

  & a {
    color: var(--color-dark-gray);
  }

  & a::after {
    content: "";
  }
}

@media (max-width: 1024px) {
  .navbar-links {
    margin: 0;
    padding: 0.5em 0;
    display: none;
    width: 100vw;
    text-align: center;

    & a::after {
      margin: auto;
      content: "";
      width: 0;
      height: 2px;
      display: block;
      background: white;
      transition: 300ms;
    }

    & a:hover {
      color: white;
    }

    & a:hover::after {
      width: 30%;
    }
  }

  .navbar-links.active,
  .navbar-links.active.user {
    display: block;
    margin: 0;
    background: #fff;
    cursor: pointer;

    &:hover {
      background: var(--color-primary);
      color: white;
    }

    &:first-child {
      margin-top: 3em;
    }

    &:last-child {
      box-shadow: 0 10px 10px rgb(87 87 87 / 47.3%);
      padding-bottom: 2em;
    }
  }
}
</style>
