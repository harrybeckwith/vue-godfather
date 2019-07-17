<template>
    <div>
          <label for="popularity" class="">Popularity:</label>
          <input v-model="sliderValue" @change="dataSlide" type="range" min="1" max="5" value="0" name="popularity">
          
        </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'rangeSlider',
    data() {
        return {
            sliderValue: '',
        };
    },
    computed: {
        ...mapState(['employeeData', 'current']),
    },
    methods: {
        dataSlide: function() {
            this.$store.commit('dataSlide', this.sliderValue);
        },
    },
};
</script>
