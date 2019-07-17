<template>
  <div class="sidebar">
    <div class="sidebar__inside">
      <img src="@/assets/img/the-godfather.svg" alt="the godfather logo" class="sidebar__logo"/>
      <ListItem/>
    </div>
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
    text-align: center;
    margin-right: 20px;
    text-align: center;
    background: #00000040;
    height: 100vh;
    margin-top: -8px;

    &__inside {
        padding-top: 100px;
    }
    &__logo {
        width: 150px;
    }
}
</style>
