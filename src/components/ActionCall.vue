<template>
  <section class="container">
    <a href="#" class="btn btn-teal join-as-user">
      <p>Únete como usuario <font-awesome-icon icon="arrow-right" /></p>
    </a>
    <a href="hazte-cleaner.html" class="btn btn-teal">
      <p>Únete como cleaner <font-awesome-icon icon="arrow-right" /></p>
    </a>
  </section>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
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

@media (max-width: 500px) {
  .container {
    display: block;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .btn-teal {
    display: inline-block;
  }
}
</style>
