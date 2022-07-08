import request from "@/utils/request"

export const gteChannelList = () => {
    return request({
        method: 'get',
        url: '/v1_0/channels'
    })
}