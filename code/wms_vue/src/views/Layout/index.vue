<template>
  <div style="overflow-y:hidden">
    <div id="main">
      <div class="sidebar">
        <h2 class="logo">
          <img src="~@/assets/title.ef005a7a.png" alt />
        </h2>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @select="menuItemSelected"
          background-color="#fff"
          text-color="color: rgb(136, 126, 126)"
          active-text-color="color: rgb(136, 126, 126)"
        >
          <el-menu-item index="1" class="index-title">
            <hr-icon icon="gongzuotai" class="iconhr" />
            <span slot="title">工作台</span>
          </el-menu-item>
          <el-submenu
            :index="(index + 2).toString()"
            class="menu"
            v-for="(sub,index) in menu"
            :key="index"
          >
            <template slot="title">
              <hr-icon :icon="sub.icon" class="iconhr" />
              <span>{{sub.title}}</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item :index="`${index}-${i+1}`" v-for="(item,i) in subMenu[index]" :key="i">
                <div class="dot-line">
                  <div class="dot">
                    <div class="line"></div>
                  </div>
                </div>
                {{item}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <div class="bottom">
          <div class="avatar">
            <img src="@/assets/avatar@2x.4f4a758f.png" alt />
          </div>
          <div class="name">admin</div>
          <button class="logout">
            <hr-icon icon="chuku" />
          </button>
        </div>
      </div>
      <div class="container">
        <div class="tags">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-dropdown class="dropdown">
            <button class="el-dropdown-link" id="closeTags">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-back">关闭左侧</el-dropdown-item>
              <el-dropdown-item icon="el-icon-right">关闭左侧</el-dropdown-item>
              <el-dropdown-item icon="el-icon-close">关闭其他</el-dropdown-item>
              <el-dropdown-item icon="el-icon-error">关闭全部</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import hrIcon from '@/components/hrIcon.vue'
export default {
  components: { hrIcon },
  data() {
    return {
      menu: [
        { title: '基础信息管理', icon: 'xinxiguanli' },
        { title: '商务管理', icon: 'shangwu' },
        { title: '库内管理', icon: 'kucun' },
        { title: '入库管理', icon: 'ruku' },
        { title: '出库管理', icon: 'chuku' }
      ],
      subMenu: [
        [
          '仓库管理',
          '库区管理',
          '库位管理',
          '库位视图',
          '货品管理',
          '货品类型管理'
        ],
        ['货主管理', '承运商管理'],
        ['盘点单', '盘点任务', '库存损益', '实时库存'],
        ['入库单', '收货任务', '上架任务'],
        ['出库单', '拣货任务', '交接任务']
      ],
      dynamicTags: ['基础信息管理', '商务管理', '出库管理']
    }
  },
  methods: {
    handleOpen(key) {
      console.log(key)
    },
    menuItemSelected(key) {
      console.log(key)
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    }
  }
}
</script>

<style scoped lang="less">
#main {
  margin: 0;
  width: 100%;
  padding-left: 226px;
  background-color: #fdfafa;
}
.container {
  width: 88%;
}
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
  .logo {
    width: 226px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
      height: 64px;
    }
  }
  .iconhr {
    &.iconfont {
      font-size: 18px;
      margin-right: 16px;
    }
  }
  .el-menu {
    border: none !important;
  }
  span,
  li {
    color: rgb(136, 126, 126);
  }
  /deep/.el-submenu__title {
    &.is-active {
      background: #fff6e2 !important;
      border-radius: 0 100px 100px 0;
      color: #ffc12f !important;
    }
  }
  li {
    position: relative;
    li {
      margin-left: 10px;
    }
    &.is-active {
      color: #332929 !important;
    }
    .dot-line {
      position: absolute;
      top: 50%;
      left: 18px;
      .dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #d9d0cf;
        margin-top: -3px;
        .line {
          position: absolute;
          top: -28px;
          left: 3px;
          width: 1px;
          height: 20px;
          background-color: #d9d0cf;
        }
      }
    }
  }
  .el-menu-item.is-active {
    .dot {
      background-color: #ffc12f !important;
    }
  }
  .menu {
    &.is-active /deep/.el-submenu__title {
      background: #fff6e2 !important;
      border-radius: 0 100px 100px 0;
      color: #ffc12f !important;
    }
  }
  .index-title {
    &.is-active {
      background: #fff6e2 !important;
      border-radius: 0 100px 100px 0;
      color: #ffc12f !important;
    }
  }
  .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 62px;
    width: 226px;
    background-color: #fff;
    border-top: 1px solid #f5efee;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .avatar {
      width: 32px;
      height: 32px;
      img {
        width: 100%;
      }
      margin-right: 5px;
    }
    .name {
      width: 65px;
      height: 17px;
      color: #332929;
      text-align: center;
      font-size: 14px;
      border-right: 1px solid #d9d0cf;
    }
    .logout {
      width: 50px;
      height: 50px;
      border: none;
      background: #fff;
      color: #b5abab;
    }
  }
}
.tags {
  width: 100%;
  height: 64px;
  min-width: 1074px;
  background-color: #f5f1f1;
  display: flex;
  padding-left: 30px;
  align-items: center;
  .el-tag {
    height: 36px;
    color: #b5abab;
    background-color: #fff;
    /deep/.el-tag__close {
      color: #b5abab;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .dropdown {
    position: absolute;
    right: 40px;
    width: 36px;
    height: 36px;
    right: 31px;
  }
  #closeTags {
    border: none;
    width: 36px;
    height: 36px;
    background-color: #fff;
    i {
      margin: 0;
    }
  }
}
</style>