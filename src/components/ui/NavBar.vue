<script setup>
import { reactive } from "vue";
import NavbarLink from "./NavbarLink.vue";
import Logo from "@/assets/logo.svg";
// El @ simboliza el src

const links = reactive([
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/cleaners" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Como funciona", href: "/como-funciona" },
  { name: "Hazte cleaner", href: "/hazte-cleaner" },
]);
</script>
<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-logo">
        <a href="/"><img :src="Logo" alt="Clean2Home" title="Clean2Home" /></a>
      </li>
      <li class="navbar-toggle">
        <font-awesome-icon icon="bars" />
      </li>
      <NavbarLink
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :href="link.href"
      />
      <li class="navbar-links">
        <a href="#" id="login-register">Iniciar sesión</a>
      </li>
      <li class="navbar-links">
        <div class="navbar-user">
          <span id="navbar-name"></span>
          <div class="navbar-img-container">
            <img
              referrerpolicy="no-referrer"
              id="navbar-img"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
              alt="user-image"
            />
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
<style lang="scss">
.navbar-list {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 4em 0;
  width: 70%;
  margin: 0 auto;
}

.navbar-logo {
  user-select: none;
  width: 200px;
  margin-right: auto;
}

.navbar-user {
  display: none;
  font-size: 1.4em;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & img {
    cursor: pointer;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 1em;
  }
}

.navbar-toggle {
  display: none;
  font-size: 1.5em;
}

/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 1024px) {
  .navbar-list {
    flex-wrap: wrap;
  }

  .navbar-toggle {
    display: block;
  }

  .active {
    display: block;
    margin-top: 1em;

    &:first-child {
      margin-top: 3em;
    }
  }
}

@media (max-width: 500px) {
  .navbar-list {
    width: 100%;
    padding-left: 1em;
    padding-right: 2em;
  }
}
</style>
