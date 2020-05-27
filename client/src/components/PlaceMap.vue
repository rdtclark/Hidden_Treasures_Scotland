<template>
  <div class="row map">
    <l-map @update:zoom="zoomUpdate" :zoom="zoom" :center="center" v-on:click="mapClick" class="point">
      <l-tile-layer :url="url" :attribution="attribution" ></l-tile-layer> 
      <l-marker
        v-for="(place, index) in this.places"
        :key="index"
        :latLng="latLng(place.lat, place.long)"
        @click="handleClick(place)"
        @add="openPopup"
      >
        <l-popup :content="place.name" :options="{autoClose: true, closeOnClick: false}"></l-popup>
        <l-icon
        :icon-url="icon">
          
        </l-icon>
      </l-marker>

    </l-map>
  </div>
</template>
<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import { eventBus } from "../main.js";
import cave from '../assets/cave.png'

export default {
  data() {
    return {
      selectedLatLong: 0,
      zoom: 6,
      center: L.latLng(57.036701, -5.038022),
      url:
        "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=3576413ab5c044b1be3431efff7b1149",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // iconSize: [40, 40]
      newLat: null,
      icon: cave
    };
  },
  props: ["places"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup,
    LIcon
  },

  mounted() {

      eventBus.$on('add-place', place => {
      const latlong = L.latLng(place.lat, place.long)
      this.center = latlong
    })

  },

  methods: {
    latLng: function(lat, lng) {
      return L.latLng(lat, lng);
    },

    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    },

    handleClick(place) {
      eventBus.$emit("place-selected", place);
    },

    mapClick: function(e) {
      eventBus.$emit('location-selected', e.latlng)
    },

<<<<<<< HEAD
=======
 


>>>>>>> aeea0c806e28a344deb1bc123da236b16f1d6095
    openPopup: function(e) {
      Vue.nextTick(() => {
        e.target.openPopup();
      });
    }
  } //end of methods
};
</script>

<style>
.map {
  height: 60vh;
  width: 100%;
  margin-left: 5px;
  margin-right: 5px;
}

.point:hover {
 cursor: crosshair;
}

/* .leaflet-popup-content-wrapper {

}

.leaflet-popup-content-wrapper .leaflet-popup-content {

}

.leaflet-popup-tip-container {

} */
</style>