<template>
  <div id="storeManage">
    <div id="store-manage">
      <div class="head">
        <el-form :inline="true" class="form" label-position="top">
          <el-form-item label="仓库编号">
            <el-input v-model="query.like_code" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库名称">
            <el-input v-model="query.like_name" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="仓库状态">
            <el-select v-model="query.status" placeholder="请选择" popper-class="popSelect">
              <el-option label="全部" value="null"></el-option>
              <el-option label="停用" :value="0"></el-option>
              <el-option label="启用" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="primary" @click="searchMatch" round plain class="button search">搜索</el-button>
            <el-button type="primary" @click="clearMatch" round plain class="button clear">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="content">
        <el-button round class="btnAdd" @click="storeAdd">新增仓库</el-button>
        <el-table
          :data="list"
          border
          style="width: 100%"
          class="formTable"
          size="small"
          stripe
          :header-cell-style="{background:'#f9f6ee'}"
        >
          <el-table-column type="index" label="序号" align="center" width="68px"></el-table-column>
          <el-table-column prop="code" label="仓库编码" align="center" width="150px"></el-table-column>
          <el-table-column prop="name" label="仓库名称" align="center" width="150px"></el-table-column>
          <el-table-column prop="type" label="仓库类型" align="center" width="150px"></el-table-column>
          <el-table-column prop="location" label="省/市/区" align="center" width="200px"></el-table-column>
          <el-table-column prop="address" label="详细地址" align="center" width="150px"></el-table-column>
          <el-table-column prop="status" label="仓库状态" align="center" width="150px"></el-table-column>
          <el-table-column prop="surface" label="仓库面积" align="center" width="150px"></el-table-column>
          <el-table-column prop="includedNum" label="库区数量" align="center" width="150px"></el-table-column>
          <el-table-column prop="personName" label="负责人" align="center" width="150px"></el-table-column>
          <el-table-column prop="phone" label="联系电话" align="center" width="150px"></el-table-column>
          <el-table-column prop="updateTime" label="更新时间" align="center" width="200px"></el-table-column>
          <el-table-column
            prop="updateTime"
            label="操作"
            align="center"
            width="180px"
            class="method"
            fixed="right"
          >
            <template v-slot="{row}">
              <el-button
                type="text"
                style="color:#ffb200;padding:0"
                size="mini"
                @click="storeEdit(row)"
              >编辑</el-button>
              <el-button
                type="text"
                style="color:#ffb200;padding:0"
                size="mini"
                @click="changeStoreStatus(row)"
              >{{row.status==='启用'?'停用':'启用'}}</el-button>
              <el-button
                type="text"
                style="color:#ffb200;padding:0"
                size="mini"
                @click="storeDelete"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="center" style="margin-top:20px" class="block">
          <el-pagination
            @current-change="changeCurrent"
            :current-page="query.current"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="query.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="+total"
            popper-class="select_bottom"
          ></el-pagination>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { getStore, searchStore, editStore } from '@/api/warehouse'
