import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-yardworm';
        super(config);
        this.play({key:'ocean-yardworm-crawl', repeat: -1});
    }
    private lastChanged = 0;
    private timeInterval = 300
    public direction = 'up'
    public damage = 10;
    public hit(player, callback){
        player.health += this.damage;        
        console.log('Enemy destroyed!')
        if(Math.random()*100>60){
            player.createPowerUp(this.x, this.y, 'powerup-laser2', function(powerup, player){
                if(player.weapon =='laser1'){
                    player.weapon ='laser2';
                }else{
                    player.weapon ='laser3';
                }
                if(player.range<500) player.range += 30 
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })                               
        }
 
        this.destroy();
    }
    update(t,d){
        let vel;
        if(Math.abs(this.scene.player.x-this.x)<100){
            vel = 150
        }else{
            vel = 20            
        }
        this.scene.physics.accelerateToObject(this, this.scene.player, vel, 300, 300);
    }
}