<template>
  <div>
    <table class="table table-hover">
      <thead class="table__head">
        <tr>
          <td scope="row">Title</td>
          <td scope="row">Author first name</td>
          <td scope="row">Author last name</td>
          <td scope="row">Book ID</td>
          <td scope="row">Release year</td>
          <td scope="row">Author ID</td>
          <td scope="row">Genre</td>
          <td scope="row">Genre ID</td>
          <td class="table__data-delete" scope="row">x</td>
        </tr>
      </thead>
      <tbody id="table__body"></tbody>
    </table>
  </div>
</template>

<script>
export default {};
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
