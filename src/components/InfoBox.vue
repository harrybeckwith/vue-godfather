<template>

<div class="info-box">
    <p>
        {{employeeData.employees[current].biography}}
    </p>
</div>
 
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'InfoBox',
    computed: Vuex.mapState(['employeeData', 'current']),
};
</script>

<style>
</style>
