<template>
  <div>
    <form v-on:submit.prevent="handleSubmit()" class="form-wrapper">
      <h3>Enter Details</h3>
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

      <input type="submit" name="submit" value="Save" class="submit-button"/>
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
  mounted() {
    eventBus.$on('location-selected', latlng => {
      this.lat = latlng.lat
      this.long = latlng.lng
    })

  },

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

input, select, textarea{
  background-color: #141C3D   ;
  color: #DAFEFF ;
  border: none;
  width: 100%;
}

label{
  font-size: 1em;
}

.submit-button{
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
}

.form-wrapper {
  display: grid;
  grid-template-columns: auto;
  min-height: 60vh;
  min-width: 20vw;
  justify-items: center;
  align-items: center;
  background-color: #254261 ;
  color: #DAFEFF ;
}


.single-input {
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 3vh;
  align-content: center;
  width: 90%;
}

.field-input {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  align-self: center;
}

#description{
  width: 100%;
  height: 90%; 
}


</style>