<script setup>
import { useUiStore } from "@/stores/ui";
import { reactive } from "vue";
import { loginWithEmail } from "@/modules/auth";
import { loginWithGoogle } from "../../../modules/auth";
const { activeRegister, activePasswordReset } = useUiStore();

const state = reactive({
  email: "",
  password: "",
});

const handleSubmit = (e) => {
  e.preventDefault();
  loginWithEmail(state.email, state.password);
};

const handleGoogleLogin = () => {
  loginWithGoogle();
};
</script>
<template>
  <div class="login-block">
    <h2>Inicia sesión</h2>
    <form action="POST" class="login-register-form" id="login-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          placeholder="✉️ tu@email.com"
          v-model="state.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="🔒  &bull;&bull;&bull;&bull;&bull;&bull;"
          v-model="state.password"
        />
      </div>
      <button class="btn login-btn" @click="handleSubmit">
        Iniciar sesión
      </button>
      <a href="#" @click="activePasswordReset()" class="toggle-reset-password"
        >¿Has olvidado tu contraseña?</a
      >
    </form>
    <hr />
    <div class="btn google-btn" @click="handleGoogleLogin">
      <div class="google-icon-wrapper">
        <img
          class="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p class="btn-text"><b>Sign in with Google</b></p>
    </div>
    <a href="#" class="toggle-login-register" @click="activeRegister"
      >¿Aún no tienes cuenta? Regístrate</a
    >
  </div>
</template>
