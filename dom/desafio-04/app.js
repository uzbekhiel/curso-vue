new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false,
		classCSS : 'c1',
		aplicaClasse: false
	},
	computed:{
		mudarEfeito(){
			return {
				destaque: !this.aplicarEfeito,
				encolher: this.aplicarEfeito
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{ this.aplicarEfeito = !this.aplicarEfeito }, 2000);
		},
		iniciarProgresso() {

		},
		aplicacaoClasse(e){
			if(e.target.value == "true"){
				this.aplicaClasse = true
			}else if(e.target.value == "false"){
				this.aplicaClasse = false
			}
		}
	}
})
