<template>
  <div class="modals">
    <b-col lg="12" class="pt-3">
      <b-button
        class="w-25"
        variant="btn btn-link"
        v-b-modal.modal-1
        v-for="(modal, index) in modals"
        :key="index"
        >{{ modal.title }}</b-button
      >

      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modals: [
        {
          title: "Books",
        },
        {
          title: "Authors",
        },
        {
          title: "Genres",
        },
        {
          title: "Collections",
        },
      ],
    };
  },
};
</script>

<style></style>
