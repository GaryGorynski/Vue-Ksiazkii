<template>
  <div id="book-creator">
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          v-model="book.booktitle"
          placeholder="Book title"
          type="text"
          :class="{
            'is-invalid': $v.book.booktitle.$error,
            'is-valid': !$v.book.booktitle.$invalid,
          }"
        ></b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.book.booktitle.required" class="text-danger"
            >Book title is required</span
          >
        </div>
        <b-form-input
          :class="{
            'is-invalid': $v.book.releaseyear.$error,
            'is-valid': !$v.book.releaseyear.$invalid,
          }"
          v-model="book.releaseyear"
          placeholder="Release year"
          type="number"
        ></b-form-input>
        <div class="invalid-feedback">
          <span v-if="!$v.book.releaseyear.required" class="text-danger"
            >Release year required</span
          >
          <span v-else-if="!$v.book.releaseyear.numeric" class="text-danger"
            >Has to be a number</span
          >
        </div>
        <b-form-select v-model="test" :options="selectAuthor"> </b-form-select>
        <b-form-select v-model="selectedGenre" :options="selectGenre">
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
    selectedAuthor: { required: true },
    selectedGenre: { required: true },
    selectAuthor: { type: Array, required: true },
    selectGenre: { type: Array, required: true },
  },
  data() {
    return {
      book: {
        booktitle: "",
        releaseyear: "",
      },
      testowo: "",
    };
  },
  computed: {
    test: {
      get: function () {
        return this.selectedAuthor;
      },
      set: function (value) {},
    },
  },
  methods: {
    createdBook: function () {
      this.$emit("createdBook", {
        booktitle: this.book.booktitle,
        releaseyear: this.book.releaseyear,
        bookid: Math.floor(Math.random() * 100000),
        authorid: this.test,
        genreid: this.selectedGenre,
      });
    },
  },
  validations: {
    book: {
      booktitle: { required },
      releaseyear: { required, numeric },
    },
  },
};
</script>

<style></style>
