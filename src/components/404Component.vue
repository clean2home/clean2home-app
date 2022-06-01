<script setup>
import pagina_404 from "@/assets/pagina_404.svg";
</script>

<template>
  <!-- ERROR404 -->
  <section class="error404">
    <div class="container-404">
      <div class="ilustracion-404">
        <img :src="pagina_404" alt="ilustracion de página de error 404" />
      </div>
      <div class="frase-ilustracion-404">
        <strong>Nada</strong><br />
        por aquí...
        <div class="frase2-404">Error 404: Página no encontrada</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* -----------------------------------*\
  #404SECTION
\*----------------------------------- */
.error404 {
  width: 70%;
  margin: auto;
  padding: 6em;
  display: flex;
}
.container-404 {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: center;
}
.ilustracion-404 {
  width: 250px;
  min-width: 180px;
  padding: 1em;
}
.frase-ilustracion-404 {
  font-family: var(--ff-poppins);
  font-weight: bold;
  font-size: 3.5em;
  color: var(--color-dark-gray);
}
.frase-ilustracion-404 strong {
  color: var(--color-primary);
}
.frase2-404 {
  font-size: 0.3em;
  padding-top: 2em;
  font-weight: normal;
}
@media (max-width: 600px) {
  .error404 {
    padding: 8em 1em;
  }
  .container-404 {
    width: 90%;
  }
}
</style>
