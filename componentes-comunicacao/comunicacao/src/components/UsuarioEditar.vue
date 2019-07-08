<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do usuário <strong>{{i}}</strong></p>
        <button @click="alterarIdade">Altera idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props: {
        idade: Number
    },
    data:function(){
        return {
            i: this.idade
        }
    },
    methods:{
        alterarIdade(){
            this.i += 1
            barramento.alterarIdade(this.i)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
