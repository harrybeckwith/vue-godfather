<template>
    <h2 v-if="!loading"> {{employeeData.employees[current].name}} </h2>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Name',
    computed: Vuex.mapState(['employeeData', 'current', 'loading']),
};
</script>

<style>
</style>

