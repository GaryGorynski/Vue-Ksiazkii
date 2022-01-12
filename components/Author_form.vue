<template>
  <div>
    <div id="author-form">
      <b-row class="my-5">
        <b-col sm="6">
          <b-form-input
            type="text"
            placeholder="Author first name"
            :v-model="$v.author.value.$model"
            :class="{
              'is-invalid': $v.author.value.$error,
              'is-valid': !$v.author.value.$invalid,
            }"
          >
          </b-form-input>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      props: ["author"],
      methods: {
        submitAuthor: function () {
          if (this.author.value === "" || this.author.text === "") {
            this.$v.author.$touch();
          } else {
            this.selectAuthor.push({
              value: Math.floor(Math.random() * 100000),
              text: this.author.value + " " + this.author.text,
            });
            this.author.value = "";
            this.author.text = "";
          }
        },
      },
      validations: {
        author: {
          value: { required },
          text: { required },
        },
      },
    };
  },
};
</script>

<style></style>
