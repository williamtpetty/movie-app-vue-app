<template>
  <div class="index">
    Search by Title: <input type="text" v-model="titleFilter" />
    <div
      v-for="movie in filterBy(movies, titleFilter, 'title')"
      v-bind:key="movie.id"
    >
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.year }}</p>
      <p><strong>Director: </strong>{{ movie.director }}</p>
      <router-link v-bind:to="`/show/${movie.id}`">More Details</router-link>
    </div>
  </div>
</template>

<style>
.more-info {
  margin-bottom: 35px;
}
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
