export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(config:any) {
        super(config.scene, config.x, config.y, config.key);
        this.scene = config.scene;
        this.scene.add.existing(this);
        this.ship = config.key;
        this.scene.physics.add.existing(this);
        this.body.useDamping=true;
        this.setDrag(.4)
        var particles = this.scene.add.particles('bubble');

        this.emitter = particles.createEmitter({
            lifespan: 1000,
            speedX: { min: -50, max: 50 },
            quantity: 1,
            gravityY: -50,
            angle: {min: 90, max: 180},
            scale: { start: 0.2, end: .5, ease: 'Power3' },
            alpha: { start: 0.6, end: 0, ease: 'Power3' },
            blendMode: 'ADD'
        });
        this.emitter.startFollow(this);
    }
    public direction: any;
    public shooting: boolean = false;
    public speed = 60;
    public weapon = 'laser1';
    public ship;
    public cooldown = 90
    private lastShot = 0;
    private range = 300;
    public health = 100;
    private doShoot(){
        
            let yoff = 16;
            let duration = this.range *2
            let speed = this.range;
            //this.health--
            if(this.weapon=='laser3'||this.weapon=='laser4'){
                yoff = 50
            }else if(this.weapon.indexOf('torpedo')==0){
                duration = duration*5
                speed = duration/4
            }
            const laser = this.scene.physics.add.image(this.x, this.y+yoff, `player-${this.weapon}`);
            laser.setVelocityY(speed+this.body.velocity.y)
              const _this = this;
              this.scene.enemies.forEach(function(enemy){
                _this.scene.physics.add.collider(laser, enemy, function (laser, spr ){
                    spr.setTintFill()
                    _this.scene.tweens.add({
                        targets: spr,
                        scale: 0,
                        duration: 50,
                        onCompleteScope: _this,
                        onComplete: function () {

                            spr.hit(_this.scene.player);
                        }
                      })
                    laser.destroy()
                });
                    
              })

              this.scene.tweens.add({
                targets: laser,
                alpha: .25,
                duration: duration,
                onCompleteScope: this,
                onComplete: function () {
                    laser.destroy();
                }
              });

    }
    public createPowerUp(x,y, type, colideHandler){

        const powerup = this.scene.physics.add.image(x, y, type);
        this.scene.physics.add.collider(powerup, this, colideHandler)
        powerup.setVelocityY(-250);
        powerup.setVelocityX(8-(Math.random()*16));
        console.log('powerup!', type)
    }

    public createProjectile(x,y, type, speed, colideHandler){

        const powerup = this.scene.physics.add.image(x, y, type);
        this.scene.physics.add.collider(powerup, this, colideHandler)
        powerup.setVelocityY(0-speed);
        powerup.setVelocityX(4-(Math.random()*8));
        console.log('projectile!', type)
    }

    private setShooting(shooting:boolean){
        if(this.shooting == shooting){
            return;
        }
        if(shooting){
            this.play(`${this.ship}-shooting-${this.weapon}`)
            this.doShoot();
        }else{
            this.play(`${this.ship}-idle`)
        }
        this.shooting = shooting;
    }

    private setDirection(direction: string){
        if(this.direction == direction){
            return;
        }
        this.direction = direction;
    }

    update(t, d): void {
        if(this.scene.keys.right.isDown){
            this.setDirection('right');
        } else
        if(this.scene.keys.left.isDown){
            this.setDirection('left');
        } else
        if(this.scene.keys.up.isDown){
            this.setDirection('up');
        } else
        if(this.scene.keys.down.isDown){
            this.setDirection('down');
        } else{
            this.setDirection('none');
        }

        if(this.scene.keys.space.isDown){
            this.setShooting(true);
        }else{
            this.setShooting(false);
        }
        if(this.shooting && t > this.lastShot + this.cooldown){
            this.lastShot = t;
            if(this.weapon == 'laser2' || this.weapon == 'laser3' || this.weapon == 'laser4' ){
                this.doShoot();   
            }
        }
        if(this.direction == 'right'){
            this.setVelocityX(this.speed*2)
        } else if(this.direction == 'left'){
            this.setVelocityX(0-this.speed*2)
        } else if(this.direction == 'up'){
            this.emitter.frequency=20;
            this.emitter.setSpeedY(50);
            this.emitter.emitParticle(1)
            this.emitter.setAngle({min:90,max:0})
            if(this.y>0){
                this.setVelocityY(0-this.speed*2)
            }
        } else if(this.direction == 'down'){
            this.setVelocityY(this.body.velocity.y+this.speed)
        } else {
            this.emitter.frequency=1000;
            this.emitter.setSpeedY(2);
        }
        if(this.body.velocity.y>this.speed*3){
            this.setVelocityY(this.speed*3)
        }
        if(this.health < 1 || this.dead==true){
            this.health = 0;
            this.dead = true
            this.emitter.setAngle({min:0,max:360})
            this.emitter.setSpeedY({min:0,max:300})
            this.emitter.setSpeedX({min:0,max:300})
            this.emitter.emitParticle(200)
            this.scene.tweens.add({
                targets: this.scene.background,
                alpha: 0,
                duration: 1000,
                onCompleteScope: this,
                onComplete: function () {
                    this.scene.scene.start('TitleScene', {depth:this.y, discovered: this.scene.discovered}) 
                }
              });
        }else if(this.health > 100){
            this.health = 100;
        }
    }
}