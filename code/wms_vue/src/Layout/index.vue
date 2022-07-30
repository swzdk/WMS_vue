<template>
  <div style="overflow-y:hidden">
    <div id="main">
      <div class="sidebar">
        <h2 class="logo">
          <img src="~@/assets/title.ef005a7a.png" alt />
        </h2>
        <el-menu
          class="el-menu-vertical-demo"
          @select="menuItemSelected"
          background-color="#fff"
          text-color="color: rgb(136, 126, 126)"
          active-text-color="color: rgb(136, 126, 126)"
          router
        >
          <el-menu-item
            index="/dashboard"
            class="index-title"
            :class="{isActive:currentIndex ===0}"
          >
            <hr-icon icon="gongzuotai" class="iconhr" />
            <span slot="title">工作台</span>
          </el-menu-item>
          <el-submenu
            :index="router.path"
            class="menu"
            v-for="(router,index) in routes"
            :key="index"
            :class="{isActive:'/' + routeTags[currentIndex].split('/')[1]===router.path}"
          >
            <template slot="title">
              <hr-icon :icon="router?.meta?.icon" class="iconhr" />
              <span>{{router?.meta?.title}}</span>
            </template>
            <el-menu-item-group>
              <template slot="title"></template>
              <el-menu-item
                :index="`${router.path}/${item.path}`"
                v-for="(item,i) in router.children"
                :key="i"
                :class="{isActive:routeTags[currentIndex].split('/')[2]===item.path}"
              >
                <div class="dot-line">
                  <div class="dot">
                    <div class="line"></div>
                  </div>
                </div>
                {{item?.meta?.title}}
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
            :key="index"
            v-for="(tag,index) in dynamicTags"
            :closable="index!==0"
            :disable-transitions="false"
            @click="handleClick(index)"
            @close="handleClose(index)"
            :class="{active:index===currentIndex}"
          >{{tag}}</el-tag>
          <el-dropdown class="dropdown" @command="closeTags">
            <button class="el-dropdown-link" id="closeTags">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-back" command="left">关闭左侧</el-dropdown-item>
              <el-dropdown-item icon="el-icon-right" command="right">关闭右侧</el-dropdown-item>
              <el-dropdown-item icon="el-icon-close" command="other">关闭其他</el-dropdown-item>
              <el-dropdown-item icon="el-icon-error" command="all">关闭全部</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <!-- <router-view class="router" @add-handle="handleAdd"></router-view> -->
      <keep-alive>
        <router-view
          v-if="$route.meta.keepAlive"
          class="router"
          @add-handle="handleRouter"
          @close-view="handleClose(currentIndex)"
          @back-view="handelBack"
          :key="$route.fullPath"
        />
      </keep-alive>
      <router-view
        v-if="!$route.meta.keepAlive"
        class="router"
        @add-handle="handleRouter"
        @close-view="handleClose(currentIndex)"
        @back-view="handelBack"
        :key="$route.fullPath"
      />
    </div>
  </div>
</template>

