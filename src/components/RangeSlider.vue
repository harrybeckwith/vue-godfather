<template>
    <div class="range-slider">
          <label for="popularity" class="range-slider__label">
              <h3 class="title">Popularity:
                  </h3>
            </label>
          <input 
            class="range-slider__input"
            v-model="sliderValue"
            @change="dataSlide"
            type="range"
            min="1"
            max="10"
            value="0" 
            name="popularity">
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
        // send data slide value to vuex
        dataSlide: function() {
            this.$store.commit('dataSlide', this.sliderValue);
        },
    },
};
</script>
<style lang="scss" scoped>
.range-slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__label {
        display: inline-block;
    }
    &__input {
        width: 80%;
    }
}
</style>