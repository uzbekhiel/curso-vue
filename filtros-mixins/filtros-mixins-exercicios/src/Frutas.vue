<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta" >{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            fruta: '',
            frutas: ['banana', 'laranja', 'maça']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}
</script>

<style>

</style>
