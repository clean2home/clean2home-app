<script setup>
import { computed, reactive, ref } from "vue";
import useValidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  required,
  alpha,
  numeric,
  maxLength,
} from "@vuelidate/validators";
import { startCreateCleaner } from "@/modules/hazte-cleaner";
import Swal from "sweetalert2";

const inputImage = ref(null);

const state = reactive({
  name: "",
  cp: "",
  city: "",
  phone: "",
  description: "",
  price: "",
  image: "",
  imagePreview: "",
});

const onImageChange = (e) => {
  const file = e.target.files[0];
  state.imagePreview = URL.createObjectURL(file);
};

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("Campo obligatorio", required),
    },
    cp: {
      required: helpers.withMessage("Campo obligatorio", required),
      email: helpers.withMessage(
        "Debes ingresar un código postal válido",
        numeric
      ),
      minLength: helpers.withMessage(
        "Debes ingresar un código postal válido",
        minLength(5)
      ),
      maxLength: helpers.withMessage(
        "Debes ingresar un teléfono válido",
        maxLength(5)
      ),
    },
    city: {
      required: helpers.withMessage("Campo obligatorio", required),
      alpha: helpers.withMessage("La ciudad solo puede contener letras", alpha),
    },
    phone: {
      required: helpers.withMessage("Campo obligatorio", required),
      email: helpers.withMessage("Debes ingresar un teléfono válido", numeric),
      minLength: helpers.withMessage(
        "Debes ingresar un teléfono válido",
        minLength(9)
      ),
      maxLength: helpers.withMessage(
        "Debes ingresar un teléfono válido",
        maxLength(9)
      ),
    },
    description: {
      required: helpers.withMessage("Campo obligatorio", required),
    },
    price: {
      required: helpers.withMessage("Campo obligatorio", required),
      email: helpers.withMessage(
        "Debes ingresar un precio/hora válido",
        numeric
      ),
    },
  };
});

const v$ = useValidate(rules, state);

const handleSubmit = (e) => {
  v$.value.$validate();
  e.preventDefault();
  if (!v$.value.$error && inputImage.value.files[0]) {
    startCreateCleaner(
      state.name,
      state.cp,
      state.city,
      state.phone,
      state.description,
      state.price,
      state.image
    );
  } else {
    Swal.fire({
      title: "Oops...",
      icon: "error",
      text: "Comprueba si has dejado algun campo en blanco o hay algun dato incorrecto",
    });
  }
};
</script>

<template>
  <div class="hazte-cleaner-form-container">
    <h3>Tus datos</h3>
    <form action="POST" class="hazte-cleaner-form" @submit="handleSubmit">
      <div class="form-group">
        <label for="name">Nombre completo</label>
        <input
          type="text"
          class="form-control"
          :class="{ error: v$.name.$error }"
          name="name"
          id="name"
          placeholder="&#xf007; Fernando López"
          v-model="state.name"
        />
        <span class="error-msg" v-if="v$.name.$error">
          {{ v$.name.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="cp">Código postal</label>
        <input
          type="number"
          class="form-control"
          :class="{ error: v$.cp.$error }"
          name="cp"
          id="cp"
          placeholder="&#xf015; 47001"
          v-model="state.cp"
        />
        <span class="error-msg" v-if="v$.cp.$error">
          {{ v$.cp.$errors[0].$message }}
        </span>
        <label for="city">Ciudad</label>
        <input
          type="text"
          class="form-control"
          :class="{ error: v$.city.$error }"
          name="city"
          id="city"
          placeholder="&#xf64f; Valladolid"
          v-model="state.city"
        />
        <span class="error-msg" v-if="v$.city.$error">
          {{ v$.city.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="phone">Teléfono</label>
        <input
          type="tel"
          class="form-control"
          :class="{ error: v$.phone.$error }"
          name="phone"
          id="phone"
          placeholder="&#xf095; 666999999"
          v-model="state.phone"
        />
        <span class="error-msg" v-if="v$.phone.$error">
          {{ v$.phone.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="description">Una pequeña descripción sobre ti</label>
        <textarea
          name="description"
          id="description"
          :class="{ error: v$.description.$error }"
          rows="5"
          draggable="false"
          v-model="state.description"
        ></textarea>
        <span class="error-msg" v-if="v$.description.$error">
          {{ v$.description.$errors[0].$message }}
        </span>
      </div>
      <div class="form-group">
        <label for="price">¿Cúal es tu precio/hora?</label>
        <input
          type="number"
          class="form-control"
          :class="{ error: v$.price.$error }"
          name="price"
          id="price"
          placeholder="&#xf153; 15"
          v-model="state.price"
        />
        <span class="error-msg" v-if="v$.price.$error">
          {{ v$.price.$errors[0].$message }}
        </span>
      </div>
      <p class="hazte-cleaner-text">
        ¡Ahora sube una imagen que te favorezca! Recuerda que debe de ser una
        imagen profesional
      </p>
      <div class="form-group image">
        <div>
          <label class="btn btn-upload" for="image">Subir imagen</label>
          <input
            ref="inputImage"
            type="file"
            id="image"
            accept="image/*"
            @change="onImageChange"
          />
        </div>
        <div class="preview">
          <img id="image-preview" :src="state.imagePreview" />
        </div>
      </div>
      <button class="btn btn-submit" type="submit">Enviar solicitud</button>
    </form>
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
.hazte-cleaner-text {
  margin-top: 1em;
  font-size: 1.3em;
}
.form-group.image {
  border: 2px solid rgb(31 31 31);
  border-radius: 20px;
  padding: 0.3em 1em;
  margin: 0.5em 0 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.form-group.image input {
  display: none;
}

.btn-upload {
  background: #e4e4e4;
  color: rgb(29 29 29);

  &:hover {
    background: #9c9c9c;
    color: rgb(29 29 29);
  }
}

.preview img {
  width: 100px;
  height: auto;
}

.btn-submit {
  margin: 0 auto;
  display: block;
  width: 50%;
  background: var(--color-primary);
  color: white;
}
</style>
