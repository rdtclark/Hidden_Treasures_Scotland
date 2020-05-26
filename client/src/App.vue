<template>
  <div>
    <h1>TITLE</h1>
    <place-map :places="this.places"></place-map>
    <place-container v-if="selectedPlace" :place="selectedPlace"></place-container>
  </div>
</template>

<script>
import PlaceMap from "./components/PlaceMap";
import PlaceContainer from "./components/PlaceContainer";

import PlaceForm from "./components/PlaceForm";

import ApiServices from "./services/apiServices";
import { eventBus } from './main';

export default {
  name: "app",
  data() {
    return {
      places: [],
      selectedPlace: null
    };
  },
  mounted() {
    this.getData();

    eventBus.$on('place-selected', (place) => {
      this.selectedPlace = place
    })

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