<script></script>
<template>
  <footer class="footer">
    <ul class="footer-nav">
      <li class="column">
        <h3 class="column-title">Contacto</h3>
        <ul class="items">
          <li>
            <p>922 25 88 744</p>
          </li>
          <li>
            <a href="mailto:clean2homeeoi@gmail.com" class="mailto"
              >contacto@clean2home.es</a
            >
          </li>
        </ul>
      </li>
      <li class="column">
        <h3 class="column-title">Servicios</h3>
        <ul class="items">
          <li>
            <a href="/cleaners">Servicios</a>
          </li>
          <li>
            <a href="/limpieza">Limpieza</a>
          </li>
        </ul>
      </li>
      <li class="column">
        <h3 class="column-title">Información</h3>
        <ul class="items">
          <li>
            <a href="/como-funciona">Cómo funciona</a>
          </li>
          <li>
            <a href="/about-us">Sobre nosotros</a>
          </li>
          <li>
            <a href="/hazte-cleaner">Trabaja con nosotros</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="legal">
      <small
        >&copy; 2022 <b> Clean2Home </b> - Todos los Derechos Reservados
      </small>
    </div>
  </footer>
</template>
<style lang="scss">
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
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 500px) {
  .footer-nav {
    flex-direction: column;
    padding: 2em;
    gap: 1em;
  }
}
</style>
