<template>
  <div>
      <div>
        <navigation-component/>
      </div>
      <router-view>

      </router-view>
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";

export default {
  components: {
    "navigation-component": NavigationComponent
  }
}
</script>

<style scoped>
    *{
        margin: auto;
    }
</style>