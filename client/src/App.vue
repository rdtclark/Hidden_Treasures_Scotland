<template>
  <div class="page">
    <div class="title">

      <div class="logo" >
        <img src="../public/logo.png">
      </div>

      <div>
            <p>
            Welcome to Scotlands Hidden Treasures 
            </p>
            <p>
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
    <footer class="footer">
      <p>Your eyes are weary from staring at the LCD. You feel sleepy. 
        Notice how restful it is to watch the cursor blink. Close your eyes. 
        The places stated above are wholly for informational purposes. 
        You cannot imagine why you ever felt otherwise.</p>
    </footer>
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
      showForm: false,
      publicPath: process.env.BASE_URL
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

*{
  font-family: 'Marcellus SC', serif;
}

body{
  background-color: #F2FFFD ;
}

.page{
  width: 90%;
  margin: auto;
}

.title{
  display: grid;
  grid-template-columns: 25% 50% 25%;
  justify-items: center;
  align-items: center;
  text-align: center;
  height: auto;
  margin-bottom: 1em;
  border-radius: 0.5em;
  font-size: 1.5em;
}

.logo img{
  max-width: 100%;
  max-height: 100%;
}

.place-map-container{
  display: flex;
  margin-bottom: 10vh;
}

.add-place-btn{
  height: 15vh;
  width: 15vw;
  font-size: 1em;
  background: none;
  border: none;
}
.add-place-btn:hover{
  border: 0.3vh solid #ebda2eff;
  border-radius: 1em;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.footer{
  height: 15vh;
  background-color: #254261;
  color: #DAFEFF ;
  text-align: ;
}



</style>