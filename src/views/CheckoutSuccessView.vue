<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <div class="icon">
      <font-awesome-icon icon="check-circle" />
    </div>
    <h1 class="home-slogan">¡Has reservado un Cleaner correctamente!</h1>
    <p>
      Recibirás un correo electrónico con la información y además puedes ver la
      reserva en tu perfil. Si no lo recibes, revisa la carpeta de spam.
    </p>
    <RouterLink to="/">
      <span class="btn home-btn work-with-us-btn">Ir a mi perfil</span>
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped>
.icon {
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
