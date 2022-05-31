<script setup>
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "/firebase/config";
import { storeToRefs } from "pinia";
import { reactive, watch, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const { user } = storeToRefs(useAuthStore());

const state = reactive({
  works: "",
  userId: "",
});

const printCustomerWorks = async (id) => {
  const q = query(collection(db, "works"), where("customerId", "==", id));
  const works = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    works.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  state.works = works;
};

watch(
  () => user.uid,
  (id) => {
    console.log("hola");
  }
);

/* setTimeout(() => {
  printCustomerWorks();
}, 1000); */
</script>
<template>
  <div>{{ state.userId }}</div>
  <div class="table">
    <table class="record-table">
      <thead>
        <tr>
          <th>Núm. de servicio</th>
          <th>Fecha</th>
          <th>Dirección</th>
          <th>Cleaner</th>
          <th>Importe</th>
          <th>Horas</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="work in state.works">
          <td>{{ work.id.slice(-10) }}</td>
          <td>
            {{
              new Date(work.startDate.seconds * 1000).toLocaleDateString(
                "es-ES"
              )
            }}
          </td>
          <td>{{ work.address.line1 }}</td>
          <td>{{ work.address.line1 }}</td>
          <td>{{ work.total / 100 }}€</td>
          <td>{{ (work.endDate - work.startDate) / 3600 }}</td>
          <td v-if="work.endDate - new Date() < 0">🟡 Pendiente</td>
          <td v-else>🟢 Realizado</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-grid"></div>
</template>

<style>
.record-table {
  display: block;
  overflow-x: auto;
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #00cba9;
  border-style: solid;
  color: #000000;
}

table.record-table td,
table.record-table th {
  border-width: 2px;
  border-color: #00cba9;
  border-style: solid;
  padding: 3px;
  font-weight: bold;
}

table.record-table thead {
  background-color: #ffffff;
}
</style>
