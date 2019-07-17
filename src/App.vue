<template>
  <div>

    <div v-if="!loading">
      <SideBar />
      <Avatar/>
      <Name />
      <RangeSlider />
      <InfoBox/>
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

