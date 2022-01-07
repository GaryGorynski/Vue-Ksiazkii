<template>
  <div class="forms">
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input
          v-model="text"
          placeholder="Author first name"
        ></b-form-input>
        <b-form-input
          v-model="text"
          placeholder="Author last name"
        ></b-form-input>
        <b-form-input v-model="text" placeholder="Author ID"></b-form-input>
        <b-button variant="primary" type="submit" value="create author"
          >Create Author</b-button
        >
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input v-model="text" placeholder="Genre"></b-form-input>
        <b-form-input v-model="text" placeholder="Genre ID"></b-form-input>

        <b-button variant="primary" type="submit" value="create genre"
          >Create Genre</b-button
        >
      </b-col>
    </b-row>
    <b-row class="my-5">
      <b-col sm="6">
        <b-form-input v-model="text" placeholder="Book title"></b-form-input>
        <b-form-input v-model="text" placeholder="Release year"></b-form-input>
        <!--       <b-form-select v-model="selected" :options="optionOne"></b-form-select> !-->
        <b-form-select
          v-model="selected"
          :options="option.text"
          v-for="option in options"
          :key="option.text"
        ></b-form-select>
        <b-button variant="success" type="submit" value="create author"
          >Create Book</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      // Nie wiem jak zrobić to dynamicznie więc na razie robię tak.
      options: [
        { value: null, text: "Author" },
        { value: null, text: "Genre" },
      ],
    };
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
