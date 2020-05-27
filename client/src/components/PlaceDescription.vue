<template lang="html">
    <div class="description">
        <h2>{{place.name}}</h2>
        {{place.description}}
        {{place.type}}
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["place"]
};
</script>


<style>

.description{
  width: 100%;
  text-align: left;
}

</style>