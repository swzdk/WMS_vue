<template>
  <div class="main">
    <div class="content">
      <div class="left">
        <img src="@/assets/title.ef005a7a.png" alt />
        <!-- form表单 -->
        <el-form :model="login" :rules="formRules" ref="ruleForm" class="login-form">
          <el-form-item prop="userName">
            <el-input type="text" v-model="login.userName" prefix-icon="el-icon-mobile" class="ipt"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="login.password"
              prefix-icon="el-icon-lock"
              show-password
              class="ipt"
            ></el-input>
          </el-form-item>
          <el-form-item class="cbx">
            <el-checkbox label="记住密码" name="type" v-model="isMemory"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="btnLogin" class="btn">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created() {
    // 每当页面首次加载或是刷新时，判断vuex中是否保存密码
    // 1、有保存密码，返回null或者真实数据
    // 2、没有保存，返回空值对象
    const res = this.UserInfo
    if (res) this.login = res
    this.isMemory = this.stateMemory
  },
  data() {
    return {
      isMemory: false,
      login: {
        userName: '',
        password: ''
      },
      formRules: {
        userName: [
          {
            required: true,
            trigger: 'blur',
            message: '用户名不能为空！'
          },
          {
            pattern: /^admin$/,
            trigger: 'blur',
            message: '用户名不正确！'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '密码不能为空！'
          },
          {
            pattern: /^111111$/,
            trigger: 'blur',
            message: '密码不正确！'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters('user', ['UserInfo', 'stateMemory'])
  },
  methods: {
    async btnLogin() {
      try {
        // 进行表单校验
        await this.$refs.ruleForm.validate()
        // 正确时传入表单
        this.$store.commit('user/setLoginInfo', this.login)
        this.$router.push('/dashboard')
      } catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    isMemory(val) {
      this.$store.commit('user/changeStateMemory', val)
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: relative;
  display: flex;
  width: 100%;
  height: 960px;
  justify-content: center;
  align-items: center;
  .content {
    width: 958px;
    height: 516px;
    border-radius: 34px;
    box-shadow: 0 0 9px rgb(93 93 93 / 33%);
    display: flex;
    z-index: 0;
    .left {
      width: 398px;
      height: 516px;
      border-radius: 34px;

      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      img {
        width: 150px;
        height: 64px;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        .ipt {
          width: 280px;
          height: 50px;
          border: none;
          border-radius: 0 8px 0 8px;
          /deep/input {
            height: 50px;
          }
        }
        .cbx {
          margin-right: auto;
        }
        /deep/.el-input__prefix {
          top: 1px;
          left: 0 !important;
          width: 50px;
          height: 48px;
          border-radius: 8px 0 0 8px;
          background-color: #eae7e7;
          font-size: 25px;
          line-height: 48px;
          text-align: center;
          .el-input__icon {
            width: 50px;
          }
        }
        /deep/.el-input__inner {
          padding-left: 60px;
          border: 1px solid #fff;
          background-color: #f8f5f5;
        }
        /deep/.el-checkbox__input {
          &.is-checked {
            .el-checkbox__inner {
              background-color: #ffb200;
            }
          }
        }
        /deep/.el-checkbox__inner {
          border-color: #ffb200;
        }
        /deep/.el-checkbox__label {
          color: #ffb200;
        }
        .btn {
          width: 280px;
          height: 50px;
          background: #ffb200;
          border: none;
          border-radius: 8px;
          box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          color: #332929;
          line-height: 22px;
        }
      }
    }
    .right {
      flex: 1;
      width: 560px;
      height: 100%;
      border-radius: 0 34px 34px 0;
      background: url(~"@/assets/contentBg.1321d126.png") center center;
      background-size: 100% 100%;
    }
  }
}
</style>