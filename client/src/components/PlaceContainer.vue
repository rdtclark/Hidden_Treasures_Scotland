<template>
  <div class="wrapper">
    <h2>{{this.place.name}}</h2>
    <div class="place-container">
      <place-image :place="this.place"></place-image>
      <place-description :place="this.place"></place-description>
    </div>
    <comments-container :place="this.place"></comments-container>
  </div>

</template>

<script>
import PlaceDescription from "./PlaceDescription";
import PlaceImage from "./PlaceImage";
import CommentsContainer from "./CommentsContainer";
import { eventBus } from "../main.js";
import ApiServices from "../services/apiServices.js";

export default {
  name: "place-container",
  props: ["place"],

  components: {
    "place-image": PlaceImage,
    "place-description": PlaceDescription,
    "comments-container": CommentsContainer
  },
  methods: {},
  mounted() {
    eventBus.$on("add-comment", comment => {
      // this.place.comments.push(comment.value.comments);
    });
  }
};
</script>

<style scoped>
.place-container {
  display: grid;
  grid-template-columns: 40% 60%;
  height: auto;
  min-height: 30vh;
  justify-items: center;
  align-items: center;
  width: 100%;
  background-color: #254261;
  padding-top: 2em;
  padding-bottom: 2em;
  border-radius: 10px;
  margin-bottom: 5px;
}
.wrapper {
  display: grid;
  grid-template-columns: auto;
}

h2{
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 5px;
}
</style>