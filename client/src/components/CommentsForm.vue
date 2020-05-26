<template>
  <div class="comments-box">
    <form v-on:submit.prevent="handleSubmit()" class="formwrapper">
      <h2>Add a new comment</h2>

      <label for="comment">Comment:</label>
      <textarea rows="5" name="comment" v-model="comment" required></textarea>

      <input type="submit" name="submit" value="Add Comment" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
import ApiServices from "../services/apiServices.js";
export default {
  data() {
    return {
      comment: ""
    };
  },
  props: ["placeID"],
  methods: {
    handleSubmit() {
      const payload = {
        _id: this.placeID,
        comments: this.comment
      };
      //   eventBus.$emit("add-comment", payload);
      ApiServices.updateTreasure(payload).then(res =>
        eventBus.$emit("add-comment", res)
      );

      this.comment = "";
    }
  }
};
</script>

<style>
</style>