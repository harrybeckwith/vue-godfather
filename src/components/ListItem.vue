<template>
  <ul>
    <li 
    v-for="(item, index) in employeeData.employees" 
    :key="index" 
    @click="nameClick(index)"
      class="list-item"
  >
        <h3 
        :class="{'list-item__active':selected == index}"
         class="title" 
         :style="caclFontSize(index)">
          {{item.name}} 
        </h3>
      </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ListItem',
    data() {
        return {
            selected: 0,
        };
    },
    computed: {
        ...mapState(['employeeData', 'current']),
    },
    methods: {
        // caclulate font from data
        caclFontSize(index) {
            let popularFontSize =
                8 * this.employeeData.employees[index].popularity;

            return {
                'font-size': `${popularFontSize}px`,
            };
        },
        nameClick: function(index) {
            // get the index of clicked name
            this.$store.commit('nameClick', { index });
            // update for active class
            this.selected = index;
        },
    },
};
</script>

<style lang="scss" scoped>
.list-item {
    list-style: none;
    cursor: pointer;
    &__active {
        background-color: #404145;
        color: #64c1e3;
    }
}
</style>
