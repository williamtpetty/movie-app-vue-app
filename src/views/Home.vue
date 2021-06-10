<template>
  <div class="home">
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <p><strong>Director: </strong>{{ movie.director }}</p>
      <button class="more-info" v-on:click="showMovie(movie)">More Info</button>
    </div>
    <div>
      Title:
      <input type="text" v-model="newMovieTitle" placeholder="Title" /><br />
      Year:
      <input type="text" v-model="newMovieYear" placeholder="Year" /><br />
      Director:
      <input
        type="text"
        v-model="newMovieDirector"
        placeholder="Director"
      /><br />
      Plot:
      <textarea
        name="plot"
        cols="30"
        rows="10"
        v-model="newMoviePlot"
      ></textarea
      ><br />

      English? <br />
      <div>
        <label for="true"
          >True
          <input
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieEnglish" /></label
        ><br />

        <label for="false"
          >False
          <input
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieEnglish"
          />
        </label>
        <br />
      </div>
      <button class="more-info" v-on:click="createMovie">
        Create New Movie
      </button>
    </div>

    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <p>Title: {{ movieDetails.title }}</p>
        <p>Year: {{ movieDetails.year }}</p>
        <p>Director: {{ movieDetails.director }}</p>
        <p>Plot: {{ movieDetails.plot }}</p>
        <p>English: {{ movieDetails.english }}</p>
        <p>Genres: {{ movieDetails.genre_names }}</p>
        <button>Close</button>
      </form>
    </dialog>
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
      newMovieEnglish: null,
      movieDetails: {},
    };
  },

  created: function () {
    this.indexMovies();
  },

  methods: {
    indexMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log(response.data);
        return (this.movies = response.data);
      });
    },

    createMovie: function () {
      let params = {
        title: this.newMovieTitle,
        year: this.newMovieYear,
        plot: this.newMoviePlot,
        director: this.newMovieDirector,
        english: document.getElementById("englishRadio").value,
      };
      axios
        .post("http://localhost:3000/movies", params)
        .then((response) => {
          console.log(response.data);
          this.movies.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },

    showMovie: function (movie) {
      this.movieDetails = movie;
      document.querySelector("#movie-details").showModal();
    },
  },
};
</script>
