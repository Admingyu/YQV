import Vue from 'vue'
import App from './App'
import api from '@/common/http-request'

//组件使用vue-Blu	
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
Vue.use(VueBlu)
	
Vue.config.productionTip = false

Vue.prototype.$serverUrl = 'https://unidemo.dcloud.net.cn';
Vue.prototype.$apiUrl = 'http://localhost:5000';
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
