import Enemy from './Enemy'

export default class Spore extends Enemy {
    constructor(config:any) {
        config.key = 'deep-spore';
        super(config);
        this.health = 3 - (this.scene.player.health / 50);
        this.setScale(1.5)
        this.play({key:'deep-spore-idle', repeat: -1});

    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public renderType = 'spore'
    public damage = 10;
    private health;
    public hit(player): void {
        this.clearTint();
        this.setScale(1.5)
        if(this.health>0){
            player.createProjectile(this.x, this.y, 'deep-projectile-left', 120, function(projectile, player){
                console.log('projectile collider')
                player.health -=3;
                projectile.body.enable = false;
                setTimeout(function(){
                    projectile.destroy()
                },50)
            });
            this.health--;
        }else{
            this.destroy();
            if(Math.random()*100>50){
                player.createPowerUp(this.x, this.y, 'powerup-laser2', function(powerup, player){
                    console.log('powerup collider')
                    player.weapon ='laser4';
                    if(player.cooldown>30) player.cooldown -= 30;
                    if(player.range<700) player.range += 50 
                    powerup.setTintFill();
                    powerup.body.enable = false;
                    setTimeout(function(){powerup.destroy()},50)
                })                               
            }
        player.health += 10;

                                               
    }

    }
    update(t,d){
        this.setVelocityY(-35);
         /*if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
           if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-70);
                this.play({key:'ocean-spore-idle', repeat: -1});
                if(this.scene.player.x<this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
            }else{
                this.direction = 'right'
                this.setVelocityX(70);
                if(this.scene.player.x>this.x && Math.abs(this.scene.player.y-this.y)<100){
                    this.scene.physics.accelerateToObject(this, this.scene.player, 200, 500, 500);
                }
                this.play({key:'ocean-supermetrid-idle', repeat: -1});
            }
        }
        this.setVelocityY(-30);
        if(this.direction == 'right'){
            //this.setVelocityX(20);
        }else{
            //this.setVelocityX(-20);
        }*/
    }
}