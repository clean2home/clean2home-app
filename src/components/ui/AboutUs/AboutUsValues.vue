<template>
  <section class="values">
    <h2>Nuestros valores</h2>
    <div class="values-properties">
      <div class="properties">Honestidad</div>
      <div class="properties">Calidad del servicio</div>
      <div class="properties">Puntualidad</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/base.css";
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

// MEDIA QUERYS
@media (max-width: 1440px) {
  .values-properties {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .values-properties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (max-width: 500px) {
  .values-properties {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
