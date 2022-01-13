<template>
  <div>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          :class="{
            'is-invalid': $v.genre.value.$error,
            'is-valid': !$v.genre.value.$invalid,
          }"
          v-model="genre.value"
          placeholder="Genre"
        ></b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.genre.value.required" class="text-danger"
            >Genre is required</span
          >
        </div>
        <b-button
          variant="primary"
          type="submit"
          value="create genre"
          @click="submitedGenre"
          >Create Genre</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      genre: {
        value: "",
      },
    };
  },
  methods: {
    submitedGenre: function () {
      this.$v.genre.$touch();
      if (this.$v.$invalid) {
        console.log("dupa");
      } else {
        this.$emit("submitedGenre", {
          value: Math.floor(Math.random() * 100000),
          text: this.genre.value,
        });
        this.genre.value = "";
      }
    },
  },
  validations: {
    genre: {
      value: { required },
    },
  },
};
</script>

<style></style>
