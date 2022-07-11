import Enemy from './Enemy'

export default class OceanJellyfish1 extends Enemy {
    constructor(config:any) {
        config.key = 'ocean-jellyfish1';
        super(config);
    }
    private lastChanged = 0;
    private timeInterval = 3000
    public direction = 'right'
    public damage = 1;
    
    update(t,d){
        if(t>this.lastChanged+this.timeInterval && Math.random()>.75){
            this.lastChanged = t;
            if(this.direction == 'right'){
                this.direction = 'left'
                this.setVelocityX(-50-(this.scene.player.health/2));
                this.play({key:'ocean-jellyfish1-swim-left', repeat: -1});
            }else{
                this.direction = 'right'
                this.setVelocityX(50+(this.scene.player.health/2));
                this.play({key:'ocean-jellyfish1-swim-right', repeat: -1});
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