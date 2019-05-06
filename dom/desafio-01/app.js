new Vue({
    el:'#desafio',
    data:{
        nome: 'Saulo',
        idade: 31,
        linkImagem: 'https://www.aprenderexcel.com.br//imagens/post/385/2901-1.jpg'
    },
    methods:{
        PegaNumeroRandomico: function(){
            return Math.random()
        }
    }
})