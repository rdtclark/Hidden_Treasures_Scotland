<template>
  <div class="page">
    <div class="title">

      <div>
        <h1>LOGO</h1>
      </div>

      <div>
        <p>
          Welcome to Scotlands Hidden Treasures 
        <br>
          Are you ready to explore?
        </p>
      </div>

      <div>
        <button class="add-place-btn" v-if="!showForm" @click="showForm=true">Add a new Place</button>
      </div>
    </div>


    <div class="place-map-container">

      <transition name="fade" mode="out-in">
        <place-form v-if="showForm" :places="places" :types="types"></place-form>
      </transition>

      <div v-if="!showForm"></div>
      <place-map :places="places"></place-map>
    </div>
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
      this.showForm = false
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
      let unique = array.filter((type, index, array) => array.indexOf(type) === index);
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

body{
  background-color: #F2FFFD ;
}

.page{
  width: 90%;
  margin: auto;
  margin-bottom: 20vh;
}

.title{
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  align-items: center;
  text-align: center;
  height: 10vh;
  margin-bottom: 3em;
  border-radius: 0.5em;
}

.place-map-container{
  display: flex;
  margin-bottom: 10vh;
}

.add-place-btn{
  height: 5vh;
}



.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}



</style>