import Vue from 'vue'
import axios from 'axios'


// axios.defaults.baseURL = 'https://curso-vue-f93e2-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'aplication/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-f93e2-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": 'abc123'
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(resp => {
            // const array = []
            // for (let chave in resp.data) {
            //     array.push({ id: chave, ...resp.data[chave] })
            // }

            // resp.data = array
            return resp
        }, error => Promise.reject(error))
    }
})