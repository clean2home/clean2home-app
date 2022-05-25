<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { startSignOut } from "../../modules/auth";
const { user } = storeToRefs(useAuthStore());

const handleSignOut = () => {
  startSignOut();
};
</script>
<template>
  <li class="navbar-links">
    <div class="navbar-user">
      <span id="navbar-name">{{ user.displayName }}</span>
      <div class="navbar-img-container">
        <img
          referrerpolicy="no-referrer"
          id="navbar-img"
          :src="user.photoURL"
          :alt="user.name"
          @click="handleSignOut"
        />
      </div>
    </div>
  </li>
</template>
<style lang="scss">
.navbar-user {
  display: flex;
  font-size: 1.4em;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & img {
    cursor: pointer;
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    margin-left: 1em;
  }
}
</style>
