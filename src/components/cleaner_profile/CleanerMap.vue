<script setup>
import { reactive } from "vue";

const props = defineProps({
  city: String,
});

const state = reactive({
  mapsApi: import.meta.env.VITE_MAPS_KEY,
});
const miMetodo = () => {
  if (!props.city) {
    return "Madagascar";
  } else {
    return props.city;
  }
};
</script>

<template>
  <div id="maps">
    <iframe
      class="cleaner-map"
      width="600"
      height="550"
      style="border: 0"
      allowfullscreen
      :src="`https://www.google.com/maps/embed/v1/place?key=${
        state.mapsApi
      }-u5KCR5Ew&q=${miMetodo()}`"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
#maps {
  /* margin-top: 300px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  position: relative;
}

#maps iframe {
  height: 100%;
  width: 120%;
  max-width: 1000px;
  border-radius: 8px;
  border-style: none;
  box-shadow: 3px 4px 9px 2px #0000001e;
  margin-bottom: 80px;
}

@media (max-width: 1260px) {
  #maps {
    width: 75vw;
  }
}
</style>
