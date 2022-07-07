<template>
    <div class="layout_container">
        <van-tabbar v-model="active">
            <van-tabbar-item>
                <i slot="icon" class="iconfont icon-shouye"></i>
                <span>首页</span>
            </van-tabbar-item>
            <van-tabbar-item>
                <span>问答</span>
                <i slot="icon" class="iconfont icon-wenda"></i>
            </van-tabbar-item>
            <van-tabbar-item>
                <span>视频</span>
                <i slot="icon" class="iconfont icon-shipin"></i>
            </van-tabbar-item>
            <van-tabbar-item>
                <span>我的</span>
                <i slot="icon" class="iconfont icon-wode"></i>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: 'layoutIndex'
}
</script>  

<style>

</style>