<script setup>
import { computed, reactive } from "vue";
import { useUiStore } from "../../stores/ui";
import CleanerCheckout from "@/assets/cleaner-checkout.svg";
import { helpers, maxValue, minValue, required } from "@vuelidate/validators";
import useValidate from "@vuelidate/core";
import { useAuthStore } from "../../stores/auth";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const { user } = useAuthStore();

const checkDate = (value) => {
  const today = new Date().getTime();
  const date = new Date(value).getTime();

  return date > today;
};

const { toggleCheckout } = useUiStore();

const props = defineProps({
  img: String,
  name: String,
  price: String,
  id: String,
});

const state = reactive({
  date: 0,
  hours: 1,
  subtotal: props.price,
  isLoading: false,
});

const rules = computed(() => {
  return {
    date: {
      required: helpers.withMessage("Campo obligatorio", required),
      checkDate: helpers.withMessage(
        "Debes elegir un dia posterior a hoy",
        checkDate
      ),
    },
    hours: {
      required: helpers.withMessage("Campo obligatorio", required),
      minLength: helpers.withMessage(
        "Debes contratar al cleaner minimo 1h",
        minValue(1)
      ),
      maxLength: helpers.withMessage(
        "No puedes contratar a un cleaner más de 8h, es ilegal",
        maxValue(8)
      ),
    },
  };
});
const v$ = useValidate(rules, state);

const priceChange = () => {
  state.subtotal = props.price * state.hours;
};

const handleSubmit = (e) => {
  e.preventDefault();
  v$.value.$validate();
  if (!v$.value.$error) {
    state.isLoading = true;
    fetch("/.netlify/functions/stripe-charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: props.price * 100,
        hours: state.hours,
        cleanerId: props.id,
        customerId: user.uid,
        customerEmail: user.email,
        startDate: new Date(state.date).getTime(),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        window.location.href = res.sessionUrl;
      })
      .catch(() => {
        state.isLoading = false;
      });
  }
};
</script>
<template>
  <div class="container">
    <div class="modal">
      <Loading
        v-model:active="state.isLoading"
        color="#00cba9"
        :width="150"
        :height="150"
      />
      <span class="close" id="close-modal" @click="toggleCheckout"
        >&times;</span
      >
      <div class="modal-content">
        <div>
          <img class="cleaner-illustration" :src="CleanerCheckout" alt="" />
        </div>
        <div class="form">
          <h1 class="home-slogan">¡Sólo nos queda un paso!</h1>
          <img class="cleaner-img" :src="props.img" :alt="props.name" />
          <form @submit="handleSubmit">
            <div class="form-group">
              <label for="date">¿Qué dia necesitas a {{ props.name }}?</label>
              <input
                type="datetime-local"
                class="form-control"
                :class="{ error: v$.date.$error }"
                name="date"
                id="date"
                v-model="state.date"
              />
              <span class="error-msg" v-if="v$.date.$error">
                {{ v$.date.$errors[0].$message }}
              </span>
            </div>
            <div class="form-group">
              <label for="hours">¿Cuántas horas necesitas sus servicios?</label>
              <input
                type="number"
                class="form-control"
                :class="{ error: v$.hours.$error }"
                name="hours"
                id="hours"
                v-model="state.hours"
                @change="priceChange"
              />
              <span class="error-msg" v-if="v$.hours.$error">
                {{ v$.hours.$errors[0].$message }}
              </span>
            </div>
            <p>Subtotal: {{ state.subtotal }}€</p>
            <button class="btn btn-teal">¡Contratar!</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home-slogan {
  font-family: var(--ff-poppins);
  font-size: 2.5em;
  line-height: 1;
  text-align: right;

  & strong {
    color: var(--color-primary);
  }
}
.container {
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0 0 0);
  background-color: rgb(0 0 0 / 40%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  width: 80vw;
  max-width: 900px;
  height: 80vh;
  overflow: hidden;
  background-color: #fefefe;
  margin: auto;
  border-radius: 1.5em;
  border: 1px solid #888;
  position: relative;
}
.modal-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.cleaner-illustration {
  width: 100%;
  height: 100%;
}

.form {
  flex-grow: 2;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input {
    display: block;
    width: 100%;
  }
}

.close {
  color: #aaa;
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.cleaner-img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.btn-teal {
  display: block;
  width: 100%;
  margin-top: 1em;
  background-color: var(--color-primary);
  border-radius: 20px;
  box-shadow: 0 5px teal;
  color: white;
  justify-content: center;
  font-family: var(--ff-poppins);
  border: none;
}

.btn-teal:hover {
  background-color: var(--color-primary-dark);
}

.btn-teal:active {
  box-shadow: 0 2.5px 0 teal;
  position: relative;
  top: 3px;
}

@media (max-width: 760px) {
  .cleaner-illustration {
    display: none;
  }

  .home-slogan {
    text-align: center;
  }

  .form {
    align-items: center;
  }
  .modal-content {
    padding: 0.8em;
  }
}
@media (max-width: 500px) {
  .modal {
    width: 95vw;
  }
}
</style>
