import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "ui",
  state: () => ({
    modal: {
      isOpen: false,
      form: "login",
    },
    checkout: {
      isOpen: false,
    },
  }),
  getters: {},
  actions: {
    toggleCheckout() {
      this.checkout.isOpen = !this.checkout.isOpen;
    },
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
