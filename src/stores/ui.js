import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "ui",
  state: () => ({
    modal: {
      isOpen: false,
      form: "login",
    },
  }),
  getters: {},
  actions: {
    toggleModal() {
      this.modal.isOpen = !this.modal.isOpen;
    },
    activeRegister() {
      this.modal.form = "register";
    },
    activeLogin() {
      this.modal.form = "login";
    },
    activePasswordReset() {
      this.modal.form = "password-reset";
    },
  },
});
