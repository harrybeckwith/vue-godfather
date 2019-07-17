<template>
  <div>

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

<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
}

.main {
    width: 70%;
    display: flex;
}

img {
    max-width: 100%;
}

.title {
}
</style>

