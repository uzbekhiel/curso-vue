import Vue from 'vue'

export default new Vue({
    methods:{
        getUser:function(user){
            this.$emit('getUser',user)
        },
        receiveUser:function(callback){
            this.$on('getUser',callback)
        }
    }
})