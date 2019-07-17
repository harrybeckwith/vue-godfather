<template>
  <div class ="app">
    <div class="header"></div>
    <div class="bg"></div>
      <div v-if="!loading" class="container">
      <SideBar />
      <div class="main">
        <Avatar/>
        <div>
        <Name />
        <RangeSlider />
        <InfoBox/>
            </div>
      </div>
    </div>

  </div>
</template>

<script>
// components
import SideBar from '@/components/SideBar.vue';
import Avatar from '@/components/Avatar.vue';
import Name from '@/components/Name.vue';
import RangeSlider from '@/components/RangeSlider.vue';
import InfoBox from '@/components/InfoBox.vue';

// helpers
import Vuex from 'vuex';
export default {
    name: 'app',
    components: {
        SideBar,
        Avatar,
        Name,
        RangeSlider,
        InfoBox,
    },
    computed: Vuex.mapState(['employeeData', 'current', 'loading']),
    created() {
        this.$store.dispatch('loadData'); // dispatch loading
    },
};
</script>

<style  lang="scss">
.header {
    height: 40vh;
    background-image: url('/images/Godfather header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
}
.bg {
    height: 60vh;
    background-color: #2e2e35;
    top: 40vh;
}

.header,
.bg {
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
}
.container {
    display: flex;
    justify-content: space-between;
}

.main {
    width: 60%;
    display: flex;
    align-self: center;
}

img {
    max-width: 100%;
}

.title {
    color: #fff;
}
ul {
    margin: 0;
    padding: 0;
}
</style>

