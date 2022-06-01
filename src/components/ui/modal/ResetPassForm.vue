<script setup>
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { useUiStore } from "@/stores/ui";
import { resetPassword } from "../../../modules/auth";
const { activeLogin } = useUiStore();

const state = reactive({
  email: "",
});
const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Campo obligatorio", required),
      email: helpers.withMessage("El email debe de ser válido", email),
    },
  };
});
const v$ = useValidate(rules, state);

const handleSubmit = (e) => {
  v$.value.$validate();
  e.preventDefault();
  if (!v$.value.$error) {
    resetPassword(state.email);
  }
};
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
          :class="{ error: v$.email.$error }"
          name="emailReset"
          id="emailReset"
          placeholder="✉️ tu@email.com"
          v-model="state.email"
        />
        <span class="error-msg" v-if="v$.email.$error">
          {{ v$.email.$errors[0].$message }}
        </span>
      </div>
      <button class="btn register-btn" @click="handleSubmit">
        Enviar correo electrónico
      </button>
    </form>
    <a href="#" class="toggle-login-register" @click="activeLogin"
      >¿Ya tienes una cuenta? Inicia sesión</a
    >
  </div>
</template>
<style lang="scss" scoped>
.error {
  border: 2px solid red;
}
.error-msg {
  color: red;
  font-size: 0.8em;
}
</style>
