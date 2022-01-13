<template>
  <div>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          type="text"
          placeholder="Author first name"
          v-model="$v.author.value.$model"
          :class="{
            'is-invalid': $v.author.value.$error,
            'is-valid': !$v.author.value.$invalid,
          }"
        >
        </b-form-input>

        <div class="invalid-feedback">
          <span v-if="!$v.author.value.required" class="text-danger"
            >Author first name is required</span
          >
        </div>

        <b-form-input
          type="text"
          placeholder="Author last name"
          v-model="$v.author.text.$model"
          :class="{
            'is-invalid': $v.author.text.$error,
            'is-valid': !$v.author.text.$invalid,
          }"
        ></b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.author.text.required" class="text-danger"
            >Author last name is required</span
          >
        </div>

        <b-button
          variant="primary"
          type="submit"
          value="create author"
          @click="submitedAuthor"
          >Create Author</b-button
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
      author: {
        value: "",
        text: "",
      },
    };
  },
  methods: {
    submitedAuthor: function () {
      if (this.author.value === "" || this.author.text === "") {
        this.$v.author.$touch();
      } else {
        this.$emit("submitedAuthor", {
          value: Math.floor(Math.random() * 100000),
          text: this.author.value + " " + this.author.text,
        });
        this.author.value = "";
        this.author.text = "";
      }
      console.log(this.selectedAuthor);
    },
  },
  validations: {
    author: {
      value: { required },
      text: { required },
    },
  },
};
</script>

<style></style>
