import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { setDoc, doc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../firebase/config";

import { useUiStore } from "@/stores/ui";
import { useAuthStore } from "@/stores/auth";

const provider = new GoogleAuthProvider();

export const registerWithEmail = async (name, email, password) => {
  const { toggleModal } = useUiStore();
  const { setUser } = useAuthStore();
  createUserWithEmailAndPassword(auth, email, password)
    .then(async ({ user }) => {
      const profileImage = `https://api.multiavatar.com/${user.uid}.png`;
      await setDoc(doc(db, "users", user.uid), { cleaner: false });
      await updateProfile(user, { displayName: name, photoURL: profileImage });
      setUser(user);
      toggleModal();
      Swal.fire({
        title: "Registro correcto",
        text: "Ahora ya puedes empezar a buscar Cleaners en tu zona",
        icon: "success",
      });
    })
    .catch((error) => {
      console.warn(error);
      Swal.fire({
        title: "Error",
        text: "Error en el registro",
        icon: "error",
        confirmButtonColor: "#00cba9",
      });
    });
};

export const loginWithEmail = (email, password) => {
  const { toggleModal } = useUiStore();
  const { getUser } = useAuthStore();
  signInWithEmailAndPassword(auth, email, password)
    .then(async () => {
      getUser();
      toggleModal();
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    })
    .catch((error) => {
      console.warn(error);
      Swal.fire({
        title: "Oops...",
        text: "Las credenciales no son correctas",
        icon: "error",
        confirmButtonColor: "#00cba9",
      });
    });
};

export const loginWithGoogle = () => {
  const { toggleModal } = useUiStore();
  const { getUser } = useAuthStore();
  signInWithPopup(auth, provider)
    .then(async ({ user }) => {
      const name = user.displayName.split(" ")[0];

      const userDb = await getDoc(doc(db, "users", user.uid));
      if (!userDb.exists()) {
        await setDoc(doc(db, "users", user.uid), { cleaner: false });
      }
      updateProfile(user, { displayName: name });
      if (!user.photoURL) {
        const profileImage = `https://api.multiavatar.com/${user.uid}.png`;
        await updateProfile(user, { photoURL: profileImage });
      }
      getUser();
      toggleModal();
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    })
    .catch((error) => {
      // Handle Errors here.
      console.warn(error);
      Swal.fire({
        title: "Error",
        text: "Error en el registro",
        icon: "error",
        confirmButtonColor: "#00cba9",
      });
    });
};

export const startSignOut = () => {
  const { logout } = useAuthStore();
  signOut(auth)
    .then(() => {
      logout();
      Swal.fire({
        icon: "success",
        title: "¡Hasta pronto!",
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const resetPassword = (email) => {
  const { toggleModal } = useUiStore();
  toggleModal();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      showResetPasswordNotification();
    })
    .catch(() => {
      showResetPasswordNotification();
    });
};

const showResetPasswordNotification = () => {
  Swal.fire({
    icon: "success",
    title:
      "Si tu correo está registrado, recibirás un mail en tu bandeja de entrada para resetear tu contraseña",
    timer: 4000,
    timerProgressBar: true,
    showConfirmButton: false,
    allowOutsideClick: false,
    confirmButtonColor: "#00cba9",
  });
};
