<script setup>
import { useUiStore } from "@/stores/ui";
const { activeLogin } = useUiStore();
</script>
<template>
  <div class="reset-password-block">
    <h2>Reestablecer contraseña</h2>
    <form action="POST" class="reset-password-form" id="reset-password-form">
      <div class="form-group reset-password">
        <label for="emailReset">Email</label>
        <input
          type="email"
          class="form-control"
          name="emailReset"
          id="emailReset"
          placeholder="&#xf0e0; tu@email.com"
        />
      </div>
      <button class="btn register-btn">Enviar correo electrónico</button>
    </form>
    <a href="#" class="toggle-login-register" @click="activeLogin"
      >¿Ya tienes una cuenta? Inicia sesión</a
    >
  </div>
</template>
