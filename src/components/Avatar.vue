<template>
    <img class="avatar" :src="`images/profile-pics/${employeeData.employees[current].image}`"/>
</template>

<script>
import Vuex from 'vuex';
export default {
    name: 'Avatar',
    computed: Vuex.mapState(['employeeData', 'current']),
};
</script>

<style lang="scss" scoped>
.avatar {
    width: 150px;
    align-self: center;
    margin-bottom: auto;
    margin-right: 35px;
    border-radius: 5px;
    border: 3px solid #454448;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
 