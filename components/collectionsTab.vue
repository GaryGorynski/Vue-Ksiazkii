<template>
  <div>
    <div>
      <b-tab class="collections" title="Collections" @click="fetch">
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
import { fetchCollection } from "../services/collectionService";

export default {
  data() {
    return {
      fields: ["title"],
      fetchedData: [],
      currentPage: 0,
      perPage: 10,
      paginatedCollectionlist: [],
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
      fetchCollection().then(
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
        this.paginatedCollectionlist.push(
          data.slice(start, start + this.perPage)
        );
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
      this.currentPage = this.paginatedCollectionlist.length - 1;
    },
  },
  computed: {
    currentPageItems: {
      get: function () {
        return this.paginatedCollectionlist[this.currentPage];
      },
      set: function () {
        return this.paginatedCollectionlist[this.currentPage];
      },
    },
  },
};
</script>

<style>
.collections__btn {
  height: 20px;
}
.collections {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
}

.test {
  align-self: flex-start;

  margin-top: 20px;
}
</style>
