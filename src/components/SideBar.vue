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
    width: 100%;
    text-align: center;
    margin-right: 20px;
    text-align: center;
    background: #00000040;

    margin-top: -8px;

    @media (min-width: 768px) {
        width: 30%;
        height: 100vh;
    }

    &__inside {
        padding-top: 100px;
    }
    &__logo {
        width: 150px;
    }
}
</style>
