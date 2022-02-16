import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import store from './config/store'
import './config/bootstrap'
import router from './config/router'
import './config/msgs'

Vue.config.productionTip = false

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkdhYnJpZWwgTW95YSBOYXNjaW1lbnRvIDEiLCJlbWFpbCI6ImdhYnJpZWxAdGVzdGUuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0NTAyOTcxMywiZXhwIjoxNjQ1Mjg4OTEzfQ.dYrYUnonETtgo_-fT2dgMVyAgapbopKa20UOyg5rQxU'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')