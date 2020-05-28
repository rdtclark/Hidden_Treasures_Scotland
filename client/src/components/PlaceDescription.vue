<template lang="html">
     <div class="description-container">
            <div>
              <b>Description:</b>
            </div>
          <div class="description">
            {{place.description}}
          </div>
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
.description-container{
  display: grid;
  width: 80%;
  height: auto;
  min-height: 80%;
  align-items: center;
  justify-items: center;
  background-color: #141C3D ;
  color: #DAFEFF;
  border-radius: 10px;
  font-size: 1.2em;
  padding-top: 3vh;
  padding-bottom: 3vh;
}
.description{
  display: flex;
  align-items: center;

  width: 60%;
  margin: auto;
  min-height: 90%;
}

</style>