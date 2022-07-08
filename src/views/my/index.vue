<template>
    <div class="my">

        <!-- 未登录头部 -->
        <div v-if="!user" class="header">
            <div class="login-btn" @click="$router.push('/login')">
                <img src="~@/assets/mobile.png" alt="">
                <p>登录 / 注册</p>
            </div>
        </div>

        <!-- 登录头部 -->
        <div v-else class="header header-login">
            <div class="top">
                <div class="left">
                    <van-image
                        round
                        id="userImage"
                        :src="userInfo.photo"
                    />
                    <span id="userName">{{ userInfo.name}}</span>
                </div>
                <div class="right">
                    <van-button 
                        type="default"
                        round
                        size="mini"
                        class="edit-btn">
                        <span class="edit-text">编辑资料</span>
                    </van-button>
                </div>
            </div>
            <div class="bottom">
                <div class="data-item">
                    <span class="count">{{ userInfo.art_count }}</span>
                    <span class="text">头条</span>
                </div>
                <div class="data-item">
                    <span class="count">{{ userInfo.follow_count }}</span>
                    <span class="text">关注</span>
                </div>
                <div class="data-item">
                    <span class="count">{{ userInfo.fans_count }}</span>
                    <span class="text">粉丝</span>
                </div>
                <div class="data-item">
                    <span class="count">{{ userInfo.like_count }}</span>
                    <span class="text">获赞</span>
                </div>
            </div>
        </div>

        <!-- 收藏、历史 -->
        <div class="gride">
            <van-grid clickable :column-num="2">
                <van-grid-item text="收藏" to="/">
                    <i slot="icon" class="iconfont icon-shoucang collection"></i>
                </van-grid-item>
                <van-grid-item text="历史" url="" >
                    <i slot="icon" class="iconfont icon-lishi histroy"></i>
                </van-grid-item>
            </van-grid>
        </div>

        <!-- 消息通知、小智同学、退出登录 -->
        <div class="mes">
            <van-cell title="消息通知" is-link />
            <van-cell title="小智同学" is-link /> 
            <van-cell v-if="user" @click="onlogout" title="退出登录" class="logout" />
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getUserInfo } from '@/api/user/user.js'
export default {
    data() {
        return {
            userInfo: ''
        }
    },  
    created() {
        if(this.user) {
            this.loadUserInfo()
        }
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        ...mapMutations(['logout']),
        onlogout(){
            this.$dialog.confirm({
                title: '确认退出吗'
            })
            .then(() => {
                this.logout()
            })
            .catch(() => {
                return
            })
        },
        async loadUserInfo() {
            try{
                const { data } = await getUserInfo() 
                this.userInfo = data.data
            }catch(error) {
                this.$toast('获取数据失败，请稍后重试')
            }
            
        }
    }
}
</script>

<style scoped>
@import url('~@/style/my/index.css');
.header{
    height: 361px;
    background: url("~@/assets/banner.png");
    background-size: cover;
}

</style>