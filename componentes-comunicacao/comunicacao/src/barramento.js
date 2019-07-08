import Vue from 'vue'

export default new Vue({
    methods:{
        alterarIdade:function(idade){
            this.$emit('idadeMudou',idade)
        },
        quandoIdadeMudar:function(callback){
            this.$on('idadeMudou',callback)
        }
    }
})