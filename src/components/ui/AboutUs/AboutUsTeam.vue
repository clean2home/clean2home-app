<script setup>
import WaveUp from "@/assets/WaveUp.vue";
import WaveDown from "@/assets/WaveDown.vue";
import Enrique from "@/assets/team/enrique.jpeg";
import Alvaro from "@/assets/team/alvaro.jpg";
import Daniela from "@/assets/team/daniela.jpg";
import Ivan from "@/assets/team/ivan.jpg";
import Lale from "@/assets/team/lale.jpg";
import Abel from "@/assets/team/abel.jpg";
import Alex from "@/assets/team/alex.png";
</script>

<template>
  <h2 class="team-title">Nuestro equipo</h2>
  <WaveUp />
  <section class="team">
    <div class="team-members">
      <a href="https://linkedin.com/in/abelvillalonsanchez" target="_blank">
        >
        <div class="member">
          <img :src="Abel" alt="Abel" />
          <h3>Abel</h3>
        </div></a
      >
      <a href="https://linkedin.com/in/alejandro-garcia-olmeda/" target="_blank"
        ><div class="member">
          <img :src="Alex" alt="Alex" />
          <h3>Alex</h3>
        </div></a
      >
      <a href="https://linkedin.com/in/daniela-bru-soriano/" target="_blank"
        ><div class="member">
          <img :src="Daniela" alt="Daniela" />
          <h3>Daniela</h3>
        </div></a
      >
      <a
        href="https://linkedin.com/in/alvarogutierrezayestarain"
        target="_blank"
        ><div class="member">
          <img :src="Alvaro" alt="Álvaro" />
          <h3>Álvaro</h3>
        </div></a
      >
      <a href="https://linkedin.com/in/enriquegarciagascon" target="_blank">
        <div class="member">
          <img :src="Enrique" alt="Enrique" />
          <h3>Enrique</h3>
        </div></a
      >
      <a
        href="https://linkedin.com/in/laleczkarodriguezfernandez
"
        target="_blank"
        ><div class="member">
          <img :src="Lale" alt="Lale" />
          <h3>Lale</h3>
        </div></a
      >
      <a
        href="https://linkedin.com/in/ivanlopezmontero
"
        target="_blank"
        ><div class="member">
          <img :src="Ivan" alt="Iván" />
          <h3>Iván</h3>
        </div></a
      >
    </div>
  </section>
  <!-- SECCIÓN INFO CLIENTES -->
  <WaveDown />
</template>

<style lang="scss" scoped>
@import "@/assets/base.css";
.team-title {
  text-align: center;
  font-family: var(--ff-poppins);
  margin: 4em 0 -1em;
  font-size: 2em;
}
.team {
  background-color: var(--color-primary);
}

.team-members {
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5em;
  align-items: center;
}

.team-members .member {
  color: #1d1d1d;
  font-size: 1.3em;
  display: flex;
  padding: 1em;
  width: 200px;
  height: 250px;
  justify-items: center;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 0.3em;
  box-shadow: 5px 5px 5px #00cba9;
  font-family: var(--ff-open-sans);
  transition: all 0.3s ease-in-out;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.1);
  }
}

@media (max-width: 1440px) {
  team-members {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
}
@media (max-width: 1024px) {
  .team-members {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
  }
}
@media (max-width: 500px) {
  .team-members {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .team-title {
    margin: 4em 0 1em;
  }
}
</style>
