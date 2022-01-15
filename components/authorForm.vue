<template>
  <div>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          type="text"
          placeholder="Author first name"
          v-model="$v.author.value.$model"
        >
        </b-form-input>

        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <b-form-input
          type="text"
          placeholder="Author last name"
          v-model="$v.author.text.$model"
        >
        </b-form-input>
        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>

        <b-button
          variant="primary"
          type="submit"
          value="create author"
          @keyup.enter="submitedAuthor"
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
  props: {
    selectAuthor: { type: Array, required: true },
  },
  data() {
    return {
      author: {
        value: "",
        text: "",
      },
      submitStatus: null,
    };
  },

  methods: {
    submitedAuthor: function () {
      this.$v.author.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$emit("submitedAuthor", {
          value: this.selectAuthor.length - 1,
          text: this.author.value + " " + this.author.text,
        });
        this.submitStatus = "OK";
      }

      this.author.value = "";
      this.author.text = "";
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

<style>
p {
  font-size: 12px;
  margin-bottom: 3px;
}
</style>
