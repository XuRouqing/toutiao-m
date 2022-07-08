<template>
    <div class="layout_container">
        <router-view />
        <van-tabbar route>
            <van-tabbar-item name="home" to="/">
                <i slot="icon" class="iconfont icon-shouye layout-icon"></i>
                <span class="layout-title">首页</span>
            </van-tabbar-item>
            <van-tabbar-item name="question" to="/question">
                <span class="layout-title">问答</span>
                <i slot="icon" class="iconfont icon-wenda layout-icon"></i>
            </van-tabbar-item>
            <van-tabbar-item name="vedio" to="/vedio">
                <span class="layout-title">视频</span>
                <i slot="icon" class="iconfont icon-shipin layout-icon"></i>
            </van-tabbar-item>
            <van-tabbar-item name="my" to="/my">
                <span v-if="user" class="layout-title">我的</span>
                <span v-else class="layout-title">未登录</span>
                <i slot="icon" class="iconfont icon-wode layout-icon"></i>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'layoutIndex',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['user'])
    }
}
</script>  

<style scoped>
.van-tabbar-item .layout-title, 
.van-tabbar-item .layout-icon{
    font-size: 30px;
}
</style>