<template>
  <div class="forms">
    <AuthorForm
      v-bind="authorprops"
      v-on:submitedAuthor="submitAuthor($event)"
    />

    <GenreForm v-bind="authorprops" v-on:submitedGenre="submitGenre($event)" />

    <CreateBookForm
      v-bind="authorprops"
      v-on:createdBook="createBook($event)"
      v-on:updateSelectAuthor="updateSelectAuthor($event)"
      v-on:updateSelectGenre="updateSelectGenre($event)"
    />
    <div>
      <b-table v-model="items.X" striped hover :items="items">
        <template #cell(X)="data">
          <b class="text-danger" @click="deleteRow">{{ data.value }}</b>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
import { required, numeric } from "vuelidate/lib/validators";
import authorForm from "./authorForm.vue";
import genreForm from "./genreForm.vue";
import createBookForm from "./createBookForm.vue";

export default {
  components: {
    AuthorForm: authorForm,
    GenreForm: genreForm,
    CreateBookForm: createBookForm,
  },
  data() {
    return {
      authorprops: {
        selectedAuthor: null,
        selectedGenre: null,
        selectAuthor: [{ value: null, text: "Author" }],
        selectGenre: [{ value: null, text: "Genre" }],
        booklist: [],
      },
      items: [
        {
          title: "",
          author: "",
          bookID: "",
          releaseYear: "",
          authorID: "",
          genre: "",
          genreID: "",
          X: "",
        },
      ],
    };
  },
  validations: {
    book: {
      booktitle: { required },
      releaseyear: { required, numeric },
    },
  },

  methods: {
    submitAuthor: function (event) {
      this.authorprops.selectAuthor.push(event);
      console.log(this.authorprops.selectAuthor);
    },
    submitGenre: function (event) {
      this.authorprops.selectGenre.push(event);
    },
    createBook: function (event) {
      this.authorprops.booklist.push(event);
      let items = {
        title:
          this.authorprops.booklist[this.authorprops.booklist.length - 1][
            "booktitle"
          ],
        author:
          this.authorprops.selectAuthor[
            this.authorprops.selectAuthor.length - 1
          ]["text"],

        bookID: this.authorprops.booklist.length - 1,
        releaseYear:
          this.authorprops.booklist[this.authorprops.booklist.length - 1][
            "releaseyear"
          ],
        authorID:
          this.authorprops.booklist[this.authorprops.booklist.length - 1][
            "authorid"
          ],
        genre:
          this.authorprops.selectGenre[this.authorprops.selectGenre.length - 1][
            "text"
          ],
        genreID:
          this.authorprops.booklist[this.authorprops.booklist.length - 1][
            "genreid"
          ],
        X: "X",
      };

      this.items.push(items);
    },
    deleteRow: function (MouseEvent) {
      MouseEvent.target.parentElement.parentElement.remove();
    },
    updateSelectAuthor: function (event) {
      this.authorprops.selectedAuthor = event;
    },
    updateSelectGenre: function (event) {
      this.authorprops.selectedGenre = event;
    },
  },
};
</script>

<style>
.forms {
  margin-left: 50px;
}
</style>
