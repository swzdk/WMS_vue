<template>
  <div id="main">
    <div id="dashboard">
      <div class="divStatic">
        <div class="divLeft">
          <div class="banner">
            <div class="imgLeft">
              <img src="@/assets/dashboard-banner-left@2x.5afd2949.png" alt />
            </div>
            <div class="imgRight">
              <img src="@/assets/dashboard-banner-right@2x.28195570.png" alt />
            </div>
            <div class="imgAvatar">
              <img src="@/assets/avatar@2x.4f4a758f.png" alt />
            </div>
            <p class="userTitle">仓储管理员</p>
            <p class="sayingTitle">我不是为了输赢，我就是认真！</p>
            <p class="sayingAuthor">—— 罗永浩</p>
          </div>
          <div class="todoData">
            <div class="public-title">待办信息</div>
            <div class="todoList">
              <todoItem color="#0076ff" iconName="rukudan" :todo="todoList[0]" />
              <todoItem color="#ffb200" iconName="chukudan" :todo="todoList[1]" />
              <todoItem color="#ff7100" iconName="pandiandan" :todo="todoList[2]" />
            </div>
          </div>
        </div>
        <div class="divRight">
          <div class="notes">
            <div class="public-title">通知/公告</div>
            <noteItem class="note" v-for="(item,index) in notices" :key="index" :note="item" />
          </div>
        </div>
      </div>
      <div class="task">
        <div class="public-title">任务导航</div>
        <div class="taskList">
          <taskItem color="#0076ff" iconName="shouhuo" title="收货任务" />
          <taskItem color="#52d4f3" iconName="shangjia" title="上架任务" />
          <taskItem color="#ff7100" iconName="pandian" title="盘点任务" />
          <taskItem color="#ff609e" iconName="jianhuo" title="拣货任务" />
          <taskItem color="#ffb200" iconName="jiaojie" title="交接任务" />
        </div>
      </div>
      <div class="inOutChart">
        <div class="public-title">入库/出库信息</div>
        <el-radio-group v-model="tabPosition" class="tab-chart" @change="tabClick">
          <el-radio-button label="w">本周</el-radio-button>
          <el-radio-button label="e">本月</el-radio-button>
          <el-radio-button label="c">全年</el-radio-button>
        </el-radio-group>
        <inOut class="deChart" />
      </div>
      <div class="libs">
        <div class="left">
          <div class="public-title">库存使用情况</div>
          <div class="container">
            <lib-use class="deChart" />
          </div>
        </div>
        <div class="right">
          <div class="public-title">库存使用情况</div>
          <div class="container">
            <lib-details class="deChart" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAreaUseStatus,
  getStockUseStatus,
  getTodo,
  getInOutData
} from '@/api/dashboard'
import noteItem from './components/noteItem.vue'
import todoItem from './components/todoItem.vue'
import taskItem from './components/taskItem.vue'
import inOut from './components/echarts/inOut.vue'
import libDetails from './components/echarts/libDetails.vue'
import libUse from './components/echarts/libUse.vue'
export default {
  components: {
    noteItem,
    todoItem,
    taskItem,
    inOut,
    libDetails,
    libUse
  },
  created() {
    this.getLibsUseStatus()
    this.getStockUseStatus()
    this.getTodo()
    this.getInOutData()
  },
  data() {
    return {
      // 仓库状态参数，周w,月e,年c
      dimension: 'w',
      // 获取到的出入库信息
      inOutData: {},
      // todoList
      todoList: [],
      // 通知公告
      notices: [
        {
          title: '紧急盘点通知',
          time: '2020.12.30 18:23:14'
        },
        {
          title: '运维服务更新通知',
          time: '2021.01.25 18:23:14'
        },
        {
          title: '客户入库变更通知',
          time: '2021.01.26 18:23:14'
        },
        {
          title: '五一放假通知',
          time: '2021.02.15 18:23:14'
        },
        {
          title: '品达物流系统对接通知',
          time: '2021.3.25 18:23:14'
        }
      ],
      // 默认位置
      tabPosition: 'w'
    }
  },
  methods: {
    tabClick(label) {
      // 切换时传回label值，赋值给dimension
      this.dimension = label
      // 调用获取出入库信息方法
      this.getInOutData()
    },
    // 获取库存状态
    async getLibsUseStatus() {
      let res = await getAreaUseStatus()
      res = [
        { value: 348, name: '拣货区' },
        { value: 487, name: '出货区' },
        { value: 677, name: '暂存库区' },
        { value: 126, name: '进货暂存区' },
        { value: 298, name: '出货暂存区' }
      ]
      this.$store.commit('echarts/changeOptAreaUse', res)
    },
    // 获取仓库状态
    async getStockUseStatus() {
      const res = await getStockUseStatus()
      this.$store.commit('echarts/changeOptStockUse', res)
    },
    // 获取代办项
    async getTodo() {
      const res = await getTodo()
      this.todoList = res
    },
    // 获取出入库信息
    async getInOutData() {
      const res = await getInOutData(this.dimension)
      this.$store.commit('echarts/changeOptInOut', res)
    }
  }
}
</script>

