<script setup>
import HomeIllustration from "../../assets/home-illustration.svg";
</script>
<template>
  <section class="home">
    <div>
      <h1 class="home-slogan">Lleva el <strong>orden</strong> a tu hogar</h1>
      <h2 class="home-description">Contrata Cleaners cerca de ti</h2>
      <p class="home-text">
        En Clean2Home conectamos a gente que busca servicios de limpieza con
        profesionales locales de confianza.
      </p>
      <form action="/cleaners" method="GET" class="home-form">
        <input
          type="text"
          name="cityFilter"
          id="cityFilter"
          placeholder="Introduce ciudad"
        />
        <button type="submit" class="btn home-btn">Buscar</button>
      </form>
    </div>
    <img :src="HomeIllustration" alt="" />
  </section>
</template>
<style lang="scss" scoped>
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
  #MEDIA QUERIES
\*----------------------------------- */
@media (max-width: 1440px) {
  .home {
    font-size: 15px;
  }

  .home-slogan {
    font-size: 3em;
  }
}

@media (max-width: 1024px) {
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
}

@media (max-width: 500px) {
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
}
</style>
