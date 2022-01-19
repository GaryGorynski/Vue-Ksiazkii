<template>
  <div>
    <Tabs />
    <Forms />
  </div>
</template>

<script>
import Forms from "../components/Forms.vue";

import Tabs from "../components/Tabs.vue";

export default {
  components: {
    Forms,
    Tabs,
  },
};
</script>
