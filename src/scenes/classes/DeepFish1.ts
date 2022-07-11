import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'deep-fish1';
        super(config);
    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 5;
    public hit(player, callback){
        player.health += this.damage;        
        console.log('Enemy destroyed!')
        if(Math.random()*100>90){
            player.createPowerUp(this.x, this.y, 'powerup-laser2', function(powerup, player){
                console.log('powerup collider')
                player.weapon ='laser4';
                player.cooldown -= 30;
                if(player.range<700) player.range += 50 
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })                               
        }
 
        this.destroy();
    }
    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-550+this.scene.player.health);
                this.play({key:'deep-fish1-swim-left', repeat: -1});
            }else{
                this.direction = 'right'
                this.setVelocityX(550-this.scene.player.health);
                this.play({key:'deep-fish1-swim-right', repeat: -1});
            }
        }
        this.setVelocityY(0);
        if(this.direction == 'right'){
            //this.setVelocityX(20);
        }else{
            //this.setVelocityX(-20);
        }
    }
}