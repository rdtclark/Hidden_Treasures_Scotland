<template>
  <div>
    <h1>TITLE</h1>
    <place-map :places="this.places"></place-map>
  </div>
</template>

<script>
import PlaceMap from "./components/PlaceMap";
import PlaceContainer from "./components/PlaceContainer";

import PlaceForm from "./components/PlaceForm";

import ApiServices from "./services/apiServices";

export default {
  name: "app",
  data() {
    return {
      places: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      ApiServices.getTreasures().then(res => {
        console.log(res);
        this.places = res;
      });
    }
  },
  components: {
    "place-container": PlaceContainer,
    "place-form": PlaceForm,
    "place-map": PlaceMap
  }
};
</script>

<style>
</style>