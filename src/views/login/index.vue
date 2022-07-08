<template>
  <div class="login">
    <van-nav-bar
      title="注册/登录"
      @click-left="$router.back()"
    >
      <i 
        slot="left" 
        class="iconfont icon-guanbi"
      ></i>
    </van-nav-bar>
    <van-form ref="loginForm" @submit="onSubmit">
      <van-cell-group inset>
          <van-field
            v-model="user.mobile"
            name="mobile"
            clearable
            placeholder="请输入手机号"
            :rules="userFormRules.mobile"
            type="number"
          >
            <i slot="left-icon" class="iconfont icon-shouji"></i>
          </van-field>
        <van-field
          v-model="user.code"
          name="code"
          center
          clearable
          placeholder="请输入短信验证码"
          :rules="userFormRules.code"
        >
          <i slot="left-icon" class="iconfont icon-yanzhengma"></i>
          <template #button>
            <van-count-down 
              v-if="countDownShow"
              :time="1000 * 5"
              format="ss s" 
              @finish="countDownShow = false">
              <template #default="timeData">
              <van-button 
                disabled 
                type="primary"
                size="small" 
                native-type="button" 
              >{{ timeData.seconds }}s</van-button>
                <!-- <span class="block">{{ timeData.seconds }}</span> -->
              </template>
            </van-count-down>
            <van-button 
              v-else
              native-type="button" 
              @click="sendSms" 
              size="small" 
              type="primary">获取验证码</van-button>
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="tip">
      <p>13911111111</p>
      <p>246810</p>
    </div>
  </div>
</template>

<script>
import { login, getCode } from '@/api/user/user.js'

export default {
  data(){
    return {
      user: {
        mobile: '',
        code: ''
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机格式错误'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        },{
          pattern: /^\d{6}$/,
          message: '验证码格式错误'
        }]
      },
      countDownShow: false
    }
  },
   methods: {
    async onSubmit() {
        this.$toast.loading({
          message: '登录中...',
          forbidClick: true,
          duration: 0
        });

      try {
        const res = await login(this.user)
        if( res.status !== 201 ){
          return this.$toast.fail('登录失败')
        }
        localStorage.setItem('token', res.data.data.token)
        this.$store.commit('setUser', res.data.data)
        this.$toast.success('登录成功')
        this.$router.back()
      } catch (error) {
        if(error.response.status === 400 ){
          this.user.mobile = ''
          this.user.code = ''
          return this.$toast.fail('手机号或验证码错误')
        }
        return this.$toast.fail('登录失败')
      }
    },
    async sendSms(){
      try {
        await this.$refs.loginForm.validate('mobile')
      } catch (error) {
        console.log(error)
      }

      this.countDownShow = true

      try {
        const res = await getCode(this.user.mobile)
        this.$toast('发送成功')
      } catch (error) {
        this.countDownShow = false
        if(error.response.status === 429){
          this.$toast('操作过于频繁')
        }else{
          this.$toast('发送失败，请稍后重试')
        }
      }
    }
  }
}
</script>

<style scope>
.tip{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tip p{
  font-size: 12px;
  color: grey;
}
.icon-guanbi{
  color: #fff;
}
</style>
