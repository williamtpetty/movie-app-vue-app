<template>
  <div class="actors-show">
    <h2>Actor Info:</h2>
    <h3>
      {{ this.actorDetails.first_name }} {{ this.actorDetails.last_name }}
    </h3>
    <p><strong>Known for:</strong> {{ this.actorDetails.known_for }}</p>
    <p><strong>Gender:</strong> {{ this.actorDetails.gender }}</p>
    <p><strong>Age: </strong> {{ this.actorDetails.age }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      actors: [],
      actorDetails: {},
    };
  },

  created: function () {
    this.actorShow();
  },

  methods: {
    actorShow: function () {
      axios.get(`/actors/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.actorDetails = response.data;
      });
    },
  },
};
</script>
