<script setup>
import { reactive } from "vue";
import { useUiStore } from "@/stores/ui";
import NavbarUser from "./NavbarUser.vue";
import NavbarLink from "./NavbarLink.vue";
import Logo from "@/assets/logo.svg";
import AuthModal from "./modal/AuthModal.vue";
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from "pinia";

const links = reactive([
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/cleaners" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Como funciona", href: "/como-funciona" },
  { name: "Hazte cleaner", href: "/hazte-cleaner" },
]);

const { modal, toggleModal } = useUiStore();
const { user } = storeToRefs(useAuthStore());
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
      <NavbarUser v-if="user" />
      <li v-else-if="!user" class="navbar-links">
        <a href="#" @click="toggleModal" id="login-register">Iniciar sesión</a>
      </li>
    </ul>
  </nav>
  <AuthModal v-if="modal.isOpen" />
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
