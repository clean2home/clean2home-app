<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { startSignOut } from "../../modules/auth";
const { user, cleaner } = storeToRefs(useAuthStore());

const handleSignOut = () => {
  startSignOut();
};
</script>
<template>
  <li class="navbar-links">
    <div class="navbar-user">
      <span class="navbar-name">
        <span v-if="cleaner" class="cleaner">C</span>
        {{ user.displayName }}
      </span>
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

.navbar-name {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.cleaner {
  margin-right: 0.5em;
  color: #fff;
  font-size: 0.6em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-radius: 50%;
  height: 20px;
  width: 20px;
}
</style>
