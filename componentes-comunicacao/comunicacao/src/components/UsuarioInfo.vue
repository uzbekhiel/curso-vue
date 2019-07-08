<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuário : <strong>{{inverterNome()}}</strong></p>
        <p>Idade do usuário <strong>{{i}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome Callback</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props: {
        nome: {
            type: String,
            //required: true,
            default: 'Anônimo'
            // default: function(){
            //     return Array(10).fill(0).join(',')
            // }
        },
        reiniciarFn: Function,
        idade: Number
    },
    data:function(){
        return{
            i: this.idade
        }
    },
    methods:{
        inverterNome:function(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome:function(){
            this.$emit('nomeMudou',{
                novo: 'Pedro',
                antigo: this.nome
            })
        }
    },
    created:function (){
        barramento.quandoIdadeMudar((idade)=>{
            this.i = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
