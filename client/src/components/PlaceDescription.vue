<template lang="html">
    <div>
        {{place.description}}
    </div>
</template>

<script>
import ApiServices from "../services/apiServices.js";

export default {
    data(){
        return {

        }
    },
    props: ['place']
};
</script>


<style>
</style>