<template>
  <div>
    <div>
      <b-tab title="Books">
        <b-button v-b-modal.modal-1 variant="link">Books</b-button>
        <b-modal id="modal-1">
          <template #modal-header> Tytuł książki </template>
          <ol>
            <li id="modalBookGenre">Gatunek:</li>
            <li id="modalBookAuth">Autor:</li>
            <li id="modalBookLang">Język:</li>
          </ol>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
