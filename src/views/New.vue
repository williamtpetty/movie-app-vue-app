<template>
  <div class="movies-new">
    <form v-on:submit.prevent="createMovie()">
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>Title: </label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.title"
          placeholder="Title"
        />
      </div>

      <div class="form-group">
        <label>Year: </label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.year"
          placeholder="Year"
        />
      </div>

      <div class="form-group">
        <label>Director: </label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.director"
          placeholder="Director"
        />
      </div>

      <div class="form-group">
        <label>Plot: </label>
        <textarea
          class="form-control"
          name="plot"
          cols="30"
          rows="10"
          v-model="newMovieParams.plot"
        ></textarea>
      </div>

      <p>Characters Remaining: {{ 1000 - newMovieParams.plot.length }}</p>

      <div class="form-group">
        <label>English?</label>
        <br />
        <label for="true"
          >True
          <input
            class="form-control"
            value="true"
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieParams.english" /></label
        ><br />

        <label for="false"
          >False
          <input
            class="form-control"
            value="false"
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieParams.english"
          />
        </label>
        <br />
      </div>
      <input type="submit" class="more-info btn btn-primary" value="Submit" />
    </form>
    newMovieParams: {{ newMovieParams }}
  </div>
</template>

<style>
.more-info {
  margin: 5px 0 35px;
}
input {
  margin-bottom: 5px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      errors: [],
      newMovieParams: { plot: "" },
    };
  },

  created: function () {},

  methods: {
    createMovie: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          // this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
