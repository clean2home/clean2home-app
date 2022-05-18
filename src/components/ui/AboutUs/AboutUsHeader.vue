<template>
  <section class="home-about">
    <div>
      <h1 class="home-slogan">
        Porque queremos <strong>hacer fácil la limpieza</strong> de tu hogar
      </h1>
      <h2 class="home-description">Muchos porqués para elegirnos</h2>
      <p class="home-text">
        Porque somos una empresa que se preocupa de verdad, queremos
        despreocuparte a ti de tener que buscar a la mejor persona que se ocupe
        de lo que más aprecias, tu hogar. Porque para que te quedes tranquilo/a
        cuando te vayas de casa, tenemos un seguro para ti a cero coste del que
        se ocupa de todo. Porque nos ocupamos de seleccionar previamente a los
        mejores cleaners con una rigurosa entrevista y experiencia demostrable.
        Por eso y mucho más estamos seguros de que no te vas a arrepentir de
        elergirnos.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/base.css";
.home-slogan {
  font-family: var(--ff-poppins);
  font-size: 4em;
  line-height: 1;

  & strong {
    color: var(--color-primary);
  }
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

// MEDIA QUERYS

@media (max-width: 1440px) {
  .home-slogan {
    font-size: 3em;
  }
}
</style>
