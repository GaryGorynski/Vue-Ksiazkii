<template>
  <div>
    <div>
      <b-tab class="authors" title="Authors" @click="fetch">
        <div>
          <Table
            :current-page="currentPage"
            :per-page="perPage"
            id="my-table"
            :fields="fields"
            :items="fetchedData"
          />
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
          ></b-pagination>
        </div>
        <div class="author-creator">
          <b-row class="my-5">
            <b-col md="12">
              <b-form-input
                type="text"
                placeholder="Author first name"
                v-model="$v.author.value.$model"
              >
              </b-form-input>

              <p class="text-success" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="text-danger" v-if="submitStatus === 'ERROR'">
                Please fill the form correctly.
              </p>
              <b-form-input
                type="text"
                placeholder="Author last name"
                v-model="$v.author.text.$model"
                @keyup.enter="submitedAuthor"
              >
              </b-form-input>
              <p class="text-success" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="text-danger" v-if="submitStatus === 'ERROR'">
                Please fill the form correctly.
              </p>

              <b-button
                variant="primary"
                type="button"
                value="create author"
                @click="submitedAuthor"
                >Create Author</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { fetchAuthors } from "../services/authorService";
import { required } from "vuelidate/lib/validators";
import Table from "./Table.vue";
export default {
  props: {
    selectAuthor: { type: Array, required: true },
  },
  components: {
    Table: Table,
  },
  data() {
    return {
      fields: ["name"],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
      author: {
        value: "",
        text: "",
      },
      submitStatus: null,
    };
  },
  methods: {
    fetch: function () {
      fetchAuthors()
        .then(
          (response) => (this.fetchedData = response.data) /*response.data*/
        )
        .catch((error) => console.log(error));
    },
    submitedAuthor: function () {
      this.$v.author.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$emit("submitedAuthor", {
          value: this.selectAuthor.length - 1,
          text: this.author.value + " " + this.author.text,
        });
        this.fetchedData.push({
          value: this.selectAuthor.length - 1,
          text: this.author.value + " " + this.author.text,
        });
        this.submitStatus = "OK";
      }

      this.author.value = "";
      this.author.text = "";
    },
  },
  validations: {
    author: {
      value: { required },
      text: { required },
    },
  },
  computed: {
    rows() {
      return this.fetchedData.length;
    },
  },
};
</script>

<style>
.authors__btn {
  height: 20px;
}
.authors {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
}
.author-creator {
  width: 100%;
}
</style>

<!-- createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedAuthorlist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    }, !-->
