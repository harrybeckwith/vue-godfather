<template>
  <div>
    hello
    <SideBar />
    <Avatar />
    <Name />
    <RangeSlider />
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

export default {
    name: 'app',
    data() {
        return {
            EmployeeData: {},
            Avatar,
            Name,
            RangeSlider,
            InfoBox,
        };
    },
    components: {
        SideBar,
    },
    created() {
        this.$store.dispatch('loadData'); // dispatch loading
    },
};
</script>

