<template>
  <div>
    <Modals />
    <Forms />
    <Searchbar />
    <Table />
  </div>
</template>

<script>
import Forms from "../components/Forms.vue";
import Table from "../components/Table.vue";
import Searchbar from "../components/Searchbar.vue";
import Modals from "../components/Modals.vue";

export default {
  components: {
    Forms,
    Table,
    Searchbar,
    Modals,
  },
};
</script>
