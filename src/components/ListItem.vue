<template>
  <ul>
   

    <li v-for="(item, index) in employeeData.employees" :key="index" @click="activateLink(index)">
        <h1>
          {{item.name}}
        </h1>
        <p>
       
        </p>
      </li>

      <li>
          {{ current }}

      </li>
  </ul>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'ListItem',
    data: function() {
        return {
            links: [],
        };
    },
    methods: {
        getLinks: function() {
            this.links = this.$store.state.links;
        },

        activateLink: function(index) {
            // this.$store.dispatch('activateLink', { index });
            this.$store.commit('activateLink', { index });
        },
    },
    computed: Vuex.mapState(['employeeData', 'current']),

    created: function() {
        this.getLinks();
        this.$store.dispatch('loadData'); // dispatch loading
    },
};
</script>
