import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: false,
    cleaner: false,
  }),
  getters: {},
  actions: {
    async getUser() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.isCleaner();
        }
      });
    },
    async isCleaner() {
      const userRef = doc(db, `users/${this.user.uid}`);
      const userDb = await getDoc(userRef);
      const { cleaner } = userDb.data();
      this.cleaner = cleaner;
    },
    logout() {
      this.user = false;
    },
  },
});
