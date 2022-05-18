<script setup>
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { useUiStore } from "@/stores/ui";
const { activeLogin } = useUiStore();

const regex = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
const passwordSecurity = (value) => regex.test(value);
const state = reactive({
  name: "",
  email: "",
  password: "",
  passwordRepeat: "",
});
const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    password: {
      required,
      minLength: minLength(8),
      passwordSecurity: helpers.withMessage(
        "Debe contener mínimo una letra mayúscula, una minúscula y un número",
        passwordSecurity
      ),
    },
    passwordRepeat: { required, sameAs: sameAs(state.password) },
  };
});
const v$ = useValidate(rules, state);

const handleSubmit = (e) => {
  e.preventDefault();
  v$.value.$validate();
  if (!v$.value.$error) {
    console.log("bien");
  }
};
</script>
<template>
  <div class="register-block">
    <h2>Crea una cuenta</h2>
    <form action="POST" class="login-register-form" id="register-form">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="&#xf007; tu nombre"
          v-model="state.name"
        />
        <span class="error-msg" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          placeholder="&#xf0e0; tu@email.com"
          v-model="state.email"
        />
        <span class="error-msg" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          class="form-control"
          name="password"
          id="password"
          placeholder="&#xf023;  &bull;&bull;&bull;&bull;&bull;&bull;"
          v-model="state.password"
        />
        <span class="error-msg" v-if="v$.password.$error">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="password">Repite tu contraseña</label>
        <input
          type="password"
          class="form-control"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="&#xf023;  &bull;&bull;&bull;&bull;&bull;&bull;"
          v-model="state.passwordRepeat"
        />
        <span class="error-msg" v-if="v$.passwordRepeat.$error">
          {{ v$.passwordRepeat.$errors[0].$message }}
        </span>
      </div>
      <button class="btn register-btn" @click="handleSubmit">
        Crear cuenta
      </button>
    </form>
    <a href="#" class="toggle-login-register" @click="activeLogin"
      >¿Ya tienes una cuenta? Inicia sesión</a
    >
  </div>
</template>
<style lang="scss" scoped>
.error-msg {
  color: red;
}
</style>
