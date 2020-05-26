<template>
  <div class="row map">
    <l-map @update:zoom="zoomUpdate"  :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(place, index) in this.places"
        :key="index"
        :latLng="latLng(place.lat, place.long)"
        @click="handleClick(place)"
      >
        <!-- <l-icon icon-anchor="[16, 37]" class-name="marker"></l-icon> -->
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";
import { eventBus } from '../main.js'

export default {
  data() {
    return {
      zoom: 6,
      center: L.latLng(57.036701, -5.038022),
      url:
        "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=3576413ab5c044b1be3431efff7b1149",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.41322, -1.219482),
      iconSize: [40, 40]
    };
  },
  props: ["places"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  },


  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },

    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    },

    handleClick(place){
      eventBus.$emit('place-selected', place)
    }





  } //end of methods
};
</script>

<style>
.map {
  height: 80vh;
  width: 80%;
  margin: auto;
}



</style>