<template>
  <div class="movies-new">
    <!-- <form v-on:submit.prevent="createMovie()">
      <div>
        <ul>
          <li v-for="error in errors" v-bind:key="error">
            {{ error }}
          </li>
        </ul>
      </div>
      <div>
        <label>Title: </label>
        <input type="text" v-model="newMovieParams.title" placeholder="Title" />
      </div>

      <div>
        <label>Year: </label>
        <input type="text" v-model="newMovieParams.year" placeholder="Year" />
      </div>

      <div>
        <label>Director: </label>
        <input
          type="text"
          v-model="newMovieParams.director"
          placeholder="Director"
        />
      </div>

      <div>
        <label>Plot: </label>
        <textarea
          name="plot"
          cols="30"
          rows="10"
          v-model="newMovieParams.plot"
        ></textarea>
      </div>

      <p>Characters Remaining: {{ 1000 - newMovieParams.plot.length }}</p>

      <div>
        <label>English?</label>
        <br />
        <label for="true"
          >True
          <input
            value="true"
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieParams.english" /></label
        ><br />

        <label for="false"
          >False
          <input
            value="false"
            type="radio"
            id="englishRadio"
            name="english"
            v-model="newMovieParams.english"
          />
        </label>
        <br />
      </div>
      <input type="submit" value="Submit" />
    </form> -->

    <form method="POST" action="/new" v-on:submit.prevent="createMovie()">
      <h3>New Movie:</h3>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label for="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          v-model="newMovieParams.title"
        />
      </div>
      <div>
        <label for="year">Year:</label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="Year"
          v-model="newMovieParams.year"
        />
      </div>
      <div>
        <label for="director">Director:</label>
        <input
          type="text"
          name="director"
          id="director"
          placeholder="Director"
          v-model="newMovieParams.director"
        />
      </div>
      <div>
        <label for="plot">Plot:</label>
        <textarea
          type="textarea"
          name="plot"
          id="plot"
          cols="30"
          rows="10"
          placeholder="Please enter plot here"
          v-model="newMovieParams.plot"
        ></textarea>
      </div>
      <div>Characters Remaining: {{ 1000 - newMovieParams.plot.length }}</div>
      <br />
      <div>
        <label for="english">English?</label>
        <div>
          True:
          <input
            type="radio"
            name="true"
            id="english"
            value="true"
            v-model="newMovieParams.english"
          />
        </div>
        <div>
          False:
          <input
            type="radio"
            name="false"
            id="english"
            value="false"
            v-model="newMovieParams.english"
          />
        </div>
        <input type="submit" name="Submit" id="submit" />
      </div>
    </form>
    <br />
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
          this.errors << error.response.data.errors;
        });
    },
  },
};
</script>
