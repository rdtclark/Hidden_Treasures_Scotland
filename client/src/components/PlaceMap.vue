<template>
  <div class="row map">
    <h2>Centre is {{currentCenter}} , zoom is {{currentZoom}}</h2>
    <l-map @update:zoom="zoomUpdate" @update:center="centerUpdate" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker
        v-for="(place, index) in this.places"
        :key="index"
        :lat-lng="latLng(place.lat, place.long)"
        class="marker"
      >
        <!-- <l-icon icon-anchor="[16, 37]" class-name="marker"></l-icon> -->
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon } from "vue2-leaflet";

export default {
  data() {
    return {
      zoom: 6,
      center: L.latLng(55.736701, -364.910889),
      currentCenter: L.latLng(33.724764, -112.060547),
      currentZoom: 6,
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

    centerUpdate: function(center) {
      this.currentCenter = center;
    },

    zoomUpdate: function(zoom) {
      this.currentZoom = zoom;
    }
  }
};
</script>

<style>
.map {
  height: 95vh;
}

.marker {
  background-color: red;
}
</style>