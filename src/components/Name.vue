<template>
    <h2 class="title"> {{employeeData.employees[current].name}}</h2>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Name',
    computed: {
        ...mapState(['employeeData', 'current']),
    },
};
</script>

<style>
</style>

