<template>
  <ul>
    <li v-for="(item, index) in employeeData.employees" :key="index" @click="nameClick(index)">
        <h1>
          {{item.name}}
        </h1>
      </li>
  </ul>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'ListItem',
    methods: {
        nameClick: function(index) {
            this.$store.commit('nameClick', { index });
        },
    },
    computed: Vuex.mapState(['employeeData', 'current']),
};
</script>
