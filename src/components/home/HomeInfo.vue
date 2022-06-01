<script setup>
import InfoHome from "../../assets/info-home.svg";
import InfoMap from "../../assets/info-map.svg";
import InfoMoney from "../../assets/info-money.svg";
</script>
<template>
  <section class="info-clients">
    <div class="container-client">
      <article class="info-client-box">
        <div class="icons-clients maps-icon">
          <img :src="InfoMap" alt="Icono de ubicación" />
        </div>
        <h3 class="info-client-box-title">Cerca de ti</h3>
        <p>
          Introduciendo tu ubicación encontrarás a tiempo real los cleaners
          disponibles en ese momento. También puedes concretar una cita en el
          horario de cada cleaner.
        </p>
      </article>
      <article class="info-client-box">
        <div class="icons-clients money-icon">
          <img :src="InfoMoney" alt="Icono de una bolsa del dólar" />
        </div>
        <h3 class="info-client-box-title">Elige la mejor opción</h3>
        <p>
          Compara precios y valoraciones entre los cleaners y selecciona la
          opción que mejor se ajuste a tus necesidades. Contrata solo las horas
          que necesites.
        </p>
      </article>
      <article class="info-client-box">
        <div class="icons-clients house-icon">
          <img :src="InfoHome" alt="Icono de una casa con un corazón enmedio" />
        </div>
        <h3 class="info-client-box-title">Proceso seguro</h3>
        <p>
          En Clean2Home actuamos como intermediarios y nos aseguramos de el que
          trabajo se realiza correctamente. ¡Olvídate de buscar a ciegas!
        </p>
      </article>
    </div>
    <div class="button-container">
      <a href="/como-funciona" class="client-button">Más Información</a>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.info-clients {
  background-color: var(--color-primary);
}

.container-client {
  margin: auto;
  width: 70%;
  background: var(--color-primary);
  padding: 3em 12em;
  display: flex;
  align-content: center;
  justify-content: space-around;
}

.info-client-box {
  margin: 1em;
  margin-top: 3em;
  padding: 2.4em;
  padding-bottom: 4em;
  width: 70%;
  min-width: 310px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 3px 5px 9px 2px #0000003e;
}

.icons-clients {
  width: 210px;
  height: 210px;
  margin: 30px;
  position: absolute;
  top: -160px;
  right: 50;
  left: 50;
  filter: drop-shadow(5px 4px 6px rgb(0 0 0 / 24.7%));
}

.info-client-box-title {
  font-size: 1.3em;
  margin-top: 2em;
  font-family: var(--ff-poppins);
  color: var(--color-dark-gray);
  text-align: center;
}

.info-clients p {
  margin-top: 1.8em;
  font-family: var(--ff-open-sans);
  color: var(--color-dark-gray);
  text-align: center;
  font-size: 1em;
  line-height: 1.9em;
}

.button-container {
  display: flex;
  align-content: center;
  justify-content: center;
  background: var(--color-primary);
}

.client-button {
  width: 100%;
  max-width: 19em;
  padding: 15px 20px;
  border-radius: 0.8em;
  color: var(--color-dark-gray);
  background-color: var(--color-light-yellow);
  font-family: var(--ff-poppins);
  font-size: 1.3em;
  text-align: center;
  display: inline-block;
  border: none;
  outline: none;
  margin: 0.5em;
  margin-bottom: 3em;
  box-shadow: 0 6px 0 #c18c32;
}

.client-button:hover {
  background-color: #e5c285;
}

.client-button:active {
  box-shadow: 0 2.5px 0 #c18c32;
  position: relative;
  top: 5px;
}

/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */
@media (max-width: 1440px) {
  .home {
    font-size: 15px;
  }

  .home-slogan {
    font-size: 3em;
  }

  .values-properties {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }

  .team-members {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: auto;
  }
}

@media (max-width: 1024px) {
  .container-client {
    padding: 6em 1em;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }

  .info-client-box {
    margin-top: 8em;
  }
}
</style>
