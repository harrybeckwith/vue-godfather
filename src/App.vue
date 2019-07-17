<template>
  <div>
    hello
    <SideBar :EmployeeDetails="EmployeeData"/>
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
import axios from 'axios';

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
        axios
            .get(`/data/EmployeeData.json`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.EmployeeData = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            });
    },
};
</script>

