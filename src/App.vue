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
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
.app {
    font-family: 'Roboto', sans-serif;
}
.header {
    background-image: url('/images/Godfather header.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    top: 0;
    height: 35vh;
}
.bg {
    height: 65vh;
    background-color: #2e2e35;
    top: 35vh;
    bottom: 0;

    @media (min-width: 768px) {
        bottom: auto;
    }
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
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
}

.main {
    width: 100%;

    text-align: center;

    @media (min-width: 768px) {
        display: flex;
        align-self: center;

        justify-content: center;
        width: 60%;
        margin-top: 150px;
        text-align: left;
    }
}

img {
    max-width: 100%;
}

.title {
    color: #fff;
    font-weight: 300;
}
ul {
    margin: 0;
    padding: 0;
}

body {
    font-weight: 300;
}
</style>

