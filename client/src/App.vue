<template></template>

<script>
import ApiServices from './services/apiServices'

export default {
  name: "app",
  data() {},
  mounted() {
    getData();
  },
  methods: {
    getData() {
      ApiServices.getTreasures()
    }
  },
  components: {
    Map,
    PlaceForm
  }
};
</script>

<style>
</style>