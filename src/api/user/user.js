import request from "@/utils/request"
import store from "@/store"

export const login = data => {
    return request({
        method: 'post',
        url: '/v1_0/authorizations',
        data: data
    })
}

export const getCode = mobile => {
    return request({
        method: 'get',
        url: `/v1_0/sms/codes/${mobile}`,
        params: mobile
    })
}


/**
 * 获取用户自己信息
 */
export const getUserInfo = () => {
    return request({
        method: 'get',
        url: '/v1_0/user'
    })
}

/**
 * 获取用户频道列表
 */
 export const getUserChannel = () => {
    return request({
        method: 'get',
        url: '/v1_0/user/channels'
    })
}