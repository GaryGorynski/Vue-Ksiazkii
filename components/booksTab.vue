<template>
  <div>
    <div class="dups">
      <b-tab class="dups" title="Books" @click="fetch">
        <b-button
          variant="link"
          class="dupa"
          v-b-modal.modal-1
          v-for="(book, index) in currentPageItems"
          :key="index"
        >
          {{ index }}. {{ book.title }}
        </b-button>
        <div class="test">
          <b-button class="mt-20" variant="primary">{{
            buttons.previous
          }}</b-button>
          <b-button @click="next" class="mt-20" variant="primary">{{
            buttons.next
          }}</b-button>
          <b-button class="mt-20" variant="primary">{{
            buttons.last
          }}</b-button>
        </div>
        <b-modal id="modal-1">
          <template modal-header> </template>
          <template #modal-footer>
            <a href="#" id="modalAudio">Pobierz Audiobook</a>
          </template>
        </b-modal>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchBooks } from "../services/bookService";

export default {
  data() {
    return {
      fetchedData: [],
      currentPage: 0,
      perPage: 10,
      paginatedBooklist: [],
      totalPages: 0,
      buttons: {
        first: "First",
        previous: "Previous",
        next: "Next",
        last: "Last",
      },
    };
  },
  methods: {
    fetch: function () {
      fetchBooks().then(
        (response) =>
          (this.fetchedData = this.createPaginated(
            response.data
          )) /*response.data*/
      );
    },
    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedBooklist.push(data.slice(start, start + this.perPage));
      }
      console.log(this.paginatedBooklist[0]);
    },
    next: function () {
      console.log(this.currentPageItems);
    },
  },
  computed: {
    currentPageItems: {
      get: function () {
        return this.paginatedBooklist[0];
      },
    },
  },
};
</script>

<style>
.dupa {
  height: 20px;
}
.dups {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 350px;
  align-items: flex-start;
}

.test {
  align-self: flex-end;

  margin-top: 20px;
}
</style>
