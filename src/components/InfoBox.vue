<template>
<div class="info-box">
    <h2>Biography</h2>
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

<style scoped lang="scss">
.info-box {
    color: #fff;
    background-color: #1a1d23;
    padding: 15px;
    border-radius: 15px;
    max-width: 600px;
}
</style>