<script>
import hrIcon from '@/components/hrIcon.vue'
export default {
  components: { hrIcon },
  data() {
    return {
      // 点开的所有路由页面
      dynamicTags: ['工作台'],
      // 当前路由页面
      routeTags: ['/dashboard'],
      // 当前高亮索引
      currentIndex: 0
    }
  },
  created() {
    // 初始化时获取当前路由title,添加至dynamicTags
    const title = this.$route.meta.title
    // 获取路由path,添加至routeTags
    const path = this.$route.path
    // 检查是否在数组内
    this.handleArr(title, path)
  },
  methods: {
    menuItemSelected(path) {
      // 如果点击的是工作台，改变currentIndex,否则进行路由处理
      if (path === '/dashboard') {
        this.currentIndex = 0
      } else {
        this.handleRouter(path)
      }
    },
    handleClick(index) {
      // 如果点击的是当前高亮，无需任何操作，否则currentIndex 切换成index并进行跳转
      if (index !== this.currentIndex) {
        this.currentIndex = index
        this.$router.push(this.routeTags[this.currentIndex])
      }
    },
    handleClose(index) {
      if (index === this.currentIndex) {
        // 如果点击删除的是当前index，currentIndex - 1并且路由跳转
        this.currentIndex -= 1
        this.$router.push(this.routeTags[this.currentIndex])
      } else if (index < this.currentIndex) {
        // 如果点击删除的是高亮左边的,currentIndex - 1但路由不跳转
        this.currentIndex -= 1
      }
      // 都执行删除一个的操作
      this.dynamicTags.splice(index, 1)
      this.routeTags.splice(index, 1)
    },
    handleRouter(path) {
      // 根据当前点击的菜单路由来更改参数
      const arr = path.split('/')
      // 找到一级路由
      const indexParent = this.routes.findIndex((item) =>
        item.path.includes(arr[1])
      )
      const routesSon = this.routes[indexParent].children
      // 查看是否有三级标题并找到二级路由
      const indexSon = arr[3]
        ? routesSon.findIndex((item) => item.path.includes(arr[3]))
        : routesSon.findIndex((item) => item.path.includes(arr[2]))
      // 获取路由
      const title = routesSon[indexSon].meta.title
      // 根据情况添加进数组
      this.handleArr(title, path)
    },
    handleArr(title, path) {
      // 检查该元素是否在数组内
      const index = this.routeTags.findIndex((item) => item === path)
      // 有的话将当前高亮更改
      if (index > -1) {
        this.currentIndex = index
      } else {
        // 没有则添加
        this.dynamicTags.push(title)
        this.routeTags.push(path)
        // 并将当前index改成数组长度
        this.currentIndex = this.dynamicTags.length - 1
      }
    },
    closeTags(command) {
      switch (command) {
        case 'left':
          // 删除高亮坐标左边全部元素，并让数组第二个元素高亮
          this.dynamicTags.splice(1, this.currentIndex - 1)
          this.routeTags.splice(1, this.currentIndex - 1)
          this.currentIndex = 1
          break
        case 'right':
          // 删除高亮坐标右边全部元素
          this.dynamicTags.splice(
            this.currentIndex + 1,
            this.dynamicTags.length - this.currentIndex - 1
          )
          this.routeTags.splice(
            this.currentIndex + 1,
            this.routeTags.length - this.currentIndex - 1
          )
          break
        case 'other':
          // 只保留当前元素和工作台，让数组第二个元素高亮
          this.dynamicTags = ['工作台', this.dynamicTags[this.currentIndex]]
          this.routeTags = ['/dashboard', this.routeTags[this.currentIndex]]
          this.currentIndex = 1
          break
        default:
          // 全部关闭，工作台高亮，并且跳转
          this.dynamicTags = ['工作台']
          this.routeTags = ['/dashboard']
          this.currentIndex = 0
          this.$router.push(this.routeTags[0])
          break
      }
    },
    handelBack() {
      // currentIndex - 1，跳转前一个路由
      this.currentIndex -= 1
      this.$router.push(this.routeTags[this.currentIndex])
    }
  },
  computed: {
    routes() {
      const router = this.$router.options.routes.filter((item) => !item.hidden)
      return router
    }
  }
}
</script>

<style scoped lang="less">
#main {
  margin: 0;
  width: 100%;
  padding-left: 226px;
  background-color: #f5f1f1;
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
  .el-menu-item.isActive {
    .dot {
      background-color: #ffc12f !important;
    }
  }
  .menu {
    &.isActive /deep/.el-submenu__title {
      background: #fff6e2 !important;
      border-radius: 0 100px 100px 0;
      color: #ffc12f !important;
      i {
        color: #ffc12f !important;
      }
      span {
        color: #ffc12f !important;
      }
    }
  }
  .index-title {
    &.isActive {
      background: #fff6e2 !important;
      border-radius: 0 100px 100px 0;
      color: #ffc12f !important;
      span {
        color: #ffc12f !important;
      }
      i {
        color: #ffc12f !important;
      }
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
  width: 88%;
  height: 64px;
  min-width: 1074px;
  background-color: #f5f1f1;
  display: flex;
  padding-left: 30px;
  align-items: center;
  .el-tag {
    cursor: pointer;
    height: 36px;
    color: #b5abab;
    background-color: #fff;
    /deep/.el-tag__close {
      color: #b5abab;
    }
    &.active {
      color: #ffb200;
    }
  }
  .el-tag + .el-tag {
    margin-left: 10px;
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
.router {
  overflow: hidden !important;
  background-color: #fdfafa;
}
::-webkit-scrollbar {
  display: none;
}
</style>