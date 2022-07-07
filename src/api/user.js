import request from "../utils/request"

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