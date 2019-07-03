new Vue({
    el:'#app',
    data:{
        desiste: true,
        jogador:{
            vida: 100,
            logAtaque: [],
            vidaBaixa: false
        },
        monstro:{
            vida: 100,
            logAtaque: [],
            vidaBaixa: false
        }
    },
    methods:{
        iniciaJogo(){
            this.jogador.vida = 100
            this.jogador.vidaBaixa = false
            this.jogador.logAtaque = []
            this.monstro.vida = 100
            this.monstro.vidaBaixa = false
            this.monstro.logAtaque = []
            this.desiste = false
        },
        ataque(){
            this.GravaDanos(2,0,false)
        },
        ataqueEspecial(){
            this.GravaDanos(0,4,false)
        },
        cura(){
            this.GravaDanos(0,5,true)
        },
        GravaDanos(modJ,modM,cura){
            const dm = randomIntFromInterval(1,10-modM);
            var dj = 0
            
            if(cura){
                dj = randomIntFromInterval(1,10-modJ);
                this.jogador.vida = this.jogador.vida + dj > 100 ? 100 : this.jogador.vida + dj 
                this.jogador.vida -= (this.jogador.vida - dm) < 0 ? 1 : dm
            }else{
                dj = randomIntFromInterval(1,10-modJ);
                this.jogador.vida -= (this.jogador.vida - dm) < 0 ? 1 : dm
                this.monstro.vida -= (this.monstro.vida - dj) < 0 ? 1 : dj
            }
            this.MudaCorVida()
            this.GravaLog(dj,dm,cura)
        },
        MudaCorVida(){
            if(this.jogador.vida < 20){
                this.jogador.vidaBaixa = true;
            }
            if(this.monstro.vida < 20){
                this.monstro.vidaBaixa = true;
            }
        },
        GravaLog(dj,dm,cura){
            if(!cura){
                this.jogador.logAtaque.push('Jogador deu dano de '+ dj)
                this.monstro.logAtaque.push('Monstro deu dano de '+ dm)
            }else{
                this.jogador.logAtaque.push('Jogador curou '+ dj + ' de energia')
                this.monstro.logAtaque.push('Monstro deu dano de '+ dm)
            }
        }
    }
})

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}