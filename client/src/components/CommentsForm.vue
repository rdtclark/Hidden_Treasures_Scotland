<template>
  <div class="comments-box">
    <form v-on:submit.prevent="handleSubmit()" action class="formwrapper">
      <h2>Add a new comment</h2>

      <label for="comment">Comment:</label>
      <!-- <input type="text" name="comment" v-model="comment" /> -->

      <textarea rows="5" id="comment" name="comment" v-model="comment" required></textarea>

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
  methods: {
    handleSubmit() {
      const payload = {
        comment: this.comment
      };
      console.log(payload._id),
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