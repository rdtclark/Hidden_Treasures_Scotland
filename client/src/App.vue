<template>
  <div class="wrapper">
    <header class="header">
      <h1>TITLE</h1>
      <button class="add-place-btn" v-if="!showForm" @click="showForm=true">Add a new Place</button>
      <button class="add-place-btn" v-if="showForm" @click="showForm=false">HIDE</button>
    </header>

    <place-form v-if="showForm" :places="places" :types="types"></place-form>
    <place-map :places="places"></place-map>
    <place-container v-if="selectedPlace" :place="selectedPlace"></place-container>
    <footer class="footer">FOOTER</footer>
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
      showForm: true
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
.wrapper {
  max-width: 940px;
  margin: 0 20px;
  /* display: grid;*/
  grid-gap: 10px;
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
}

.wrapper {
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.header,
.footer {
  height: 10vh;
  margin-left: 5px;
  margin-right: 5px;
  flex: 0 1 100%;
  grid-column: 1 / -1;
}

.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.wrapper > * {
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  margin-bottom: 10px;
}
</style>