import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-fish1';
        super(config);
    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 2;
    public health = 1;
    public hit(player): void {
        this.clearTint();
        this.setScale(1.75)
        if(this.health>0){
            player.createProjectile(this.x, this.y, 'ocean-projectile', 100, function(projectile, player){
                console.log('projectile collider')
                player.health -=5;
                projectile.body.enable = false;
                setTimeout(function(){
                    projectile.destroy()
                },50)
            });
            this.health--;
        }else{
            this.destroy();
            console.log('hit', this.health)
            if(Math.random()*1000>999){
                player.createPowerUp(this.x, this.y, 'powerup-torpedo1', function(powerup, player){
                    console.log('powerup collider')
                    if (player.ship != 'player-l2'){
                        player.ship ='player-l3'
                        player.speed = 160; 
                        player.play('player-l3-idle')
       
                    }
                    powerup.setTintFill();
                    powerup.body.enable = false;
                    setTimeout(function(){
                        powerup.destroy()
                    },50)
                    })
    
                }
    
            }
        }

    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-50-this.scene.player.health);
                this.play({key:'ocean-fish1-swim-left', repeat: -1});
            }else{
                this.direction = 'right'
                this.setVelocityX(50+this.scene.player.health);
                this.play({key:'ocean-fish1-swim-right', repeat: -1});
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