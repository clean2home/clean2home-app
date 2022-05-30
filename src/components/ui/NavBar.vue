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
      <li
        v-else-if="!user"
        class="navbar-links"
        :class="{ active: state.navbarActive }"
      >
        <a href="#" @click="toggleModal" id="login-register">Iniciar sesión</a>
      </li>
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

  .navbar-logo {
    margin-left: 2em;
  }

  .navbar-logo.active {
    display: none;
  }

  .navbar-links.active {
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
