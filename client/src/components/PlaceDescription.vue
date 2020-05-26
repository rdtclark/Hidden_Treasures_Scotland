<template lang="html">
    <div>
        <place-discription v-for="(description, index) in places" :key="index" :place="place" />  
    </div>
 
</template>

<script>
import ApiServices from "../services/apiServices.js";

export default {
    data(){
        return {
            
        }
    }
};
</script>


<style>
</style>