<template>
  <div class="container">
    <form v-on:submit.prevent="handleSubmit" action class="formwrapper">
      <button>Add a new Place</button>

      <h2>Add a new place</h2>

      <label for="name">Place Name:</label>
      <input type="text" id="name" name="name" v-model="name" required />

      <label for="lat">Latitude:</label>
      <input type="number" id="lat" name="lat" v-model="lat" required />

      <label for="long">Longitude:</label>
      <input type="number" id="long" name="long" v-model="long" required />

      <label for="description">Description:</label>
      <textarea id="description" rows="5" name="description" v-model="description" required></textarea>

      <label for></label>
      <select name id>
        <option v-for="(type, index) in types" :key="index">{{type}}</option>
      </select>

      <input type="submit" name="submit" value="Save" />
    </form>
  </div>
</template>

<script>
import { eventBus } from "@/main";

export default {
  data() {
    return {
      name: "",
      lat: 55.9009691,
      long: -3.4233774,
      description: "",
      type: ""
    };
  },
  name: "place-form",
  props: ["places", "types"]
};
</script>

<style>
</style>