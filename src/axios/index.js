import axios from "axios";

import Vue from 'vue'

const instance = axios.create(config)

// 3. 配置信息
let config = {
    // 每次请求的协议、IP地址。  设置该配置后，每次请求路径都可以使用相对路径，例如"/admin/login"
    // baseURL: "http://localhost",
    // 请求超时时间
    timeout: 10000,
    // 每次请求携带cookie
    withCredentials: true
}

// 2. 响应拦截
instance.interceptors.response.use(res => {
      if(res.status == 200){
        if(res.data.success){
            Vue.prototype.$Message.success(res.data.message)
            return res.data
        }else{
            Vue.prototype.$Message.error(res.data.message)
            return res.data
        }
      }else{
          return Vue.prototype.$Message.error('请求超时')
      }
    },
    // 对于错误响应的处理
    err => Vue.prototype.$Message.error("请重试")
);

export default instance
