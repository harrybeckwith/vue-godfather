<template>
    <div>
        {{ sliderValue }}
          <input v-model="sliderValue" @change="dataSlide" type="range" min="1" max="5" value="0" class="slider" id="myRange">
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
        // slide rang 1 to 5
        // updates current object popularity rating
        // changes reflect in list to adjust font size
        dataSlide: function() {
            this.$store.commit('dataSlide', this.sliderValue);
        },
    },
};
</script>

<style>
</style>
