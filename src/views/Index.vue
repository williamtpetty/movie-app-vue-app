<template>
  <div class="index container">
    <div class="text-center">
      <div>
        Search by Title:
        <input type="text" v-model="titleFilter" class="text-center" />
      </div>
      <!-- former construction of page -->
      <!-- <div
          v-for="movie in filterBy(movies, titleFilter, 'title')"
          v-bind:key="movie.id"
        >
          <h2>{{ movie.title }}</h2>
          <p>{{ movie.year }}</p>
          <p><strong>Director: </strong>{{ movie.director }}</p>
          <router-link v-bind:to="`/show/${movie.id}`">More Details</router-link>
        </div> -->

      <div class="row row-cols-1 row-cols-md-2 g-4 text-center">
        <div
          class="card"
          v-for="movie in filterBy(movies, titleFilter, 'title')"
          v-bind:key="movie.id"
        >
          <!-- <img :src="..." class="card-img-top" alt="..." /> -->
          <div class="card-body">
            <h2 class="card-title">{{ movie.title }}</h2>
            <p><strong>Director: </strong>{{ movie.director }}</p>
            <router-link v-bind:to="`/show/${movie.id}`"
              >More Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.more-info {
  margin-bottom: 35px;
}

.card {
}

$grid-gutter-width: 1.5rem !default;
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      movieDetails: {},
      titleFilter: "",
    };
  },

  created: function () {
    this.indexMovies();
  },

  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        // console.log(response.data);
        return (this.movies = response.data);
      });
    },
  },
};
</script>
