<template>
  <div>
    <div class="hr"></div>
    <div class="title">{{note.title}}</div>
    <div class="time">{{note.time}}</div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.hr {
  width: 201px;
  height: 1px;
  background-color: #f5efee;
}
.title {
  width: 195px;
  height: 18px;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #332929;
  line-height: 18px;
  margin-top: 15px;
}
.time {
  width: 115px;
  height: 17px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #887e7e;
  line-height: 17px;
  margin-top: 10px;
}
</style>