<template>
  <div>
    <Modals />
    <Forms />
  </div>
</template>

<script>
import Forms from "../components/Forms.vue";
import Table from "../components/Table.vue";
import Modals from "../components/Modals.vue";

export default {
  components: {
    Forms,
    Table,
    Modals,
  },
};
</script>
