<template>
  <div>
    <div>
      <b-tab class="books" title="Books">
        <div class="test">
          <Table :fields="fields" :items="currentPageItems" />
          <b-button @click="first" class="mt-20" variant="primary">{{
            buttons.first
          }}</b-button>
          <b-button @click="previous" class="mt-20" variant="primary">{{
            buttons.previous
          }}</b-button>
          <b-button @click="next" class="mt-20" variant="primary">{{
            buttons.next
          }}</b-button>
          <b-button @click="last" class="mt-20" variant="primary">{{
            buttons.last
          }}</b-button>
        </div>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchBooks } from "../services/bookService";
import Table from "./Table.vue";
export default {
  components: {
    Table: Table,
  },
  data() {
    return {
      fields: ["title", "author", "kind", "genre"],
      filter: null,
      filterOn: [],
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
  created() {
    fetchBooks().then(
      (response) =>
        (this.fetchedData = this.createPaginated(
          response.data
        )) /*response.data*/
    );
    console.log(this.paginatedBooklist);
  },
  methods: {
    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedBooklist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    },
    first: function () {
      this.currentPage = 0;
    },
    previous: function () {
      this.currentPage = this.currentPage - 1;
    },
    next: function () {
      this.currentPage = this.currentPage + 1;
    },
    last: function () {
      this.currentPage = this.paginatedBooklist.length - 1;
      console.log(this.currentPageItems);
    },
  },
  computed: {
    currentPageItems: {
      get: function () {
        return this.paginatedBooklist[this.currentPage];
      },
      set: function () {
        return this.paginatedBooklist[this.currentPage];
      },
    },
  },
};
</script>

<style>
.books__btn {
  height: 20px;
}
.books {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;

  height: 100%;
  align-items: flex-start;
}

.test {
  flex-wrap: nowrap;
  width: 1600px;
  margin-top: 20px;
}
</style>
