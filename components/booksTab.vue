<template>
  <div>
    <div>
      <b-tab @click="test" title="Books">
        <b-button v-b-modal.modal-1 variant="link">Books</b-button>

        <b-modal id="modal-1">
          <template #modal-header> Tytuł książki </template>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://wolnelektury.pl/api/books/")
      .then((response) => (this.info = response.data));
  },
  methods: {
    test: function () {
      console.log(this.info);
    },
  },
};
</script>

<style></style>
