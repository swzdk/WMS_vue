<template>
  <div id="main">
    <a href="#">
      <div class="icon" :style="`background-color:${color}`">
        <hrIcon :icon="iconName" style="color:white" />
      </div>
      <div class="title">{{this.title}}</div>
      <div class="bottom">
        <span class="label">新增</span>
        <span class="value">3</span>
        <span class="label">待审核</span>
        <span class="value" :style="`color:${color}`">3</span>
      </div>
    </a>
  </div>
</template>

<script>
import HrIcon from '@/components/hrIcon'
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    HrIcon
  }
}
</script>

<style scoped lang="less">
#main {
  height: 186px;
  margin: 0 15px !important;
  background: #fbf7f7;
  border-radius: 8px;
  flex: 1;
}
a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: inherit;
    outline: none;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    background: #fff;
    border-radius: 8px;
  }
  .icon {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 49px;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    .iconfont {
      font-size: 32px;
    }
  }
  .title {
    position: absolute;
    top: 34px;
    left: 85px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #332929;
    line-height: 22px;
  }
  .bottom {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
  .label {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #887e7e;
    margin-right: 10px;
  }
  .value {
    font-size: 36px;
    font-family: DIN-Medium, DIN;
    font-weight: 500;
    color: #332929;
    margin-right: 20px;
  }
}
</style>