<template>
  <div class="row map">
    <l-map @update:zoom="zoomUpdate" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(place, index) in this.places"
        :key="index"
        :latLng="latLng(place.lat, place.long)"
        @click="handleClick(place)"
        @add="openPopup"
      >
        <l-popup :content="place.name" :options="{autoClose: true, closeOnClick: false}"></l-popup>
        <!-- <l-icon icon-anchor="[16, 37]" class-name="marker"></l-icon> -->
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue2-leaflet";
import { eventBus } from "../main.js";

export default {
  data() {
    return {
      zoom: 6,
      center: L.latLng(57.036701, -5.038022),
      url:
        "https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=3576413ab5c044b1be3431efff7b1149",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      // iconSize: [40, 40]
    };
  },
  props: ["places"],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LPopup
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
    openPopup: function(event) {
      Vue.nextTick(() => {
        event.target.openPopup();
      });
    }
  } //end of methods
};
</script>

<style>
.map {
  height: 60vh;
  margin-left: 5px;
  margin-right: 5px;
  flex: 0 1 100%;
  grid-column: 1 / -1;
}

/* .leaflet-popup-content-wrapper {

}

.leaflet-popup-content-wrapper .leaflet-popup-content {

}

.leaflet-popup-tip-container {

} */
</style>