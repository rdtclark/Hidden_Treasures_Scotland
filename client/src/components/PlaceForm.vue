<template>
  <div class="container">
    <form v-on:submit.prevent="handleSubmit()" action class="formwrapper">

      <h2>Add a new place</h2>

      <label for="name">Place Name:</label>
      <input type="text" id="name" name="name" v-model="name" required />

      <label for="lat">Latitude:</label>
      <input type="number" step="any" id="lat" name="lat" v-model="lat" required />

      <label for="long">Longitude:</label>
      <input type="number" step="any" id="long" name="long" v-model="long" required />

      <label for="description">Description:</label>
      <textarea id="description" rows="5" name="description" v-model="description" required></textarea>

      <label for></label>
      <select name id v-model="type">
        <option v-for="(type, index) in types" :key="index">{{type}}</option>
      </select>

      <input type="submit" name="submit" value="Save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";
import ApiServices from "../services/apiServices.js";

export default {
  data() {
    return {
      name: "",
      lat: 0,
      long: 0,
      description: "",
      type: ""
    };
  },
  name: "place-form",
  props: ["places", "types"],

  methods: {
    handleSubmit() {
      const payload = {
        name: this.name,
        lat: this.lat,
        long: this.long,
        description: this.description,
        type: this.type,
      };
      ApiServices.postTreasure(payload).then(res =>
        eventBus.$emit("add-place", res)
      );
      this.name = "";
      this.lat = "";
      this.long = "";
      this.description = "";
      this.type = "";
    }
  }
};
</script>

<style>
</style>