<template>
<div class="info-box">
    <h3>Biography</h3>
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
    margin-top: 50px;

    @media (min-width: 768px) {
        flex-direction: row;
        border-radius: 15px;
        max-width: 600px;
    }
}
</style>
