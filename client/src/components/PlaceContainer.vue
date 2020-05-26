<template>
<div>{{this.place.name}}</div>

</template>

<script>
import PlceDescription from "./PlaceDescription";
import PlaceImage from "./PlaceImage";


export default {
  name: "place-container",
  props: ['place']
};
</script>

<style>


</style>