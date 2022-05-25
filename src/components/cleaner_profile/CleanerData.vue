<script setup>
const props = defineProps({
  img: String,
  name: String,
  city: String,
  cp: String,
  price: String,
});
</script>

<template>
  <div class="cleaner-profile-container">
    <div class="cleaner-image">
      <!-- imagen -->
      <img :src="props.img" class="services-profile" />
    </div>
    <div class="cleaner-location">
      <h2 class="cleaner-name">{{ props.name }}</h2>
      <h3 class="cleaner-location-city">
        <a href="#maps">
          <font-awesome-icon class="location-city" icon="map-pin" />
          <div class="cleaner-city">{{ props.city }}</div>
        </a>
        <p class="cp-profile"><small>Código Postal:</small> {{ props.cp }}</p>
      </h3>
      <p class="price">
        <strong>{{ props.price }}€</strong>
        <small>/hora</small>
      </p>
      <!-- <div class="cleaner-btn">
        <a href="#modal-click" class="btn hire">Contactar</a>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --color-primary: #00cba9;
  --color-primary-dark: #00a88c;
  --color-secondary: #3462ac;
  --color-secondary-dark: #26477e;
  --color-secondary-very-dark: #172b4b;
  --color-dark-gray: #313230;
  --color-light-yellow: #ffd97d;
  --ff-open-sans: "Open Sans", helvetica, arial, sans-serif;
  --ff-poppins: "Poppins", "Open Sans", helvetica, arial, sans-serif;
}
.back-icon {
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: flex-start;
}

.back-icon i {
  color: var(--color-dark-gray);
  font-size: 2em;
}

.cleaner-profile {
  width: 90%;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cleaner-profile-container {
  font-family: var(--ff-open-sans);
  color: var(--color-dark-gray);
  padding: 20px;
  margin: 20px;
  display: flex;
  width: 100%;
  max-width: 960px;
  min-width: 560px;
  box-shadow: 3px 4px 9px 2px #0000001e;
  border-radius: 8px;
  background-color: #fff;
  justify-content: space-evenly;
}

.cleaner-image {
  padding-top: 45px;
  display: flex;
  width: 350px;
  height: 400px;
  object-fit: cover;
  overflow: hidden;
  margin: 0;
}

.cleaner-image > img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: cover;
  overflow: hidden;
}

.cleaner-name {
  font-family: var(--ff-poppins);
  font-size: 2em;
  color: #313230;
  display: flex;
  align-items: center;
  text-align: center;
}

.cleaner-location {
  min-width: 350px;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cleaner-location-city {
  font-family: var(--ff-open-sans);
  color: #313230;
  font-size: 1.6em;
}

.cleaner-location-city a {
  display: flex;
  color: #313230;
  justify-content: center;
  align-items: center;
}

.cleaner-location-city .location-city {
  font-size: 1.2em;
  position: relative;
  top: 5px;
  margin-right: 20px;
  color: var(--color-primary);
}

.works-rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .rating {
    font-size: 1.5em;
  }
}

.cp-profile {
  margin-top: 20px;
  font-size: 0.6em;
  position: relative;
}

.price {
  margin-top: 30px;
  margin-bottom: 40px;
  font-family: var(--ff-open-sans);
  color: var(--color-dark-gray);
  font-size: 1em;
}

.price strong {
  color: var(--color-primary);
  font-size: 2.6em;
  margin-left: 10px;
}

.cleaner-btn {
  margin-top: 40px;
  display: flex;
}

.hire {
  background: var(--color-light-yellow);
  color: #313230;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 6px 0 #c18c32;
}

.hire:hover {
  background-color: #e5c285;
}

.hire:active {
  box-shadow: 0 2.5px 0 #c18c32;
  position: relative;
  top: 5px;
}
@media (max-width: 760px) {
  .cleaner-profile-container {
    padding: 10px;
    margin: 10px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 960px;
    min-width: 320px;
  }

  .cleaner-image {
    padding-top: 10px;
    display: flex;
    justify-content: center;
    width: 280px;
    height: 310px;
  }

  .cleaner-image > img {
    border-radius: 20%;
  }

  .cleaner-name {
    font-size: 1.7em;
  }

  .cleaner-location {
    min-width: 300px;
    padding: 1.2em 0;
  }

  .cleaner-location-city {
    font-size: 1.3em;
  }

  .price {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .price strong {
    font-size: 2.2em;
  }

  .cleaner-btn {
    margin-top: 20px;
  }

  .hire {
    font-size: 0.9em;
  }
}
</style>
