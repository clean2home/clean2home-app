<script setup>
import { useUiStore } from "@/stores/ui";
const { activeRegister, activePasswordReset } = useUiStore();
</script>
<template>
  <div class="login-block">
    <h2>Inicia sesión</h2>
    <form action="POST" class="login-register-form" id="login-form">
      <div class="form-group">
        <label for="emailLogin">Email</label>
        <input
          type="email"
          class="form-control"
          name="emailLogin"
          id="emailLogin"
          placeholder="&#xf0e0; tu@email.com"
        />
      </div>
      <div class="form-group">
        <label for="passwordLogin">Contraseña</label>
        <input
          type="password"
          class="form-control"
          name="passwordLogin"
          id="passwordLogin"
          placeholder="&#xf023;  &bull;&bull;&bull;&bull;&bull;&bull;"
        />
      </div>
      <button class="btn login-btn">Iniciar sesión</button>
      <a href="#" @click="activePasswordReset()" class="toggle-reset-password"
        >¿Has olvidado tu contraseña?</a
      >
    </form>
    <hr />
    <div class="btn google-btn">
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
