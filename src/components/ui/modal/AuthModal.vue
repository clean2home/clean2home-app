<script setup>
import { useUiStore } from "@/stores/ui";
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import ResetPassForm from "./ResetPassForm.vue";
import WaveUp from "../../../assets/WaveUp.vue";

const { toggleModal, modal } = useUiStore();
</script>
<template>
  <div id="login-register-modal" class="modal">
    <!-- Modal content -->
    <div class="modal-box">
      <div class="modal-content">
        <span class="close" id="close-modal" @click="toggleModal">&times;</span>
        <LoginForm v-if="modal.form === 'login'" />
        <RegisterForm v-else-if="modal.form === 'register'" />
        <ResetPassForm v-else-if="modal.form === 'password-reset'" />
      </div>
      <WaveUp class="wave" />
    </div>
  </div>
</template>
<style lang="scss">
.wave {
  margin-top: -50px;
}
.modal {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0 0 0);
  background-color: rgb(0 0 0 / 40%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-box {
  overflow: hidden;
  background-color: #fefefe;
  margin: auto;
  border-radius: 2em;
  border: 1px solid #888;
  width: 40%;
  position: relative;
}

.modal-content {
  padding: 4em 5em;
}

.close {
  color: #aaa;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.login-register-form .form-group,
.reset-password {
  margin: 1.3em 0;
}

.login-btn,
.register-btn {
  width: 100%;
  padding: 0.5em;

  &:hover {
    background-color: lightgray;
  }
}

/* .login-btn:hover,
.register-btn:hover {
} */

.google-btn {
  color: white;
  font-size: 1em;
  width: 100%;
  background: #4285f4;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em 1em;

  &:hover {
    background: #357ae8;
  }

  & .google-icon-wrapper {
    margin-right: auto;
    background: white;
    padding: 0.4em;
    border-radius: 50%;
  }

  & .btn-text {
    margin-right: auto;
  }
}

.toggle-login-register,
.toggle-reset-password {
  margin-top: 1em;
  display: block;
  font-family: var(--ff-poppins);
  color: var(--color-dark-gray);
  text-align: center;

  &:hover {
    color: var(--color-primary);
  }
}

/* -----------------------------------*\
  #MEDIA QUERIES
\*----------------------------------- */

@media (max-width: 1024px) {
  .modal {
    margin: 0;
  }

  .modal-box {
    width: 80%;
  }

  .modal-content {
    padding: 3em 4em;
  }
}

@media (max-width: 500px) {
  .modal-box {
    width: 95%;
  }

  .modal-content {
    padding: 1em 2em;
  }
}
</style>
