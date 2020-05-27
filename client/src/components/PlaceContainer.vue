<template>
  <div>
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

<style>
.place-container {
  display: grid;
  grid-template-columns: 40% 60%;
  justify-items: center;
  width: 100%;
  height: 50vh;
}
</style>