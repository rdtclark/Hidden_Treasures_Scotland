<template lang="html">
    <div>
        <h2>{{place.name}}</h2>
        {{place.description}}
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
</style>