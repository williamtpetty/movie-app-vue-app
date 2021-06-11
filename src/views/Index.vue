<template>
  <div class="index">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <p><strong>Director: </strong>{{ movie.director }}</p>
      <button class="more-info" v-on:click="showMovie()">More Info</button>
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

export default {
  data: function () {
    return {
      movies: [],
      newMovieTitle: "",
      newMovieYear: "",
      newMoviePlot: "",
      newMovieDirector: "",
      newMovieEnglish: "",
      movieDetails: {},
    };
  },

  created: function () {
    this.indexMovies();
  },

  methods: {
    indexMovies: function () {
      axios.get("/movies").then((response) => {
        console.log(response.data);
        return (this.movies = response.data);
      });
    },

    showMovie: function () {
      axios.get(`/movies/2`).then((response) => {
        console.log(response.data);
        this.$router.push(`/show/2`);
      });
    },
  },
};
</script>
