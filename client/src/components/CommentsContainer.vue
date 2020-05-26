<template>
  <div>
    <h2>Comments</h2>
    <place-comment v-for="(comment, index) in this.place.comments" :key="index" :comment="comment"></place-comment>
    <comments-form :placeID="this.place._id"></comments-form>
  </div>
</template>

<script>
import PlaceComment from "./PlaceComment";
import CommentsForm from "./CommentsForm";

export default {
  name: "comments-container",
  props: ["place"],

  components: {
    "place-comment": PlaceComment,
    "comments-form": CommentsForm
  }
};
</script>

<style>
</style>