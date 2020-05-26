<template>
  <div class="place-container">
    <place-image :place="this.place"></place-image>
    <place-description :place="this.place"></place-description>

    <comments-container :place="this.place"></comments-container>
  </div>
</template>

<script>
import PlaceDescription from "./PlaceDescription";
import PlaceImage from "./PlaceImage";
import CommentsContainer from "./CommentsContainer";

export default {
  name: "place-container",
  props: ["place"],

  components: {
    "place-image": PlaceImage,
    "place-description": PlaceDescription,
    "comments-container": CommentsContainer
  }
};
</script>

<style>
.place-container {
  height: 50vh;
}
</style>