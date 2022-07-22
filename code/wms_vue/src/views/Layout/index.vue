<template>
  <div>
    <div class="sidebar">
      <el-row class="tac">
        <el-col :span="12" class="col">
          <h5>自定义颜色</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="color: rgb(136, 126, 126)"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">工作台</span>
            </el-menu-item>
            <el-submenu index="2" class="menu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>基础信息管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1">仓库管理</el-menu-item>
                <el-menu-item index="1-2">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3" class="menu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商务管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1">仓库管理</el-menu-item>
                <el-menu-item index="1-2">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4" class="menu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>库内管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1">仓库管理</el-menu-item>
                <el-menu-item index="1-2">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5" class="menu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>入库管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1">仓库管理</el-menu-item>
                <el-menu-item index="1-2">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6" class="menu">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>出库管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="1-1">仓库管理</el-menu-item>
                <el-menu-item index="1-2">库区管理</el-menu-item>
                <el-menu-item index="1-3">库位管理</el-menu-item>
                <el-menu-item index="1-4">库位视图</el-menu-item>
                <el-menu-item index="1-5">货品管理</el-menu-item>
                <el-menu-item index="1-6">货品类型管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
.sidebar {
  transition: width 0.28s;
  width: 226px !important;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  background: #fff;
  box-shadow: 2px 0 6px 0 rgb(144 142 142 / 13%);
  .col {
    width: 100%;
  }
}
</style>