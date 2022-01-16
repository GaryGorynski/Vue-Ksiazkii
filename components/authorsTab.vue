<template>
  <div>
    <div>
      <b-tab title="Authors">
        <b-button v-b-modal.modal-2 variant="link">Authors</b-button>
        <b-modal id="modal-2" title="Authors">
          <p class="my-2">Hello from Authors!</p>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
