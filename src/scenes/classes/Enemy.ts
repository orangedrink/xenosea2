export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }
    public damage = 1;
    public renderType = 'enemy'
    public hit(player, callback){
        player.health += this.damage;        
        console.log('Enemy destroyed!')
        if(Math.random()*100>90){
            player.createPowerUp(this.x, this.y, 'powerup-laser2', function(powerup, player){
                console.log('powerup collider')
                if(player.weapon =='laser1'){
                    player.weapon ='laser2';
                }else{
                    player.weapon ='laser3';
                }
                if(player.range<500) player.range += 20 
                powerup.setTintFill();
                powerup.body.enable = false;
                setTimeout(function(){powerup.destroy()},50)
            })                               
        }
 
        this.destroy();
    }
}