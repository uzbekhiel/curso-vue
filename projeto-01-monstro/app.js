Vue.component('score',{
    template:"#score",
    props: ['life', 'player']
})

Vue.config.devtools = true;

new Vue({
    el:'#app',
    data:{
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife == 0
        }
    },
    watch:{
        hasResult: function(value){
            if(value) this.running = false
        }
    },
    methods:{
        startGame:function(){
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
        },
        attack: function(special){
            this.hurt('monsterLife',5,10,special,'Jogador', 'Monstro','player')
            if(this.monsterLife > 0)
                this.hurt('playerLife',7,12,false,'Monstro', 'Jogador','monster')
        },
        hurt: function(attr, min, max, special, source, target, cls){
            const plus = special ? 5 : 0
            const hurt = this.getRound(min+plus, max+plus)
            this[attr] = Math.max(this[attr] -hurt,0)
            this.registerLog(source + ' atingiu '+ target + ' com '+ hurt,cls)
        },
        healAndHurt:function(){
            this.heal(10,15)
            this.hurt('playerLife',7,12,false,'Monstro', 'Jogador','monster')
        },
        heal: function(min, max){
            const heal = this.getRound(min,max)
            this.playerLife = Math.min(this.playerLife + heal,100)
            this.registerLog('Jogador ganhou força de ' + heal,'player')
        },
        getRound:function(min,max){
            const value = Math.random() * (max-min) + min
            return Math.round(value)
        },
        registerLog:function(text,cls){
            this.logs.unshift({text, cls})
        }
    }
})