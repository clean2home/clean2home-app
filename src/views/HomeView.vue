<script setup>
import HomeIllustration from "../assets/home-illustration.svg";
import InfoHome from "../assets/info-home.svg";
import InfoMap from "../assets/info-map.svg";
import InfoMoney from "../assets/info-money.svg";
</script>

<template>
  <main>
    <section class="home">
      <div>
        <h1 class="home-slogan">Lleva el <strong>orden</strong> a tu hogar</h1>
        <h2 class="home-description">Contrata Cleaners cerca de ti</h2>
        <p class="home-text">
          En Clean2Home conectamos a gente que busca servicios de limpieza con
          profesionales locales de confianza.
        </p>
        <form form action="/cleaners.html" method="GET" class="home-form">
          <input
            type="text"
            name="cityFilter"
            id="cityFilter"
            placeholder="Introduce C.P. o ciudad"
          />
          <a
            href="javascript:;"
            onclick="this.href='cleaners.html?cityFilter=' + document.getElementById('cityFilter').value"
            class="btn home-btn"
            >Buscar</a
          >
        </form>
      </div>
      <img :src="HomeIllustration" alt="" />
    </section>
    <svg
      style="margin-bottom: -10px"
      xmlns="http://www.w3.org/2000/svg"
      viewbox="0 64 1440 256"
    >
      <path
        fill="#00cba9"
        fill-opacity="1"
        d="M0,64L40,101.3C80,139,160,213,240,208C320,203,400,117,480,112C560,107,640,181,720,213.3C800,245,880,235,960,229.3C1040,224,1120,224,1200,218.7C1280,213,1360,203,1400,197.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
    <!-- SECCIÓN INFO CLIENTES -->
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
            opción que mejor se ajuste a tus necesidades. Contrata solo las
            horas que necesites.
          </p>
        </article>
        <article class="info-client-box">
          <div class="icons-clients house-icon">
            <img
              :src="InfoHome"
              alt="Icono de una casa con un corazón enmedio"
            />
          </div>
          <h3 class="info-client-box-title">Proceso seguro</h3>
          <p>
            En Clean2Home actuamos como intermediarios y nos aseguramos de el
            que trabajo se realiza correctamente. ¡Olvídate de buscar a ciegas!
          </p>
        </article>
      </div>
      <div class="button-container">
        <a href="como-funciona.html" class="client-button">Más Información</a>
      </div>
    </section>
    <!-- SECCIÓN INFO CLIENTES -->
    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1440 224">
      <path
        fill="#00cba9"
        fill-opacity="1"
        d="M0,224L60,224C120,224,240,224,360,186.7C480,149,600,75,720,69.3C840,64,960,128,1080,154.7C1200,181,1320,171,1380,165.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      ></path>
    </svg>

    <!-- Trabaja con nosotros Iván -->
    <section class="work-with-us">
      <h2>¿Quieres trabajar con nosotros?</h2>
      <p>
        En Clean2Home buscamos cleaners motivados que sean capaces de satisfacer
        las necesidadesde nuestros clientes. Ofrecemos un trabajo 100% flexible
        donde tu decides el horario, el precio y el radio de desplazamiento. ¿Te
        apuntas?
      </p>
      <a href="hazte-cleaner.html" class="btn home-btn work-with-us-btn"
        >Hazte Cleaner</a
      >
    </section>
    <!-- Trabaja con nosotros Iván -->

    <!-- Info número de clientes y servicios Álvaro -->
    <div class="container-2">
      <div class="text yellow">
        <p>3000</p>
        <p>cleaners</p>
      </div>
      <div class="text yellow">
        <p>+100000</p>
        <p>clientes</p>
      </div>
      <div class="text yellow">
        <p>1M</p>
        <p>servicios</p>
      </div>
    </div>

    <!-- Botones unete como usuario/cleaner -->

    <div class="container">
      <a href="#" class="btn btn-teal join-as-user">
        <p>Únete como usuario &nbsp; <i class="fa-solid fa-arrow-right"></i></p>

        <!-- 	&#8594; es la flecha-->
      </a>
      <a href="hazte-cleaner.html" class="btn btn-teal">
        <p>Únete como cleaner &nbsp; <i class="fa-solid fa-arrow-right"></i></p>
      </a>
    </div>
  </main>
