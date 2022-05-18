<script setup>
import WaveUp from "@/assets/WaveUp.vue";
import WaveDown from "@/assets/WaveDown.vue";
import ProfilePic from "@/assets/profile_pic.svg";
import ProfileGuyGlasses from "@/assets/profile-guy-glasses.svg";
</script>

<template>
  <h2 class="team-title">Nuestro equipo</h2>
  <WaveUp />
  <section class="team">
    <div class="team-members">
      <div class="member">
        <img :src="ProfileGuyGlasses" alt="Abel" />
        <h3>Abel</h3>
      </div>
      <div class="member">
        <img :src="ProfileGuyGlasses" alt="Alex" />
        <h3>Alex</h3>
      </div>
      <div class="member">
        <img :src="ProfilePic" alt="Daniela" />
        <h3>Daniela</h3>
      </div>
      <div class="member">
        <img :src="ProfileGuyGlasses" alt="Álvaro" />
        <h3>Álvaro</h3>
      </div>
      <div class="member">
        <img :src="ProfileGuyGlasses" alt="Enrique" />
        <h3>Enrique</h3>
      </div>
      <div class="member">
        <img :src="ProfilePic" alt="Lale" />
        <h3>Lale</h3>
      </div>
      <div class="member">
        <img :src="ProfileGuyGlasses" alt="Iván" />
        <h3>Iván</h3>
      </div>
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
