<template>
  <div class="actors-index">
    <h1>{{ message }}</h1>
    <div v-for="actor in actors" v-bind:key="actor.id">
      <h4>{{ actor.first_name }} {{ actor.last_name }}</h4>
      <p>Known for: {{ actor.known_for }}</p>
      <router-link v-bind:to="`/actors/${actor.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Actors Index:",
      actors: [],
    };
  },
  created: function () {
    this.actorsIndex();
  },

  methods: {
    actorsIndex: function () {
      axios
        .get("/actors")
        .then((response) => {
          // console.log(response.data);
          this.actors = response.data;
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
