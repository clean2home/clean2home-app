<script setup>





</script>
<!-- //  <script src="https://kit.fontawesome.com/790908a15c.js" crossorigin="anonymous"></script> -->
<template>
 <main class="como-funciona">
    <section class="funciona">
      <div class="slogan">
        <h1 class="funciona-slogan">
          Descubre cómo <strong>funciona</strong>
        </h1>
      </div>
    </section>
    <section class="steps-client">
      <h2 class="be-cleaner">Si buscas un cleaner</h2>
      <div class="container-steps">
        <div class="steps-left">
          <button class="icon">
            <font-awesome-icon icon="fa-solid fa-right-to-bracket"></font-awesome-icon>
            <img src="../assets/how-works-icons/arrow-right-to-bracket-solid.svg" class="icon-svg" />
          </button>
          <h4 class="text-green">Regístrate</h4>
          <p class="explain-left">
            <a href="#" class="btn-register">Date de alta</a>, introduce tus datos, configura tu cuenta y comienza a
            buscar tu cleaner
          </p>
        </div>
        <div class="step-right">
          <button class="icon">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"></font-awesome-icon>
            <img src="../assets/how-works-icons/magnifying-glass-solid.svg" class="icon-svg" />
          </button>
          <h4 class="text-green">Busca en tu ciudad</h4>
          <p class="explain-right">
            Introduce tu Código Postal y conoce a los cleaners más cercanos a ti
          </p>
        </div>
        <div class="steps-left">
          <button class="icon">
            <font-awesome-icon icon="fa-solid fa-check" />
            <img src="../assets/how-works-icons/check-solid.svg" class="icon-svg" />
          </button>
          <h4 class="text-green">Selecciona a tu cleaner</h4>
          <p class="explain-left">
            Elige el profesional que mejor se adapte a tus necesidades
          </p>
        </div>
        <div class="step-right">
          <button class="icon">
            <font-awesome-icon icon="fa-solid fa-calendar-check"></font-awesome-icon>
            <img src="../assets/how-works-icons/calendar-check-solid.svg" class="icon-svg" />
          </button>
          <h4 class="text-green">Contrata el servicio</h4>
          <p class="explain-right">
            Elige la hora y día que quieres que te visite tu cleaner
          </p>
        </div>
        <div class="steps-left">
          <button class="icon">
            <font-awesome-icon icon="fa-solid fa-flag-checkered"></font-awesome-icon>
            <img src="../assets/how-works-icons/flag-checkered-solid.svg" class="icon-svg"/>
          </button>
          <h4 class="text-green">Disfruta y paga el servicio</h4>
          <p class="explain-left">
            Una vez disfrutas del servicio, paga mediante las facilidades que te da nuestra web y valora al cleaner
          </p>
        </div>
      </div>
    </section>

    <section class="be-cleaner">
      <h2>Si quieres ser cleaner</h2>
      <p>En Clean2Home te ponemos en contanto con clientes deseosos de contratar tus servicios. Tu pones el precio y
        el horario. ¡Unete!
      </p>
      <div class="cleaner-grid">
        <div class="cleaner-grid-card">
          <h3>1. Resgístrate como cleaner en Clean2Home</h3>
          <p>Añade información sobre ti e imágenes que muestren tu personalidad y profesionalidad</p>
        </div>
        <div class="cleaner-grid-card">
          <h3>2. Indica tu disponibilidad</h3>
          <p>Puedes organizarte como mejor te venga, sin horarios y sin horas mínimas que trabajar a la semana</p>
        </div>
        <div class="cleaner-grid-card">
          <h3>3. Atento a los mensajes</h3>
          <p>Te avisaremos por mensaje cuando un cliente necesite tu servicio. Confirma la cita y prepara todo lo
            necesario</p>
        </div>
        <div class="cleaner-grid-card">
          <h3>4. Gana dinero</h3>
          <p>Cumple con el servicio y recibe el dinero antes de salir por la puerta del cliente. Pide una buena
            reseña, ¡todo suma para conseguir tu próximo cliente!</p>
        </div>
      </div>
      <div class="cleaner-seguro-container">
        <h2>Asociados con Caser Seguros</h2>
        <div class="cleaner-seguro">
          <p>Porque todos sabemos lo que le pasó a la abuelita de Caperucita Roja, nosotros estamos asegurados con
            <strong>Caser Seguros</strong>. <br>
            Cualquier incidente que sufra cualquiera de las partes estará cubierto con nuestro seguro.<br>
            Porque queremos que solo te preoucpes de disfrutar de tu hogar impecable.
          </p>
          <img src="../assets/caser-seguros.png" alt="caser seguros">
        </div>
      </div>

    </section>





  </main>
</template>
<style>
.be-cleaner {
  font-family: var(--ff-poppins);
  margin: auto;
  margin-top: 20px;
  max-width: 70%;
  display: flex;
  align-content: center;
  flex-direction: column;
}

.be-cleaner h2 {
  margin-bottom: 1em;
}

.cleaner-grid {
  margin: 2em 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
}

.cleaner-grid-card {
  padding: 1em;
  border-radius: 4px;
  box-shadow: 5px 5px 10px #00000030;
}

.cleaner-grid-card h3 {
  color: #00cba9;
  font-weight: 700;
  font-size: 17px;
  margin-bottom: 0.8em;
}

.cleaner-seguro {
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.cleaner-seguro p {
  flex: 2;
  max-width: 800px;
}

.cleaner-seguro img {
  flex: 1;
  max-width: 300px;
  margin-top: 20px;
}

.cleaner-seguro-container {
  margin: 3em 0 6em;
}

.slogan {
  margin: 0 auto;
  max-width: 70%;
  display: flex;
}

.funciona-slogan {
  font-family: var(--ff-poppins);
  font-weight: bold;
  font-size: 4em;
  line-height: 1;
  margin: 25px 0;
}

.funciona-slogan strong {
  color: #00cba9;
}

.steps-client {
  margin-bottom: 8em;
}

.container-steps {
  width: 75%;
  height: 60em;
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
}

.steps-left {
  width: 50%;
  height: 180px;
  margin-left: 1px;
  padding-right: 20px;
  border-right: 1px solid #dbdbdb;
  text-align: right;
}

.icon {
  font-size: 2em;
  border: 0;
  background-color: white;
  box-shadow: 1px 5px 5px #00000030;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 1em;
}

.step-right {
  width: 50%;
  height: 180px;
  margin-left: 50%;
  padding-left: 20px;
  border-left: 1px solid #dbdbdb;
  text-align: left;
}

.text-green {
  color: #00cba9;
  font-weight: bold;
  margin-top: 10px;
}

.btn-register {
  color: black;
  font-weight: 600;
}


.fa-magnifying-glass:before, .fa-search:before {
    content: "\f002";
}

@media (min-width: 1200px) {
  .cleaner-grid { grid-template-columns: repeat(2, 1fr); }
  .cleaner-seguro { flex-direction: row; }
  .steps-left { padding-left: 25%; }
  .step-right { padding-right: 25%; }
  .steps-client { padding-bottom: 0; }
}

/* Estilo iconos SVG */

.icon-svg {
  width:54%; 
  height: auto; 
  margin-left: 22%;
}
</style>