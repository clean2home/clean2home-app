<script setup>
import ClientProfile from "@/components/ClientProfile.vue";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  if (!localStorage.getItem("userId")) {
    router.push("/");
  }
});
</script>

<template>
  <main>
    <ClientProfile />
  </main>
</template>
