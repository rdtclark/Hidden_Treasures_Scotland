<template>
  <div class="form-wrapper">
    <form v-on:submit.prevent="handleSubmit()" action class="place-form">
      <h2>Add a new place</h2>

      <div class="single-input">
        <label for="name">Place Name:</label>
        <input type="text" id="name" name="name" v-model="name" required />

        <label for="lat">Latitude:</label>
        <input type="number" step="any" id="lat" name="lat" v-model="lat" required />

        <label for="long">Longitude:</label>
        <input type="number" step="any" id="long" name="long" v-model="long" required />

        <label for="type">Type</label>
        <select name="type" id v-model="type">
          <option v-for="(type, index) in types" :key="index">{{type}}</option>
        </select>
      </div>
      <div class="field-input">
        <label for="description">Description:</label>
        <textarea id="description" rows="5" name="description" v-model="description" required></textarea>
      </div>

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
        type: this.type
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

<style scoped>
.form-wrapper {
  display: flex;
  height: 40vh;
  grid-column: 1 / -1;
}

.place-form {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.single-input {
  display: grid;
  grid-template-columns: auto;
  width: 50%;
}

.field-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  align-self: center;
}
</style>