<script setup>
import CleanerForm from "@/components/hazte-cleaner/CleanerForm.vue";
import { storeToRefs } from "pinia";
import WaveUp from "../assets/WaveUp.vue";
import { useAuthStore } from "../stores/auth";

const { user, cleaner } = storeToRefs(useAuthStore());
</script>

<template>
  <main class="hazte-cleaner">
    <h1 class="home-slogan">
      Tu nuevo futuro profesional esta a punto de <strong>comenzar</strong>
    </h1>
    <div v-if="!user" class="user-unlogged">
      <p class="hazte-cleaner-text">
        Pero antes de nada, tienes que iniciar sesión en tu cuenta o registrarte
        si aún no lo has hecho
      </p>
    </div>
    <div v-else-if="cleaner" class="user-cleaner">
      <p class="hazte-cleaner-text">
        ¡Ya eres cleaner! Pronto podrás ver y editar tu perfil
      </p>
    </div>
    <div v-else class="user-logged">
      <p class="hazte-cleaner-text">
        Hacerte cleaner es muy sencillo, solo necesitas unos pocos datos y una
        cuenta de Clean2Home, y ¡ya estás listo!. Ya puedes empezar a trabajar.
        El equipo de Clean2Home revisará tu solicitud y aparecerás en los
        resultados de búsqueda para que los usuarios puedan contactar contigo.
      </p>
      <p>
        Puedes ver más información en el apartado
        <RouterLink to="/como-funciona">cómo funciona</RouterLink>
      </p>
      <CleanerForm />
    </div>
  </main>
  <WaveUp />
</template>
<style scoped lang="scss">
.home-slogan {
  font-family: var(--ff-poppins);
  font-size: 4em;
  line-height: 1;

  & strong {
    color: var(--color-primary);
  }
}
.hazte-cleaner {
  width: 70%;
  margin: 0 auto;
}

.hazte-cleaner-text {
  margin-top: 1em;
  font-size: 1.3em;
}

.hazte-cleaner-form-container {
  width: 80%;
  margin: 2em auto;

  & h3 {
    font-family: var(--ff-poppins);
    font-size: 2em;
    margin-bottom: 0.7em;
  }

  & label {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 0.5em;
  }
}

/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 1024px) {
  .home-slogan {
    font-size: 3em;
  }
  .hazte-cleaner {
    width: 80%;
  }

  .hazte-cleaner-form-container {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .hazte-cleaner {
    width: 90%;
  }
}
</style>
