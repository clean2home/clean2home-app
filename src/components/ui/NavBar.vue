<script setup>
import { reactive } from "vue";
import { useUiStore } from "@/stores/ui";
import NavbarUser from "./NavbarUser.vue";
import NavbarLink from "./NavbarLink.vue";
import Logo from "@/assets/logo.svg";
import AuthModal from "./modal/AuthModal.vue";
import { useAuthStore } from "../../stores/auth";
import { storeToRefs } from "pinia";
import NavBarHamburger from "./NavBarHamburger.vue";

const links = reactive([
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/cleaners" },
  { name: "Sobre nosotros", href: "/about-us" },
  { name: "Como funciona", href: "/como-funciona" },
  { name: "Hazte cleaner", href: "/hazte-cleaner" },
]);

const { modal, toggleModal } = useUiStore();
const { user } = storeToRefs(useAuthStore());

const state = reactive({ navbarActive: false });
function navbarRes() {
  /*toggleButton.classList.toggle("active");
  navbarLogo.classList.toggle("active");
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }*/
  state.navbarActive = !state.navbarActive;
}
</script>
<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-logo" :class="{ active: state.navbarActive }">
        <a href="/"><img :src="Logo" alt="Clean2Home" title="Clean2Home" /></a>
      </li>
      <li class="navbar-toggle" @click="navbarRes">
        <NavBarHamburger :class="{ active: state.navbarActive }" />
      </li>
      <NavbarLink
        v-for="link in links"
        :key="link.name"
        :name="link.name"
        :href="link.href"
        :class="{ active: state.navbarActive }"
      />
      <NavbarUser v-if="user" :class="{ active: state.navbarActive }" />
      <NavbarLink
        href=""
        name="Iniciar sesión"
        v-else-if="!user"
        class="navbar-links"
        :class="{ active: state.navbarActive }"
        @click="toggleModal"
      />
    </ul>
  </nav>
  <AuthModal v-if="modal.isOpen" />
</template>
<style lang="scss" scoped>
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
    top: 0;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
  }

  .navbar-toggle {
    display: block;
    margin-right: 2em;
  }

  .navbar-logo {
    margin-left: 2em;
  }

  .navbar-logo.active {
    display: none;
  }
}

@media (max-width: 500px) {
  .navbar-list {
    width: 100%;
  }

  .navbar-toggle {
    margin-right: 1em;
  }

  .navbar-logo {
    margin-left: 1em;
  }
}
</style>
