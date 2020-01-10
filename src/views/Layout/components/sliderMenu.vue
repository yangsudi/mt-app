<template>
  <div>
    <el-submenu
      v-if="route.hasOwnProperty('children')"
      :index="route.path"
    >
      <span slot="title">{{route.name}}</span>
      <slider-menu
        v-for="(child, childIndex) in route.children"
        :key="childIndex"
        :route="child"
      >
      </slider-menu>
    </el-submenu>
    <el-menu-item
      v-else
      :index="route.path">
      {{route.name}}
    </el-menu-item>
  </div>
</template>
<script>
export default {
  name: 'sliderMenu',
  props: {
    route: {
      type: Object
    }
  }
}
</script>
