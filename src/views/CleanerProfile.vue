<script setup>
import CleanerData from "@/components/cleaner_profile/CleanerData.vue";
import CleanerDescription from "@/components/cleaner_profile/CleanerDescription.vue";
import CleanerMap from "@/components/cleaner_profile/CleanerMap.vue";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
const route = useRoute();
const id = route.params.id;

const state = reactive({
  name: "",
  description: "",
  works: 0,
  price: "",
  rating: 0,
  cp: "",
  img: "",
  city: "",
  phone: "",
  email: "",
  verified: "",
});

const getData = async () => {
  const collRef = collection(db, "cleaners");
  const querySnapshot = await getDocs(collRef);
  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      state.img = doc.data().image;
      state.name = doc.data().name;
      state.city = doc.data().city;
      state.cp = doc.data().cp;
      state.price = doc.data().price;
      state.description = doc.data().description;
      state.works = doc.data().works;
      state.rating = doc.data().rating;
    }
  });
};
onMounted(() => {
  getData();
});
</script>

<template>
  <main>
    <section class="cleaner-profile">
      <CleanerData
        :img="state.img"
        :name="state.name"
        :city="state.city"
        :cp="state.cp"
        :price="state.price"
      />
      <CleanerDescription
        :description="state.description"
        :works="state.works"
        :rating="state.rating"
      />
      <CleanerMap :city="state.city" />
    </section>
  </main>
</template>
<style lang="scss" scoped>
.cleaner-profile {
  width: 90%;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
