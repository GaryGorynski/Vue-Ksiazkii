<template>
  <div>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          v-model="$v.genre.value.$model"
          placeholder="Genre"
          @keyup.enter="submitedGenre"
        ></b-form-input>
        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
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
  props: {
    selectGenre: { type: Array, required: true },
  },
  data() {
    return {
      genre: {
        value: "",
      },
      submitStatus: null,
    };
  },
  methods: {
    submitedGenre: function () {
      this.$v.genre.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$emit("submitedGenre", {
          value: this.selectGenre.length - 1,
          text: this.genre.value,
        });
        this.submitStatus = "OK";
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

<style>
p {
  font-size: 12px;
  margin-bottom: 3px;
}
</style>
