<script setup>
import WorkWithUs from "@/assets/work-with-us.svg";
</script>
<template>
  <section class="work-with-us">
    <img :src="WorkWithUs" alt="Trabaja con nosotros" />
    <h2>¿Quieres trabajar con nosotros?</h2>
    <p>
      En Clean2Home buscamos cleaners motivados que sean capaces de satisfacer
      las necesidadesde nuestros clientes. Ofrecemos un trabajo 100% flexible
      donde tu decides el horario, el precio y el radio de desplazamiento. ¿Te
      apuntas?
    </p>
    <a href="/hazte-cleaner" class="btn home-btn work-with-us-btn"
      >Hazte Cleaner</a
    >
  </section>
</template>
<style lang="scss" scoped>
.work-with-us {
  padding: 1em 0 7em;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
}

.work-with-us img {
  width: 10%;
  margin-bottom: 4em;
}

.work-with-us > p {
  width: 45%;
  min-width: 330px;
  margin: 35px 12%;
}

.work-with-us-btn {
  width: 22em;
  max-width: 90%;
}

.home-btn {
  background: var(--color-secondary);
  box-shadow: 0 6px 0 var(--color-secondary-very-dark);
  color: white;

  &:hover {
    background: var(--color-secondary-dark);
  }

  &:active {
    box-shadow: 0 3px 0 var(--color-secondary-very-dark);
    position: relative;
    top: 5px;
  }
}
/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 1024px) {
  .work-with-us img {
    width: 25%;
    margin-bottom: 4em;
  }
}

@media (max-width: 500px) {
  .work-with-us img {
    width: 60%;
    margin-bottom: 4em;
  }
}
</style>
