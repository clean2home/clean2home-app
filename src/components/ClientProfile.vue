<script setup>
import { db } from "/firebase/config";
import { reactive, onMounted } from "vue";
import { startSignOut } from "../modules/auth";
import { collection, where, query, getDocs, orderBy } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  works: [],
});

const getCustomerWorks = async () => {
  const works = [];
  const q = query(
    collection(db, "works"),
    where("customerId", "==", localStorage.getItem("userId")),
    orderBy("startDate")
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (fbDocument) => {
    works.push({
      id: fbDocument.id,
      ...fbDocument.data(),
    });
  });
  state.works = works;
};

onMounted(() => {
  getCustomerWorks();
});

const handleSignOut = () => {
  startSignOut();
  router.push({ path: `/`, replace: true });
};
</script>
<template>
  <div class="container">
    <h1>Mis reservas</h1>
    <p v-if="state.works.length === 0">Todavía no has hecho ninguna reserva</p>
    <div v-else class="table">
      <table class="record-table">
        <thead>
          <tr>
            <th scope="col">Ref. de servicio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Dirección</th>
            <th scope="col">Cleaner</th>
            <th scope="col">Importe</th>
            <th scope="col">Horas</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="work in state.works" :key="work.id">
            <td data-label="Ref. de servicio">{{ work.id.slice(-10) }}</td>
            <td data-label="Fecha">
              {{
                new Date(work.startDate.seconds * 1000).toLocaleDateString(
                  "es-ES"
                )
              }}
            </td>
            <td data-label="Dirección">{{ work.address.line1 }}</td>
            <td data-label="Cleaner">{{ work.cleanerName }}</td>
            <td data-label="Importe">{{ work.total / 100 }}€</td>
            <td data-label="Horas">
              {{ (work.endDate.seconds - work.startDate.seconds) / 3600 }}
            </td>
            <td
              v-if="work.endDate.seconds < new Date().getTime()"
              data-label="Estado"
            >
              🟡 Pendiente
            </td>
            <td v-else data-label="Estado">🟢 Realizado</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span class="btn home-btn work-with-us-btn" @click="handleSignOut"
      >Cerrar sesión</span
    >
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0 auto;
  min-height: 50vh;
}

h1 {
  font-family: var(--ff-poppins);
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 1em;
}

table {
  border-radius: 10px;
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  margin-bottom: 2em;
}

table caption {
  border-radius: 10px;
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  border-radius: 10px;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.home-btn {
  display: block;
  margin: 1em auto;
  background: rgb(203, 22, 22);
  box-shadow: 0 6px 0 rgb(158, 41, 41);
  color: white;

  &:hover {
    background: rgb(198, 35, 35);
  }

  &:active {
    box-shadow: 0 3px 0 rgb(158, 41, 41);
    position: relative;
    top: 5px;
  }
}

@media screen and (max-width: 800px) {
  .container {
    width: 100%;
    padding: 1em;
  }
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
