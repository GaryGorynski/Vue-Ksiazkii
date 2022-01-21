<template>
  <div>
    <div>
      <b-tab class="genres" title="Genres" @click="fetch">
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
        <div class="genre-creator">
          <b-row class="my-5">
            <b-col sm="12">
              <b-form-input
                v-model="$v.genre.value.$model"
                placeholder="Genre"
                @keyup.enter="submitedGenre"
              ></b-form-input>
              <p class="text-success" v-if="submitStatus === 'OK'">
                Thanks for your submission!
              </p>
              <p class="text-danger" v-if="submitStatus === 'ERROR'">
                Please fill the form correctly.
              </p>
              <b-button
                variant="primary"
                type="submit"
                value="create genre"
                @click="submitedGenre"
                >Create Genre</b-button
              >
            </b-col>
          </b-row>
        </div>
      </b-tab>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { fetchGenre } from "../services/genreService";
import Table from "./Table.vue";
export default {
  props: {
    selectGenre: { type: Array, required: false },
  },
  components: {
    Table: Table,
  },
  data() {
    return {
      genre: {
        value: "",
      },
      submitStatus: null,
      fields: ["name"],
      fetchedData: [],
      currentPage: 1,
      perPage: 10,
      totalPages: 0,
    };
  },
  methods: {
    fetch: function () {
      fetchGenre()
        .then(
          (response) => (this.fetchedData = this.fetchedData = response.data)
        )
        .catch((error) => console.log(error));
    },
    submitedGenre: function () {
      this.$v.genre.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.$emit("submitedGenre", {
          value: this.selectGenre.length - 1,
          text: this.genre.value,
        });
        this.submitStatus = "OK";
        this.genre.value = "";
      }
    },
  },
  computed: {
    rows() {
      return this.fetchedData.length;
    },
  },
  validations: {
    genre: {
      value: { required },
    },
  },
};
</script>

<style>
.genres__btn {
  height: 20px;
}
.genres {
  flex-direction: column;
  flex-wrap: wrap;
  display: flex;
  height: 100%;
  align-items: flex-start;
}
.genre-creator {
  width: 100%;
}
</style>

<!--    createPaginated(data) {
      this.totalPages = Math.floor(data.length / this.perPage);
      for (var i = 0; i < this.totalPages; i++) {
        const start = i * this.perPage;
        this.paginatedGenrelist.push(data.slice(start, start + this.perPage));
      }
      return this.totalPages;
    }, !-->
