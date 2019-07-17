<template>
    <img :src="`images/${employeeData.employees[current].image}`"/>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Avatar',
    computed: Vuex.mapState(['employeeData', 'current']),
};
</script>

<style>
</style>
