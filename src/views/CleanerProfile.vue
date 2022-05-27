<script setup>
import CleanerData from "@/components/cleaner_profile/CleanerData.vue";
import CleanerDescription from "@/components/cleaner_profile/CleanerDescription.vue";
import CleanerMap from "@/components/cleaner_profile/CleanerMap.vue";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { useUiStore } from "@/stores/ui";
import CheckoutModal from "../components/cleaner_profile/CheckoutModal.vue";

const { checkout } = useUiStore();

const route = useRoute();
const id = route.params.id;

const state = reactive({
  id: id,
  name: "",
  description: "",
  works: "",
  price: "",
  rating: "",
  cp: "",
  img: "",
  city: "",
  phone: "",
  email: "",
  verified: "",
});

const getData = async () => {
  const docRef = doc(db, "cleaners", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  state.img = data.image;
  state.name = data.name;
  state.city = data.city;
  state.cp = data.cp;
  state.price = data.price;
  state.description = data.description;
  state.works = data.works;
  state.rating = data.rating;
};
onMounted(() => {
  getData();
});
</script>

<template>
  <main>
    <CheckoutModal
      v-if="checkout.isOpen"
      :img="state.img"
      :name="state.name"
      :price="state.price"
      :id="state.id"
    />
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
main {
  overflow-y: hidden;
}
.cleaner-profile {
  width: 90%;
  margin: 5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
