<template>
  <div class="sidebar">
    <img src="@/assets/img/the-godfather.svg" alt="the godfather logo" class="sidebar__logo"/>

    <ListItem/>

  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
export default {
    name: 'SideBar',
    components: {
        ListItem,
    },
};
</script>

<style scoped lang="scss">
.sidebar {
    width: 30%;
    &__logo {
        width: 150px;
    }
}
</style>
