<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{aluno.cpf | inverter | cpf }}</p>
		<hr>
		<input type="text" :value="aluno.cpf |cpf" >
		<hr>
		<Frutas />
		<hr>
		<ul>
            <li v-for="fruta in frutas" :key="fruta" >{{fruta}}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
	</div>
</template>

<script>
import Frutas from './Frutas.vue'

export default {
	components:{
		Frutas
	},
	filters:{
		cpf:function(v){
			const arr = `${v}`.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data:function(){
		return{
			aluno :{
				cpf: '12345678909',
			},
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
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input{
	font-size: 2.5rem;
}
</style>
