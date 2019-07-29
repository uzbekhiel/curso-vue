import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contaPalavras',function(v){
	return `${v}`.split(' ').map(n=> `${n} (${n.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
