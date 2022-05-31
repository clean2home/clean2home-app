<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <div class="icon">
      <font-awesome-icon icon="circle-xmark" />
    </div>
    <h1 class="home-slogan">Oops... Algo ha salido mal</h1>
    <p>
      Vuelve a intentar hacer la reserva, revisa tus datos bancarios y si el
      error continúa contacta con nosotros
    </p>
    <RouterLink to="/">
      <span class="btn home-btn work-with-us-btn">Volver a inicio</span>
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped>
.icon {
  color: #dd2323;
  font-size: 5rem;
}
.container {
  text-align: center;
  gap: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}
.home-slogan {
  font-family: var(--ff-poppins);
  font-size: 2.5em;
  line-height: 1;
}
p {
  font-size: large;
}

.home-btn {
  display: block;
  margin-top: 1em;
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

@media (max-width: 1024px) {
  .container {
    padding: 16px;
  }
  .home-btn {
    margin-bottom: 2em;
  }
}
</style>