</template>
<style lang="scss">
/* -----------------------------------*\
  LOGO & MENU
\*----------------------------------- */
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

.navbar-links {
  display: inline;
  font-family: var(--ff-poppins);
  margin-left: 4em;

  & a {
    color: var(--color-dark-gray);
  }

  & a:hover {
    color: var(--color-primary);
  }

  & a::after {
    margin: auto;
    content: "";
    width: 0;
    height: 2px;
    display: block;
    background: var(--color-primary);
    transition: 300ms;
  }

  & a:hover::after {
    width: 100%;
  }
}

.navbar-user {
  display: none;
  font-size: 1.4em;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & img {
    cursor: pointer;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 1em;
  }
}

.navbar-logout {
  display: none;
  font-size: 0.7em;
}

.navbar-toggle {
  display: none;
  font-size: 1.5em;
}

/* -----------------------------------*\
  #HOME
\*----------------------------------- */

.home {
  margin: auto;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5em;
  align-items: center;
}

.home-about {
  margin: auto;
  width: 70%;
}

.values {
  margin: auto;
  width: 70%;
}

.values h2 {
  text-align: center;
  font-family: var(--ff-poppins);
  margin: 5em 0 0.5em;
  font-size: 2em;
}

.values-properties {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}

.properties {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 120px;
  margin: 3em;
  border-radius: 0.3em;
  box-shadow: 5px 5px 5px rgb(198 198 198);
  font-family: var(--ff-poppins);
}

.home-slogan {
  font-family: var(--ff-poppins);
  font-size: 4em;
  line-height: 1;

  & strong {
    color: var(--color-primary);
  }
}

.home-description {
  font-family: var(--ff-poppins);
  margin: 1em 0 0.5em;
  font-size: 2em;
}

.home-text {
  font-size: 1.2em;
}

.home-form input {
  font-family: var(--ff-poppins);
  background: #ececec;
  border-radius: 0.8em;
  border: none;
  display: block;
  width: 100%;
  margin-top: 2em;
  padding: 1em;
  font-size: 1.5em;
  margin-bottom: 1em;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 2px var(--color-primary);
  }
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
  #INFO_CLIENTES
\*----------------------------------- */
.team-title {
  text-align: center;
  font-family: var(--ff-poppins);
  margin: 4em 0 1em;
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
  #WORK WITH US
\*----------------------------------- */

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

/* CSS ÁLVARO */

.container {
  display: flex;
  justify-content: center;
}

.container-2 {
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: var(--color-light-yellow);
  width: 100%;
  justify-content: center;
}

.yellow p {
  color: white;
  font-family: var(--ff-poppins);
  font-weight: bold;
  text-shadow: 0 1.5px 0 rgb(50 50 50 / 50%);
}

.text,
.yellow {
  font-size: 35px;
  margin: 0% 3%;
}

.btn-teal {
  background-color: var(--color-primary);
  width: 320px;
  height: 60px;
  border-radius: 20px;
  box-shadow: 0 5px teal;
  color: white;
  display: flex;
  justify-content: center;
  margin-right: 3%;
  font-family: var(--ff-poppins);
  border: none;
  margin-top: 5%;
  margin-bottom: 5%;
}

.btn-teal:hover {
  background-color: var(--color-primary-dark);
}

.btn-teal:active {
  box-shadow: 0 2.5px 0 teal;
  position: relative;
  top: 3px;
}

.text .yellow {
  display: flex;
  text-align: center;
  justify-content: center;
}

/* CSS ÁLVARO */

/* -----------------------------------*\
  #CAROUSEL
\*----------------------------------- */

.slider-container {
  padding: 4em 0 1em;
}

.glide__slide--active {
  transform: scale(1.1);
  transition: all 0.3s;
}

.slider-card {
  box-shadow: 4px 4px 10px rgb(128 128 128 / 47.3%);
  border-radius: 1.5em;
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  min-height: 500px;

  & img {
    width: 10em;
    height: 10em;
    object-fit: cover;
    border-radius: 50%;
  }

  & .slider-card-stars {
    margin: 1em 0;
    color: var(--color-light-yellow);
    text-align: center;
  }

  & .slider-card-text {
    text-align: center;

    & footer {
      font-weight: bold;
      margin-top: 1em;
    }

    & small {
      display: block;
      font-weight: lighter;
    }
  }
}

.glide__arrow {
  box-shadow: none !important;

  & i {
    color: #00000050;
    font-size: 3em;
  }
}

/* -----------------------------------*\
  #FOOTER
\*----------------------------------- */

.footer {
  background-color: #545454;
  color: white;
  width: 100%;
  padding: 4em 2em;
}

.footer-nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-position: inside;
}

