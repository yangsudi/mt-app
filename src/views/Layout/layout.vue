<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <div>
      <mt-logo />
      <el-aside width="200px" style="background-color: #0575E6">
        <el-menu
          router
          background-color="#0575E6"
          text-color="#fff"
          unique-opened
          mode="vertical"
        >
          <slider-menu v-for="(route, index) in routes" :key="index" :route="route"></slider-menu>
        </el-menu>
      </el-aside>
    </div>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import MtLogo from './components/Login'
import routes from '../../store/index'
import sliderMenu from './components/sliderMenu'
export default {
  components: {
    MtLogo,
    sliderMenu
  },
  mounted () {
  },
  methods: {
  },
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      list: [],
      routes: routes.state.routes
    }
  },
  computed: {
  }
}
</script>
<style>
  .el-header {
    background-color: #0575E6;
    color: #fff;
    line-height: 60px;
  }

  .el-aside {
    color: #0575E6;
  }
</style>
