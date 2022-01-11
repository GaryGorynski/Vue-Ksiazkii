<template>
  <div>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "Title",
        "Author first name",
        "Author last name",
        "Book ID",
        "Release year",
        "Author ID",
        "Genre",
        "Genre ID",
        "X",
      ],
      items: [],
    };
  },
};
</script>

<style>
.table {
  height: 100px;
  text-align: center;
  border: 2px solid black;
  width: 100%;
}
tr,
th {
  text-align: center;
}
</style>
