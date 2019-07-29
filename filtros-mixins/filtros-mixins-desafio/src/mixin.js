export default{
    computed:{
		fraseComVirgulas:function(){
			return this.frase.replace(/\s/g,',')
		},
		fraseContaPalavras:function(){
			return this.frase.split(' ').map(n=> `${n} (${n.length})`).join(' ')
		}
	}
}