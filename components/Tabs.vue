<template>
  <div>
    <b-tabs pills card content-class="mt-3 ml-5">
      <BooksTab />
      <AuthorsTab />
      <GenresTab />
      <CollectionsTab />
    </b-tabs>
  </div>
</template>

<script>
import booksTab from "./booksTab.vue";
import authorsTab from "./authorsTab.vue";
import genresTab from "./genresTab.vue";
import collectionsTab from "./collectionsTab.vue";
export default {
  components: {
    BooksTab: booksTab,
    AuthorsTab: authorsTab,
    GenreTab: genresTab,
    CollectionsTab: collectionsTab,
  },
  data() {
    return {};
  },
};
</script>

<style>
.modals {
  padding-bottom: 20px;
}
.nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
