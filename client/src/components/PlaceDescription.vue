<template lang="html">
    <div>
        <h2>{{place.name}}</h2>
        {{place.description}}
    </div>
</template>

<script>
import ApiServices from "../services/apiServices.js";

export default {
  data() {
    return {};
  },
  props: ["place"]
};
</script>


<style>
</style>