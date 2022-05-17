<script setup>
import Glide from "@glidejs/glide";
import { onMounted } from "vue";

onMounted(() => {
  new Glide(".glide", {
    type: "carousel",
    focusAt: "center",
    perView: 4,
    gap: 70,
    autoplay: 7000,
    keyboard: true,
    breakpoints: {
      1400: {
        perView: 3,
      },
      1024: {
        perView: 2,
        gap: 70,
      },
      600: {
        perView: 1,
      },
    },
  }).mount();
});
</script>

<template>
  <div class="slider-container">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-1.jpg"
              alt="imagen2"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" style="color: lightgrey" />
            </div>
            <blockquote class="slider-card-text">
              <p>
                Me parece un servicio súper recomendable. El trato del cleaner
                es inmejorable y lo mejor es que puedes contactar con cualquiera
                que haya disponible a tiempo real, por lo que si tienes una
                urgencia viene genial.
              </p>
              <footer>
                <cite>María P.</cite>
                <small>Madrid</small>
              </footer>
            </blockquote>
          </li>
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-3.jpg"
              alt="imagen2"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
            </div>
            <blockquote class="slider-card-text">
              <p>
                Me ha salvado la vida ésta aplicación, muy buenos precios en
                general y sencilla de utilizar, eliges a tu cleaner, viene a
                casa y listo. Repetiré seguro.
              </p>
              <footer>
                <cite>Eduardo F.</cite>
                <small>Barcelona</small>
              </footer>
            </blockquote>
          </li>
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-4.jpg"
              alt="reseña 1"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
            </div>
            <blockquote class="slider-card-text">
              <p>
                No sabía muy bien a quién contratar para el servicio de limpieza
                doméstica, pero viendo las valoraciones de los cleaners es muy
                fácil decidirte por alguien responsable y de confianza. Un
                servicio y calidad de 10.
              </p>
              <footer>
                <cite>Cristian M.</cite>
                <small>Vigo</small>
              </footer>
            </blockquote>
          </li>
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-2.jpg"
              alt="reseña 2"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
            </div>
            <blockquote class="slider-card-text">
              <p>La volveré a usar. Ya la recomendé a amigos.</p>
              <footer>
                <cite>Pilar T.</cite>
                <small>Málaga</small>
              </footer>
            </blockquote>
          </li>
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-6.jpg"
              alt="reseña 3"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
            </div>
            <blockquote class="slider-card-text">
              <p>
                La verdad que es bastante útil para conseguir alguien que te
                eche una mano en casa cuando te mudas de ciudad y no conoces a
                nadie para recomendaciones.
              </p>
              <footer>
                <cite>Sara G.</cite>
                <small>Valencia</small>
              </footer>
            </blockquote>
          </li>
          <li class="glide__slide slider-card">
            <img
              class="gatos"
              src="../../assets/reviewers/review-5.jpg"
              alt="reseña 4"
            />
            <div class="slider-card-stars">
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" />
              <font-awesome-icon icon="star" style="color: lightgrey" />
            </div>
            <blockquote class="slider-card-text">
              <p>Muy buenos servicios, rápido y fácil de usar.</p>
              <footer>
                <cite>Héctor G.</cite>
                <small>Sevilla</small>
              </footer>
            </blockquote>
          </li>
        </ul>
        <div class="glide__arrows" data-glide-el="controls">
          <button
            class="glide__arrow glide__arrow--left"
            aria-label="izquierda"
            data-glide-dir="<"
          >
            <font-awesome-icon class="arrow" icon="angle-left" />
          </button>
          <button
            class="glide__arrow glide__arrow--right"
            aria-label="derecha"
            data-glide-dir=">"
          >
            <font-awesome-icon class="arrow" icon="angle-right" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
@import "@glidejs/glide/dist/css/glide.theme.min.css";
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
  border: none;
  & .arrow {
    color: #00000050;
    font-size: 3em;

    &:active {
      transform: scale(1.4);
      transition: transform 100ms;
    }
  }
}
</style>
