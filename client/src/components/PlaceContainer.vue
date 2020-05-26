<template>
  <div>
    <place-image :place="this.place"></place-image>
    <place-description :place="this.place"></place-description>

    <comment-container :place="this.place"></comment-container>
  </div>
</template>

<script>
import PlaceDescription from "./PlaceDescription";
import PlaceImage from "./PlaceImage";

export default {
  name: "place-container",
  props: ["place"],

  components: {
    "place-image": PlaceImage,
    "place-description": PlaceDescription
  }
};
</script>

<style>
</style>