<template>
  <div id="main">
    <div id="store-create">
      <div class="storeCreate">
        <el-form
          :inline="true"
          :model="storeOptions"
          ref="form"
          :rules="rules"
          class="form"
          label-position="top"
        >
          <el-form-item label="仓库编号" style="width:30.6%">
            <el-input :placeholder="storeOptions.code" disabled></el-input>
          </el-form-item>
          <el-form-item label="仓库名称" prop="name" style="width:30.6%">
            <el-input v-model="storeOptions.name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库类型" prop="type" style="width:30.6%">
            <el-select v-model="storeOptions.type" placeholder="请选择" :popper-append-to-body="false">
              <el-option label="中转仓" value="ZZ"></el-option>
              <el-option label="加工仓" value="JG"></el-option>
              <el-option label="储备仓" value="CB"></el-option>
              <el-option label="冷藏仓" value="LC"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="省/市/区" style="width:63.1%" prop="location">
            <el-cascader
              v-model="label"
              :options="areaDate"
              :props="{ expandTrigger: 'hover',label: 'label',value:'value'}"
              @change="cascaderChange"
              ref="cascader"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" style="width:63.1%">
            <el-input v-model="storeOptions.address" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库状态" prop="state" style="width:30.6%">
            <el-radio-group v-model="storeOptions.status">
              <el-radio :label="1">启用</el-radio>
              <el-radio :label="0">停用</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="仓库面积" style="width:30.6%">
            <el-input v-model.number="storeOptions.surface" placeholder="请输入">
              <template #suffix>
                <div style="background:#e7dfdf;width:40px;margin-right:-5px;">m³</div>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="负责人" prop="personName" style="width:30.6%">
            <el-input v-model="storeOptions.personName" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone" style="width:30.6%">
            <el-input v-model="storeOptions.phone" placeholder="请输入"></el-input>
          </el-form-item>
        </el-form>
        <div class="border-box"></div>
        <el-row type="flex" justify="center" style="margin-top:25px">
          <el-button
            round
            style="width:140px;margin-right:15px;"
            class="button back"
            @click="$emit('back-view')"
          >返回</el-button>
          <el-button round style="width:140px" class="button submit" @click="submit">提交</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getNextCode } from '@/api/public'
import { createStore, searchStore, editStore } from '@/api/warehouse'
import { regionData } from 'element-china-area-data'
export default {
  data() {
    return {
      storeOptions: {
        // 编码
        code: '',
        // 仓库名称
        name: '',
        // 仓库类型
        type: '',
        // 省/市/区
        location: '',
        // 详细地址
        address: '',
        // 仓库面积
        surface: '',
        // 负责人
        personName: '',
        // 联系电话
        phone: '',
        // 仓库状态
        status: 1,
        // 省
        province: '',
        // 市
        city: '',
        // 区
        area: ''
      },
      rules: {
        // 仓库名称
        name: [
          {
            required: true,
            message: '请输入仓库名称'
          }
        ],
        // 仓库类型
        type: [
          {
            required: true
          }
        ],
        // 省/市/区
        location: [],
        // 仓库状态
        status: [
          {
            required: true
          }
        ],
        // 负责人
        personName: [
          {
            required: true,
            message: '请输入负责人'
          }
        ],
        // 联系电话
        phone: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '请输入正确的电话号码'
          }
        ]
      },
      areaDate: regionData,
      label: []
    }
  },
  async created() {
    const id = this.$route.params.id
    // 结构出路由携带参数
    const {
      query: { code }
    } = this.$route
    if (id) {
      // 能接收到id,说明是编辑页面，数据回显
      this.storeOptions = await searchStore(id)
      this.$nextTick(() => {
        this.label.push(
          this.storeOptions.province,
          this.storeOptions.city,
          this.storeOptions.area
        )
        this.$refs.cascader.computePresentText()
      })
    } else if (code) {
      // 如果路由有参数，赋值给当前data中的code
      this.storeOptions.code = code
    } else {
      // 否则重新请求
      this.storeOptions.code = await getNextCode('CK')
    }
  },
  methods: {
    cascaderChange(value) {
      // 将省/市/区编码依次赋值
      this.storeOptions.province = value[0]
      this.storeOptions.city = value[1]
      this.storeOptions.area = value[2]
      // 拼接字符串，首先转成数组，在调用
      const arr = Array.prototype.slice.call(
        this.$refs.cascader.getCheckedNodes()[0].pathLabels
      )
      this.storeOptions.location = arr.join('/')
    },
    async submit() {
      // 检验表单规则
      await this.$refs.form.validate()
      // 根据id来确定是新增还是修改,有 ——>修改，无——>新增，提交表单给接口
      this.storeOptions.id
        ? await editStore(this.storeOptions)
        : await createStore(this.storeOptions)
      // 成功进行提示
      this.$message.success(
        `${this.storeOptions.id ? '修改' : '新增'}仓库成功！`
      )
      this.close()
    },
    close() {
      // 清除表单验证，
      this.$refs.form.clearValidate()
      // 重置表单以区分新增/修改
      this.storeOptions = {
        // 编码
        code: '',
        // 仓库名称
        name: '',
        // 仓库类型
        type: '',
        // 省/市/区
        location: '',
        // 详细地址
        address: '',
        // 仓库面积
        surface: '',
        // 负责人
        personName: '',
        // 联系电话
        phone: '',
        // 仓库状态
        status: 1,
        // 省
        province: '',
        // 市
        city: '',
        // 区
        area: ''
      }
      // 执行父组件的handleClose方法
      this.$emit('close-view')
    }
  }
}
</script>

<style scoped lang="less">
#main {
  margin: 0;
  padding: 0;
  background-color: #fdfafa;
}
#store-create {
  padding: 20px 30px 30px 30px;
}
.storeCreate {
  width: 88%;
  height: 509px;
  min-width: 1014px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
}
.form {
  width: 101%;
  display: flex;
  flex-wrap: wrap;
  padding: 18px 30px 10px 30px;
  /deep/.el-form-item__label {
    font-size: 12px;
    padding: 0;
    color: #887e7e;
  }
  /deep/.el-form-item {
    margin-right: 30px;
    margin-bottom: 18px;
    border: none;
    .el-select {
      display: block;
    }
  }
  /deep/input {
    background-color: #f8f5f5 !important;
    border: none;
  }
  /deep/.el-radio.is-checked {
    .el-radio__inner {
      border-color: #ffb200;
      background: #ffb200;
    }
    .el-radio__label {
      color: #ffb200;
    }
  }
  /deep/.el-select-dropdown__item:hover {
    background-color: #fff6e2 !important;
  }
  /deep/.el-select-dropdown__item.selected {
    color: #ffb200;
    font-weight: 700;
  }
}
.border-box {
  width: 100%;
  height: 1px;
  background-color: #f5efee;
}
.button {
  border: none;
  color: #332929;
  &:hover {
    background-color: #ff8e00 !important;
  }
}
.back {
  background-color: #f8f5f5;
}
.submit {
  background-color: #ffb200;
}
</style>