<template>
  <div>
    <h2>Comments</h2>
    <place-comment v-for="(comment, index) in this.place.comments" :key="index">{{comment}}</place-comment>
  </div>
</template>

<script>
import PlaceComment from "./PlaceComment";

export default {
  name: "commemt-container",
  props: ["place"],

  components: {
    "place-comment": PlaceComment
  }
};
</script>

<style>
</style>