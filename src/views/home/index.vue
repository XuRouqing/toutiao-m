<template>
  <div class="home">
    <div class="head">
      <van-nav-bar
        left-arrow
      >
        <van-button 
          size="small" 
          slot="title" 
          class="search-btn" 
          type="info">
            <i class="iconfont icon-sousuo"></i> 搜索
        </van-button>
      </van-nav-bar>
    </div>
    <div class="tab">
      <van-tabs
        class="channel-tabs"
        swipeable 
        animated
        color="#5babfb"
        line-width="31px">
        <div slot="nav-right" class="placeholder"></div>
        <div slot="nav-right" class="hambuger-btn">
          <i class="iconfont icon-gengduo"></i>
        </div>

        <van-tab
          v-for="item in channelList"
          :title="item.name" :key="item.id">
          {{ item.name }}
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { getUserChannel } from '@/api/user/user.js'
export default {
  data(){
    return {
      value: '',
      channelList: ''
    }
  },
  created() {
    this.loadChannelList()
  },
  methods: {
    async loadChannelList() {
      try {
        const { data } = await getUserChannel()
        this.channelList = data.data.channels
      } catch (error) {
        this.$toast('获取用户列表失败')
      }
    }
  }
}
</script>

<style>
@import url('~@/style/home/index.css');
</style>