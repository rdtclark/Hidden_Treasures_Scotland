<template>
  <div>
    <h1>TITLE</h1>
    <button v-if="!showForm" @click="showForm=true">Add a new Place</button>
    <button v-if="showForm" @click="showForm=false">HIDE</button>

    <place-form v-if="showForm" :places="places" :types="types"></place-form>
    <place-map :places="places"></place-map>
    <place-container v-if="selectedPlace" :place="selectedPlace"></place-container>
  </div>
</template>

<script>
import PlaceMap from "./components/PlaceMap";
import PlaceContainer from "./components/PlaceContainer";

import PlaceForm from "./components/PlaceForm";

import ApiServices from "./services/apiServices";
import { eventBus } from "./main";

export default {
  name: "app",
  data() {
    return {
      places: [],
      selectedPlace: null,
      showForm: false
    };
  },
  mounted() {
    this.getData();

    eventBus.$on("place-selected", place => {
      this.selectedPlace = place;
    });

    eventBus.$on("add-place", place => {
      this.places.push(place);
      this.getData();
    });


  },
  methods: {
    getData() {
      ApiServices.getTreasures().then(res => {
        this.places = res;
      });
    }
  },
  computed: {
    types: function() {
      const array = this.places.map(place => place.type);
      let unique = array.filter((item, i, ar) => ar.indexOf(item) === i);
      return unique;
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