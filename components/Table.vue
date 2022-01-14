<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          Title: "",
          Author_first_name: "",
          Author_last_name: "",
          Book_ID: "",
          Release_year: "",
          Author_ID: "",
          Genre: "",
          Genre_ID: "",
          X: "",
        },
      ],
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
