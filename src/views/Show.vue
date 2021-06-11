<template>
  <div class="index">
    <h1>Movie Info</h1>
    <p><strong>Title:</strong> {{ movieDetails.title }}</p>
    <p><strong>Year:</strong> {{ movieDetails.year }}</p>
    <p><strong>Director:</strong> {{ movieDetails.director }}</p>
    <p><strong>Plot:</strong> {{ movieDetails.plot }}</p>
    <p><strong>English:</strong> {{ movieDetails.english }}</p>
    <p><strong>Genres:</strong> {{ movieDetails.genre_names }}</p>
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
      movieDetails: {},
    };
  },

  created: function () {
    this.showMovie();
  },

  methods: {
    showMovie: function () {
      axios.get("/show/2").then((response) => {
        console.log(response.data);
        return (this.movieDetails = response.data);
      });
    },
  },
};
</script>
