import Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }


  init(data){
    this.lastDepth=data.depth;
    this.discovered=data.discovered;
  }
  preload() {
    this.load.image('title', 'assets/title.png');
    this.load.image('display', 'assets/display.png');

//PLAYER ASSETS


    this.load.spritesheet('player-l1', 
        '/assets/sprites/player/l1.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-l2', 
        '/assets/sprites/player/l2.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-l3', 
        '/assets/sprites/player/l3.png',
        { frameWidth: 32, frameHeight: 48 }
    );
    this.load.spritesheet('player-laser1', 
        'assets/sprites/player/laser1.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.spritesheet('player-laser2', 
        'assets/sprites/player/laser2.png',
        { frameWidth: 16, frameHeight: 32 }
    );
    this.load.spritesheet('player-laser3', 
        'assets/sprites/player/laser3.png',
        { frameWidth: 16, frameHeight: 80 }
    );
    this.load.spritesheet('player-laser4', 
        'assets/sprites/player/laser4.png',
        { frameWidth: 24, frameHeight: 80 }
    );
    this.load.spritesheet('player-laserblast', 
        'assets/sprites/player/laserblast.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo1', 
        'assets/sprites/player/torpedo1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo2', 
        'assets/sprites/player/torpedo2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('player-torpedo3', 
        'assets/sprites/player/torpedo3.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-laser1', 
        'assets/sprites/player/powerup-laser1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-laser2', 
        'assets/sprites/player/powerup-laser2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo1', 
        'assets/sprites/player/powerup-torpedo1.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo2', 
        'assets/sprites/player/powerup-torpedo2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-torpedo3', 
        'assets/sprites/player/powerup-torpedo3.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism1', 
      'assets/sprites/player/powerup-macroorganism1.png',
      { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism2', 
        'assets/sprites/player/powerup-macroorganism2.png',
        { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('powerup-macroorganism3', 
        'assets/sprites/player/powerup-macroorganism3.png',
        { frameWidth: 16, frameHeight: 16 }
    );


//OCEAN ASSETS
    this.load.spritesheet('ocean-projectile', 
    'assets/sprites/ocean/projectile.png',
    { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet('ocean-jellyfish1', 
    'assets/sprites/ocean/jellyfish1.png',
    { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-jellyfish2', 
    'assets/sprites/ocean/jellyfish2.png',
    { frameWidth: 96, frameHeight: 64 }
    );


    this.load.spritesheet('ocean-fish1', 
      'assets/sprites/ocean/fish1.png',
      { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-fish2', 
        'assets/sprites/ocean/fish2.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-yardworm', 
        'assets/sprites/ocean/yardworm.png',
        { frameWidth: 32, frameHeight: 64 }
    );

    this.load.spritesheet('ocean-macroorganism1', 
        'assets/sprites/ocean/macroorganism1.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-macroorganism2', 
        'assets/sprites/ocean/macroorganism2.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-macroorganism3', 
        'assets/sprites/ocean/macroorganism3.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-supermetrid', 
        'assets/sprites/ocean/supermetrid.png',
        { frameWidth: 64, frameHeight: 64 }
    );

    this.load.spritesheet('ocean-projectile-left', 
        'assets/sprites/ocean/projectile-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-projectile-right', 
        'assets/sprites/ocean/projectile-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('ocean-blast-left', 
        'assets/sprites/ocean/blast-left.png',
        { frameWidth: 32, frameHeight: 32 }
    );

    this.load.spritesheet('ocean-blast-right', 
        'assets/sprites/ocean/blast-right.png',
        { frameWidth: 32, frameHeight: 32 }
    );

    //DEEP ASSETS

    this.load.spritesheet('deep-fish1', 
        'assets/sprites/deep/fish1.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('deep-fish2', 
        'assets/sprites/deep/fish2.png',
        { frameWidth: 48, frameHeight: 32 }
    );

    this.load.spritesheet('deep-crab', 
        'assets/sprites/deep/crab.png',
        { frameWidth: 48, frameHeight: 32 }
    );
    this.load.spritesheet('deep-crab2', 
        'assets/sprites/deep/crab2.png',
        { frameWidth: 48, frameHeight: 48 }
    );

    this.load.spritesheet('deep-projectile-left', 
        'assets/sprites/deep/projectile-left.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('deep-projectile-right', 
        'assets/sprites/deep/projectile-right.png',
        { frameWidth: 16, frameHeight: 16 }
    );

    this.load.spritesheet('deep-blast-left', 
        'assets/sprites/deep/blast-left.png',
        { frameWidth: 32, frameHeight: 32 }
    );

    this.load.spritesheet('deep-blast-right', 
        'assets/sprites/deep/blast-right.png',
        { frameWidth: 32, frameHeight: 32 }
    );
    this.load.spritesheet('deep-spore', 
        'assets/sprites/deep/spore.png',
        { frameWidth: 32, frameHeight: 32 }
    );

//LEVELS

this.load.image('ice-wall-bg-left', 'assets/ice-wall-bg-left.png');
this.load.image('ice-wall-bg-right', 'assets/ice-wall-bg-right.png');
this.load.image('surface-bg', 'assets/surface-bg.png');


//MISC
this.load.image('bubble', 'assets/bubble.png');

//MUSIC


    this.load.audio('music', ['assets/sounds/music.ogg']);
  }



  create() {
    const title = this.add.image(400, 300, 'title');
    title.alpha = 0;
    if(this.lastDepth){
        console.log('Depth reached: ', this.lastDepth);
        this.depthText = this.add.text(400, 480, 'YOU REACHED A DEPTH OF '+ Math.round(this.lastDepth)+' METERS AND DISCOVERED '+this.discovered+' NEW SPECIES', {
            font: "12px Arial",
            color: '#8cf0fb',
            
          }).setOrigin(0.5);
    }
    this.tweens.add({
      targets: title,
      alpha: 1,
      duration: 2000,
      onCompleteScope: this,
      onComplete: function () {
        
        this.input.keyboard.on('keyup', () => {
            this.tweens.add({
              targets: title,
              alpha: 0,
              duration: 1000,
              onCompleteScope: this,
              onComplete: function () {
                this.scene.start('GameScene')        
              }
            })
          }, this)     
      }
    });
    var music = this.sound.add('music', { loop: true });
    //comment the following out to show title screen
    //this.scene.start('GameScene')
    music.play();
    /*this.input.keyboard.on('keyup', () => {
      this.tweens.add({
        targets: title,
        alpha: 0,
        duration: 3000,
        onCompleteScope: this,
        onComplete: function () {
          this.scene.start('GameScene')        
        }
      })
    }, this)
*/
  }
}
