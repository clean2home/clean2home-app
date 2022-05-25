<script setup>
const props = defineProps({
  description: String,
  works: Number,
  rating: Number,
});
console.log(props);
</script>
<template>
  <div class="container-cards">
    <div class="cleaner-container">
      <div class="cleaner-info">
        <!-- info -->
        <h3 class="about-me">
          <font-awesome-icon icon="quote-left" />Sobre mí
        </h3>
        <p class="cleaner-info-p">{{ props.description }}</p>
        <div class="works-rating">
          <p class="works">{{ props.works }} trabajos</p>
          <p class="rating">
            <font-awesome-icon icon="star" />{{ props.rating }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-cards {
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.cleaner-container {
  font-family: var(--ff-open-sans);
  color: var(--color-dark-gray);
  display: flex;
  width: 100%;
  max-width: 960px;
  min-width: 560px;
  box-shadow: 3px 4px 9px 2px #0000001e;
  border-radius: 8px;
  background-color: #fff;
}

.about-me {
  font-size: 2em;
  position: relative;
  bottom: 40px;
  font-family: var(--ff-poppins);
  color: var(--color-dark-gray);
}

.about-me i {
  font-size: 1.6em;
  margin-left: 10px;
  margin-right: 10px;
  color: var(--color-dark-gray);
}

.cleaner-info {
  width: 100%;
}

.cleaner-info-p {
  width: 100%;
  padding: 10px;
  font-size: 0.9em;
  min-height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  position: relative;
  bottom: 20px;
}

.works {
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
}

.works-rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .rating {
    font-size: 1.5em;
  }
}

.rating {
  margin-left: 60px;
  font-size: 1em;
}

@media (max-width: 760px) {
  .container-cards {
    width: 100%;
    padding: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .cleaner-container {
    margin-top: 40px;
    width: 100%;
    /* max-width: 550px; */
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .about-me {
    font-size: 1.7em;
  }

  .cleaner-info-p {
    width: 100%;
    font-size: 0.9em;
  }
}
</style>
