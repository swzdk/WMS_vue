<template>
  <div id="main">
    <div id="store-manage">
      <div class="head">
        <el-form :inline="true" :model="storeForm" class="form" label-position="top">
          <el-form-item label="仓库编号">
            <el-input v-model="storeForm.id" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库名称">
            <el-input v-model="storeForm.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库状态">
            <el-select v-model="storeForm.state" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="onSubmit" round plain class="button search">搜索</el-button>
            <el-button type="primary" @click="onSubmit" round plain class="button clear">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeForm: {
        id: '',
        name: '',
        state: ''
      }
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>

<style scoped lang="less">
#main {
  margin: 0;
  padding: 0;
  background-color: #fdfafa;
}
#store-manage {
  padding: 20px 30px 30px 30px;
}
.head {
  width: 88%;
  min-width: 1014px;
  height: 127px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  display: flex;
  align-items: center;
}
.content {
  width: 88%;
  min-width: 1014px;
  height: 449px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
  margin-top: 20px;
}
.form {
  position: relative;
  width: 100%;
  margin-left: 30px;
  /deep/.el-form-item__label {
    font-size: 12px;
    padding: 0;
    color: #887e7e;
  }
  .el-form-item {
    margin-right: 30px;
  }
  /deep/input {
    background-color: #f8f5f5 !important;
    border: none;
  }
  .btn {
    margin-top: 38px;
    position: absolute;
    right: 10px;
  }
  .button {
    margin-left: 20px;
    color: #332929;
    border: none;
    &.search {
      background-color: #ffb200;
      &:hover {
        background-color: #ff8e00;
      }
    }
    &.clear {
      background-color: #f8f5f5;
      &:hover {
        background-color: #ffb200;
      }
    }
  }
}
</style>