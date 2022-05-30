<template>
  <section class="container-2">
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
  </section>
</template>
<style lang="scss" scoped>
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
  color: var(--color-dark-gray);
  font-family: var(--ff-poppins);
  font-weight: bold;
  //text-shadow: 0 1.5px 0 rgb(50 50 50 / 50%);
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

/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 500px) {
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
}
</style>
