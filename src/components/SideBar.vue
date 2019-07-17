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
    width: 40%;
    text-align: center;
    margin-right: 20px;
    text-align: center;
    background: #00000040;
    &__logo {
        width: 150px;
    }
}
</style>
