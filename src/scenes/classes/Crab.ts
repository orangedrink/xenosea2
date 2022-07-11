import Enemy from './Enemy'

export default class DeepCrab extends Enemy {
    constructor(config:any) {
        config.key = 'deep-crab';
        super(config);
        this.play({key:'deep-crab2-crawl-up', repeat: -1});
    }
    private lastChanged = 0;
    private timeInterval = 300
    public direction = 'up'
    public damage = 30;
private health = 5
    public hit(player): void {
        this.clearTint();
        this.setScale(1.5)
        if(this.health>0){
            this.health--;
        }else{
            this.destroy();
            console.log('hit', this.health)
        }
        player.health += 20;        
        if(Math.random()*100>90){
                player.createPowerUp(this.x, this.y, 'powerup-torpedo1', function(powerup, player){
                console.log('powerup collider')
                player.ship ='player-l2'
                player.speed = 90;
                player.play('player-l2-idle')
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })                               
        }

    


    }
    update(t,d){
        let vel;
        if(Math.abs(this.scene.player.x-this.x)<300){
            vel = 250+this.scene.player.y/1000
        }else{
            vel = 150            
        }
        this.scene.physics.accelerateToObject(this, this.scene.player, vel, 300, 300);
    }
}