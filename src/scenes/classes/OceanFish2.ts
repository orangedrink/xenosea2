import Enemy from './Enemy'

export default class OceanFish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-fish2';
        super(config);
    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 3;
    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-350+this.scene.player.health);
                this.play({key:'ocean-fish2-swim-left', repeat: -1});
            }else{
                this.direction = 'right'
                this.setVelocityX(350-this.scene.player.health);
                this.play({key:'ocean-fish2-swim-right', repeat: -1});
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