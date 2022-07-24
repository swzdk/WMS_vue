<template>
  <div id="main">
    <a href="#">
      <div class="icon" :style="`background-color:${color}`">
        <hrIcon :icon="iconName" style="color:white" />
      </div>
      <div class="title">{{this.title}}</div>
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
  height: 93px;
  margin: 0 15px !important;
  background: #fbf7f7;
  border-radius: 8px;
  flex: 1;
}
a {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    .iconfont {
      font-size: 28px;
    }
  }
  .title {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #332929;
    line-height: 22px;
  }
}
</style>