<style scoped lang="less">
#main {
  margin: 0;
  padding: 0;
  background-color: #fdfafa;
  // padding-right: 226px;
}
#dashboard {
  padding: 20px 30px 30px 30px;
}
.divStatic {
  display: flex;
  width: 100%;
  height: 451px;
  min-width: 1014px;
}
.divLeft {
  flex: 1;
  padding-right: 30px;
  min-width: 723px;
  max-width: 1326px;
}
.divRight {
  width: 261px;
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  .notes {
    padding: 30px;
    h2 {
      margin: 0;
      padding: 0;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #332929;
      line-height: 22px;
    }
    .note {
      margin-top: 15px;
    }
  }
}
.banner {
  width: 100%;
  height: 148px;
  position: relative;
  background: linear-gradient(270deg, #ffc771, #ffa634);
  box-shadow: 0 0 6px 0 rgb(188 151 69 / 12%);
  border-radius: 12px;
  .imgLeft {
    position: absolute;
    left: 0;
    width: 166px;
    height: 148px;
    img {
      width: 100%;
    }
  }
  .imgRight {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    img {
      height: 100%;
    }
  }
  .imgAvatar {
    position: absolute;
    top: 31px;
    left: 43px;
    height: 62px;
    img {
      height: 100%;
    }
  }
  .userTitle {
    position: absolute;
    left: 36px;
    bottom: 6px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #332929;
    line-height: 22px;
  }
  .sayingAuthor,
  .sayingTitle {
    position: absolute;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fff;
    line-height: 25px;
  }
  .sayingTitle {
    top: 26px;
    left: 200px;
    font-size: 18px;
  }
  .sayingAuthor {
    top: 66px;
    left: 400px;
    font-size: 16px;
  }
}
.todoData {
  width: 100%;
  height: 282px;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  .public-title {
    padding-top: 25px;
    margin-left: 25px;
  }
  .todoList {
    display: flex;
    margin: 20px 10px 0 10px;
  }
}
.task {
  width: 88%;
  min-width: 1014px;
  height: 188px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  margin-top: 20px;
  .public-title {
    padding-top: 25px;
    margin-left: 25px;
  }
  .taskList {
    display: flex;
    margin: 20px 10px 0 10px;
  }
}
.inOutChart {
  position: relative;
  width: 88%;
  min-width: 1014px;
  height: 500px;
  background: #fff;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  border-radius: 12px;
  margin-top: 20px;
  .public-title {
    padding-top: 25px;
    margin-left: 25px;
  }
  .deChart {
    height: 430px;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    .canvas {
      left: -50px !important;
    }
  }
}
.tab-chart {
  z-index: 888;
  position: absolute;
  top: 30px;
  right: 30px;
  .is-active {
    /deep/span {
      background-color: #ffb200;
      border-color: #ffb200;
      box-shadow: -1px 0 0 0 #ffb200;
    }
  }
}
.libs {
  width: 88%;
  min-width: 1014px;
  height: 354px;
  margin-top: 20px;
  display: flex;
  .public-title {
    padding-top: 25px;
    margin-left: 25px;
  }
  .left {
    flex: 3;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    margin-right: 30px;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      .deChart {
        width: 220px;
        height: 220px;
        margin-top: -60px;
      }
    }
  }
  .right {
    flex: 7;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      .deChart {
        width: 800px;
        height: 400px;
        margin-top: -60px;
        margin-left: -300px;
      }
    }
  }
}
</style>