new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alerta(){
            alert('alertando')
        },
        alteraValor(e){
            this.valor = e.target.value
        }
    }
})