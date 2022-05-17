<script setup>
import { RouterLink } from "vue-router";
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
        <form class="cleaners-form">
          <input
            type="text"
            name="cityFilter"
            id="cityFilter"
            placeholder="Introduce C.P o ciudad"
          />
          <a
            href="javascript:;"
            onclick="this.href='cleaners.html?cityFilter=' + document.getElementById('cityFilter').value"
            class="btn search"
            >Buscar</a
          >
        </form>
      </div>
    </div>
  </main>
</template>

<style>
/* -----------------------------------*\
  #HEADER
\*----------------------------------- */
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

/* -----------------------------------*\
  #CLEANERS CARDS
\*----------------------------------- */

.fa-circle-check {
  color: #00cba9;
}

.container-cards {
  margin: 20px auto;
  margin-bottom: 200px;
  padding: 10px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
}

.cleaner-container {
  color: #313230;
  padding: 20px;
  margin: 20px;
  display: flex;
  width: 100%;
  max-width: 950px;
  min-width: 760px;
  box-shadow: 3px 5px 9px 2px #0000003e;
  border-radius: 5px;
}

.cleaner-image {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.cleaner-image > img {
  object-fit: cover;
  height: 140px;
  width: 140px;
}

.nombre-cleaner {
  min-width: 100px;
}

.cleaner-info {
  width: 90%;
}

.cleaner-info-p {
  width: 90%;
  padding: 10px;
  font-size: 0.9em;
  min-height: 65px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.btn .cleaners-more {
  display: inline-block;
}

.container-name-rating {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.rating-star {
  display: flex;
  align-items: center;
  justify-items: center;
}

.fa-star {
  color: #f9c339;
}

.rating {
  text-align: center;
  margin: 1px;
}

.price {
  text-align: center;
  color: #313230;
  font-size: 1.6em;
}

.works {
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
}

.cleaner-btn {
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}

.hire {
  background: #ececec;
  color: #313230;
  font-size: 0.8em;
  text-align: center;
}

.hire:hover {
  background-color: #d6d6d6;
}

/* stylelint-disable-next-line no-descending-specificity */
.cleaners-more {
  height: 60px;
  background-color: var(--color-primary);
  color: #fff;
  box-shadow: 0 6px 0 #026555;
  margin-bottom: 100px;
}

.cleaners-more:hover {
  background-color: var(--color-primary-dark);
}

.cleaners-more:active {
  box-shadow: 0 3px 0 var(--color-secondary-very-dark);
  position: relative;
  top: 5px;
}

.city {
  font-size: 1.2em;
  font-style: italic;
  font-weight: 900;
}

/* -----------------------------------*\
  #FOOTER
\*----------------------------------- */

.footer {
  background-color: #545454;
  color: white;
  width: 100%;
  padding: 4em 2em;
}

.footer-nav {
  color: #fff;
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
  #MEDIA QUERIES CENTRADO
\*----------------------------------- */
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

  .container-cards {
    width: 92%;
    padding: 5px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .cleaner-container {
    width: 95%;
    max-width: 550px;
    min-width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .price {
    margin-bottom: 15px;
  }

  .container-name-rating {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .cleaner-btn {
    margin-bottom: 5px;
  }

  .cleaner-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .works {
    margin-left: 0;
    margin-bottom: 15px;
  }

  .cleaner-info-p {
    width: 95%;
    text-align: center;
    font-size: 0.9em;
  }
}

@media (max-width: 500px) {
  .footer-nav {
    flex-direction: column;
    padding: 2em;
    gap: 1em;
  }

  .search {
    max-width: 150px;
    width: 100%;
    margin: 10px 0;
    font-size: 1.1em;
    align-self: flex-start;
  }
}
</style>
