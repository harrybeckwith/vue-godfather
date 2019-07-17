<template>
  <div class="sidebar">
    <img src="@/assets/img/the-godfather.svg" alt="the godfather logo" class="sidebar__logo"/>

    <ListItem :employeeData="EmployeeDetails"/>

  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
    name: 'SideBar',
    components: {
        ListItem,
    },
    props: {
        EmployeeDetails: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped lang="scss">
.sidebar {
    &__logo {
        width: 150px;
    }
}
</style>
