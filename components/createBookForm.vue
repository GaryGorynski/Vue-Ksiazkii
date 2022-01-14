<template>
  <div id="book-creator">
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          v-model="$v.book.booktitle.$model"
          placeholder="Book title"
          type="text"
        ></b-form-input>
        <div class="error" v-if="!$v.book.booktitle.isUnique">
          This username is already registered.
        </div>
        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>

        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>

        <b-form-input
          v-model="$v.book.releaseyear.$model"
          placeholder="Release year"
          type="text"
        ></b-form-input>
        <p class="text-success" v-if="submitStatus === 'OK'">
          Thanks for your submission!
        </p>
        <p class="text-danger" v-if="submitStatus === 'ERROR'">
          Please fill the form correctly.
        </p>
        <b-form-select v-model="computedAuthor" :options="selectAuthor">
        </b-form-select>
        <b-form-select v-model="computedGenre" :options="selectGenre">
        </b-form-select>
        <b-button
          variant="success"
          type="submit"
          value="create author"
          @click="createdBook"
          aria-required="true"
          >Create Book</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required, numeric } from "vuelidate/lib/validators";
export default {
  props: {
    selectedAuthor: { type: null, required: true },
    selectedGenre: { type: null, required: true },
    selectAuthor: { type: Array, required: true },
    selectGenre: { type: Array, required: true },
    booklist: { type: Array, required: true },
  },
  data() {
    return {
      book: {
        booktitle: "",
        releaseyear: "",
      },
      submitStatus: null,
    };
  },
  computed: {
    computedAuthor: {
      get: function () {
        return this.selectedAuthor;
      },
      set: function (value) {
        this.$emit("updateSelectAuthor", value);
      },
    },
    computedGenre: {
      get: function () {
        return this.selectedGenre;
      },
      set: function (value) {
        this.$emit("updateSelectGenre", value);
      },
    },
  },
  methods: {
    createdBook: function () {
      this.$v.book.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$emit("createdBook", {
          booktitle: this.book.booktitle,
          releaseyear: this.book.releaseyear,
          bookid: this.booklist.length - 1,
          authorid: this.computedAuthor,
          genreid: this.computedGenre,
        });
        this.submitStatus = "OK";
        this.book.booktitle = "";
        this.book.releaseyear = "";
      }
    },
  },
  validations: {
    book: {
      booktitle: {
        required,
        isUnique(value) {
          // standalone validator ideally should not assume a field is required
          if (value === "") return true;

          // simulate async call, fail for all logins with even length
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(typeof value === "string" && value.length % 2 !== 0);
            }, 350 + Math.random() * 300);
          });
        },
      },
      releaseyear: { required, numeric },
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