.column {
  list-style: none;
  display: flex;
  flex-direction: column;

  & .items {
    list-style: none;
    padding: 0;

    & li {
      margin-top: 0.5em;
    }

    & li a {
      color: white;
      text-decoration: none;
    }
  }
}

.footer-elements {
  margin: 0.5em;
}

.legal {
  text-align: center;
  margin-top: 1em;
}

/* -----------------------------------*\
  #MODAL
\*----------------------------------- */

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0 0 0);
  background-color: rgb(0 0 0 / 40%);

  &.active {
    display: flex;
    align-items: flex-start;
  }
}

.modal-box {
  overflow: hidden;
  background-color: #fefefe;
  margin: auto;
  border-radius: 2em;
  border: 1px solid #888;
  width: 40%;
  position: relative;
}

.modal-content {
  padding: 4em 5em;
}

.close {
  color: #aaa;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.register-block,
.login-block,
.reset-password-block {
  display: none;

  &.active {
    display: block;
  }
}

.login-register-form .form-group,
.reset-password {
  margin: 1.3em 0;
}

.login-btn,
.register-btn {
  width: 100%;
  padding: 0.5em;

  &:hover {
    background-color: lightgray;
  }
}

/* .login-btn:hover,
.register-btn:hover {
} */

.google-btn {
  color: white;
  font-size: 1em;
  width: 100%;
  background: #4285f4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 1em;

  &:hover {
    background: #357ae8;
  }

  & .google-icon-wrapper {
    margin-right: auto;
    background: white;
    padding: 0.4em;
    border-radius: 50%;
  }

  & .btn-text {
    margin-right: auto;
  }
}

.toggle-login-register,
.toggle-reset-password {
  margin-top: 1em;
  display: block;
  font-family: var(--ff-poppins);
  color: var(--color-dark-gray);
  text-align: center;

  &:hover {
    color: var(--color-primary);
  }
}

.error-email,
.error-name,
.error-pass,
.error-passrep {
  border-color: red;
}

.error-email-msg-hidden,
.error-name-msg-hidden,
.error-pass-msg-hidden,
.error-passrep-msg-hidden {
  display: none;
  color: red;
}

.error-email-msg,
.error-name-msg,
.error-pass-msg,
.error-passrep-msg {
  display: block;
  color: red;
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

  .home {
    grid-template-columns: auto;
    width: 80%;
    font-size: 14px;
    justify-items: center;

    & img {
      width: 60%;
    }
  }

  .home .home-slogan {
    font-size: 5em;
  }

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

  .work-with-us img {
    width: 25%;
    margin-bottom: 4em;
  }

  .modal {
    margin: 0;
  }

  .modal-box {
    width: 80%;
  }

  .modal-content {
    padding: 3em 4em;
  }

  .values-properties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .team-members {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
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

  .home {
    width: 100%;
    padding: 0 1em 2em;

    & img {
      width: 80%;
    }
  }

  .home .home-slogan {
    font-size: 3em;
  }

  .work-with-us img {
    width: 60%;
    margin-bottom: 4em;
  }

  .slider-container {
    padding: 2em 0;
  }

  .glide__slide {
    transform: scale(0.9);
  }

  .glide__slide--active {
    transform: scale(0.95);
  }

  .glide__arrow i {
    font-size: 1.5em;
  }

  .container,
  .yellow div {
    display: block;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .yellow p {
    font-size: 0.6em;
  }

  .btn-teal {
    display: inline-block;
  }

  .footer-nav {
    flex-direction: column;
    padding: 2em;
    gap: 1em;
  }

  .modal-box {
    width: 95%;
  }

  .modal-content {
    padding: 1em 2em;
  }

  .values-properties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .team-members {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
