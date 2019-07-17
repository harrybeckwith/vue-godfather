<template>
  <ul>
    <li v-for="(item, index) in employeeData.employees" :key="index" @click="nameClick(index)">
        <h1 :style="caclFontSize(index)">
          {{item.name}} 
        </h1>
      </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'ListItem',
    computed: {
        ...mapState(['employeeData', 'current']),
    },
    methods: {
        caclFontSize(index) {
            let popularFontSize =
                4 * this.employeeData.employees[index].popularity;

            return {
                'font-size': `${popularFontSize}px`,
            };
        },
        nameClick: function(index) {
            this.$store.commit('nameClick', { index });
        },
    },
};
</script>