import { getNextCode } from '@/api/public'
export default {
  data() {
    return {
      query: {
        // 当前页
        current: 1,
        // 每页数据
        size: 10,
        // 仓库编码
        like_code: null,
        // 仓库名称
        like_name: null,
        // 仓库状态
        status: null
      },
      // 请求到的数据
      list: [],
      // 总条数
      total: 0,
      style: {
        'white-space': 'nowrap'
      }
    }
  },
  created() {
    this.getStore()
  },
  methods: {
    searchMatch() {
      this.getStore()
    },
    clearMatch() {
      this.query.like_code = null
      this.query.like_name = null
      this.query.status = null
      this.getStore()
    },
    async getStore() {
      const { records, total } = await getStore(this.query)
      records.forEach((item) => {
        // 将类型改写
        if (item.type === 'ZZ') {
          item.type = '中转仓'
        } else if (item.type === 'JG') {
          item.type = '加工仓'
        } else {
          item.type = '储备仓'
        }
        // 将状态改写
        item.status = item.status === 1 ? '启用' : '停用'
      })
      this.list = records
      this.total = total
    },
    changeCurrent(page) {
      // 检测到页码被点击后，修改当前页码，并且重新获取数据
      this.query.current = page
      this.getStore()
    },
    async storeAdd() {
      // 请求新建仓库唯一编码
      const res = await getNextCode('CK')
      // 将参数传入路由，params传参不携带参数
      this.$router.push(`warehouse/create/${res}/`)
      this.$emit('add-handle', `/manage-base-info/warehouse/create/${res}/`)
    },
    storeDelete() {
      Message.info({
        message: '演示系统，不支持此操作',
        customClass: 'messageDelete',
        showClose: true,
        duration: 5000
      })
    },
    storeEdit(row) {
      this.$router.push(`warehouse/details/${row.id}/`)
      this.$emit('add-handle', `/manage-base-info/warehouse/details/${row.id}/`)
    },
    async changeStoreStatus(row) {
      const status = row.status === '启用' ? '停用' : '启用'
      try {
        await this.$confirm(
          `确认要${status}仓库：【${row.name}】吗？`,
          '确认信息',
          {
            cancelButtonClass: 'cancelBtn',
            confirmButtonClass: 'confirmBtn',
            title: `确认${status}`,
            customClass: 'messageChange',
            showClose: true,
            distinguishCancelAndClose: true,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            roundButton: true
          }
        )
        // 执行修改逻辑
        // 1、获取数据
        const res = await searchStore(row.id)
        // 2、修改状态
        res.status = res.status === 1 ? 0 : 1
        // 提交数据
        await editStore(res)
        // 更新仓库列表
        await this.getStore()
        // 成功后提示
        this.$message.success('状态改变成功！')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="less">
#storeManage {
  margin: 0;
  padding: 0;
  background-color: #fdfafa;
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
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 6px 0 rgb(144 142 142 / 17%);
    margin-top: 20px;
    padding: 20px 0 40px;
    .btnAdd {
      margin-left: 30px;
      margin-bottom: 20px;
      background-color: #00be76;
      color: #fff;
      :hover {
        background-color: #007a4c;
      }
    }
  }
  .form {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-left: 30px;
    .el-form-item__label {
      font-size: 12px;
      padding: 0;
      color: #887e7e;
    }
    .el-form-item {
      width: 25%;
      margin-right: 30px;
      .el-select {
        display: block;
      }
    }
    .btn {
      display: flex;
      justify-content: end;
      align-items: center;
      padding-top: 26px;
    }
    input {
      background-color: #f8f5f5 !important;
      border: none;
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
    .formTable {
      position: relative;
      .method {
        position: absolute;
      }
    }
  }
  .block {
    display: flex;
    justify-content: center;
    align-items: center;
    .demonstration {
      color: #1f2d3d;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
    }
    .el-input {
      &:hover {
        border: 1px solid #887e7e !important;
        border-radius: 4px;
      }
      &:focus-within {
        border: 1px solid #ffb200 !important;
        border-radius: 4px;
      }
    }
    .el-select .el-input__inner {
      width: 100px;
      height: 28px;
      background-color: #f8f5f5;
      border-radius: 4px;
      border: none;
      line-height: 28px;
      font-size: 12px;
    }
    .el-pagination__jump .el-input__inner {
      width: 44px;
      height: 26px;
      background-color: #f8f5f5;
      border-radius: 4px;
      border: none;
      line-height: 28px;
      font-size: 12px;
    }
    .el-pager li {
      &:hover {
        color: #ffb200;
      }
      &.active {
        color: #ffb200;
      }
    }
  }
  .el-table {
    tbody tr:hover > td {
      background-color: #fff6e2 !important;
    }
  }
  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #fdfcf9;
  }
}
.select_bottom {
  width: 100px;
  .el-select-dropdown__item.selected {
    font-weight: 700;
    color: #ffb249;
  }
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: #fff6e2;
  }
}
</style>