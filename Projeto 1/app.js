new Vue({
    el:'#app',
    data:{
        desiste: false,
        jogador:{
            vida: 100,
            logAtaque: []
        },
        monstro:{
            vida: 100,
            logAtaque: []
        }
    },
    methods:{
        ataque(){
            const dm = randomIntFromInterval(1,10);
            const dj = randomIntFromInterval(1,8);
            this.jogador.vida -= dm
            this.monstro.vida -= dj
            this.jogador.logAtaque.push('Jogador deu dano de '+ dj)
            this.monstro.logAtaque.push('Monstro deu dano de '+ dm)
        },
        ataqueEspecial(){
            const dm = randomIntFromInterval(1,6);
            const dj = randomIntFromInterval(1,10);
            this.jogador.vida -= dm
            this.monstro.vida -= dj
            this.jogador.logAtaque.push('Jogador deu dano de '+ dj)
            this.monstro.logAtaque.push('Monstro deu dano de '+ dm)
        },
        cura(){
            const dm = randomIntFromInterval(1,10);
            var dj = 0
            dj = randomIntFromInterval(1,10);
            this.jogador.vida = this.jogador.vida + dj > 100 ? 100 : this.jogador.vida + dj 
            
            this.jogador.vida -= dm
            this.jogador.logAtaque.push('Jogador curou '+ dj + ' de energia')
            this.monstro.logAtaque.push('Monstro deu dano de '+ dm)
        }
    }
})

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}