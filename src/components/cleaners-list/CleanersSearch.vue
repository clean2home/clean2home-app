<script setup>
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "/firebase/config";
</script>
<template>
  <main>
    <div class="detail-cleaners">
      <div class="header-cleaners">
        <div class="container-h1">
          <h1 class="cleaners-slogan">
            Encuentra a la persona ideal para <strong>mimar tu hogar</strong>
          </h1>
        </div>
        <form action="/cleaners" method="GET" class="cleaners-form">
          <input
            type="text"
            name="cityFilter"
            id="cityFilter"
            placeholder="Introduce C.P o ciudad"
          />
          <button class="btn search">Buscar</button>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
.header-cleaners {
  margin: 0 auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 10px;
}

.container-h1 {
  display: flex;
  justify-content: center;
}

.cleaners-slogan {
  color: #313230;
  font-family: var(--ff-poppins);
  width: 70%;
  font-size: 4em;
  line-height: 1.4;
  margin-top: 1em;
  padding: 20px;
  min-width: 750px;
}

.cleaners-slogan strong {
  color: var(--color-primary);
}

.cleaners-form {
  width: 70%;
  display: flex;
  align-items: center;
  min-width: 750px;
}

.cleaners-form input {
  font-family: var(--ff-poppins);
  background: #ececec;
  border-radius: 0.8em;
  border: none;
  width: 100%;
  padding: 1em;
  font-size: 1.2em;
  margin: 1em;
}

.cleaners-form input:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 0 2px var(--color-primary);
}

.search {
  font-size: 1em;
  background: var(--color-secondary);
  box-shadow: 0 6px 0 var(--color-secondary-very-dark);
  color: white;
  display: inline-block;
  margin-bottom: 6px;
}

.search:hover {
  background-color: var(--color-secondary-dark);
}

.search:active {
  box-shadow: 0 3px 0 var(--color-secondary-very-dark);
  position: relative;
  top: 5px;
}

@media (max-width: 1024px) {
  .active {
    display: block;
    margin-top: 1em;

    &:first-child {
      margin-top: 3em;
    }
  }
}

@media (max-width: 760px) {
  .header-cleaners {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .cleaners-slogan {
    padding: 10px;
    width: 100%;
    min-width: 350px;
    font-size: 2.8em;
  }

  .cleaners-form {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 350px;
    font-size: 0.8em;
  }
}

@media (max-width: 500px) {
  .search {
    max-width: 150px;
    width: 100%;
    margin: 10px 0;
    font-size: 1.1em;
    align-self: flex-start;
  }
}
</style>
