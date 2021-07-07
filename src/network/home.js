import { request } from 'network/request.js'

// 对 request 在进行封装 将home需要的请求都在这个页面写

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}