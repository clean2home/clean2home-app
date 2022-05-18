<script setup>
import { useUiStore } from "@/stores/ui";
const { activeLogin } = useUiStore();
</script>
<template>
  <div class="register-block">
    <h2>Crea una cuenta</h2>
    <form action="POST" class="login-register-form" id="register-form">
      <div class="form-group">
        <label for="nameRegister">Nombre</label>
        <input
          type="text"
          class="form-control"
          name="nameRegister"
          id="nameRegister"
          placeholder="&#xf007; tu nombre"
        />
        <label class="error-name-msg-hidden">Nombre introducido inválido</label>
      </div>
      <div class="form-group">
        <label for="emailRegister">Email</label>
        <input
          type="email"
          class="form-control"
          name="emailRegister"
          id="emailRegister"
          placeholder="&#xf0e0; tu@email.com"
        />
        <label class="error-email-msg-hidden">Email introducido inválido</label>
      </div>
      <div class="form-group">
        <label for="passwordRegister">Contraseña</label>
        <input
          type="password"
          class="form-control"
          name="passwordRegister"
          id="passwordRegister"
          placeholder="&#xf023;  &bull;&bull;&bull;&bull;&bull;&bull;"
        />
        <label class="error-pass-msg-hidden"
          >Contraseña introducida inválida (debe contener al menos, 6 caracteres
          o más, una mayuscula, una minúscula y un caracter numérico)</label
        >
      </div>
      <div class="form-group">
        <label for="passwordRegister">Repite tu contraseña</label>
        <input
          type="password"
          class="form-control"
          name="passwordRepeatRegister"
          id="passwordRepeatRegister"
          placeholder="&#xf023;  &bull;&bull;&bull;&bull;&bull;&bull;"
        />
        <label class="error-passrep-msg-hidden"
          >Las contraseñas no coinciden</label
        >
      </div>
      <button class="btn register-btn">Crear cuenta</button>
    </form>
    <a href="#" class="toggle-login-register" @click="activeLogin"
      >¿Ya tienes una cuenta? Inicia sesión</a
    >
  </div>
</template>
