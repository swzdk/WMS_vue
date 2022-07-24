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
              <todoItem color="#0076ff" iconName="rukudan" title="入库单" />
              <todoItem color="#ffb200" iconName="chukudan" title="出库单" />
              <todoItem color="#ff7100" iconName="pandiandan" title="盘点单" />
            </div>
          </div>
        </div>
        <div class="divRight">
          <div class="notes">
            <div class="public-title">通知/公告</div>
            <noteItem class="note" />
            <noteItem class="note" />
            <noteItem class="note" />
            <noteItem class="note" />
            <noteItem class="note" />
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
        <inOut />
      </div>
      <div class="libs">
        <div class="left">
          <div class="public-title">库存使用情况</div>
          <lib-use />
        </div>
        <div class="right">
          <div class="public-title">库存使用情况</div>
          <lib-details />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  width: 100%;
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
  width: 100%;
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
}
.libs {
  width: 100%;
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
  }
  .right {
    flex: 7;
    background: #fff;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    border-radius: 12px;
  }
}
</style>