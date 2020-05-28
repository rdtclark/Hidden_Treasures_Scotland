<template>
  <div class="comments-background">
    <h2>Comments</h2>
    <div class="comments-container">
      <div class="comments">
        <place-comment v-for="(comment, index) in this.place.comments" :key="index" :comment="comment"></place-comment>
      </div>
      <div class="comments-form">
        <comments-form :placeID="this.place._id" :comments="this.place.comments"></comments-form>
      </div>
    </div>
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

<style scoped>

.comments-background{
  text-align: center;
  background-color: #254261;
  color: #DAFEFF ;
  border-radius: 10px;
  padding-bottom: 4vh;
  min-height: 40vh;
}
.comments-container{
  display: grid;
  grid-template-columns: 60% 40%;
}
.comments{
  text-align: left;
  display: grid;
  grid-template-columns: auto;
  overflow: scroll;
  height: 21vh;
  width: 95%;
  margin: auto;
}
.comments-form{
  width: 100%;
}

</style>