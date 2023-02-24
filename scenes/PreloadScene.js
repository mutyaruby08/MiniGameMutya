

class PreloadScene extends Phaser.Scene {

    constructor() {
      super('PreloadScene');
    }
  
    preload() {
      this.load.image('sky', 'assets/sky.png');
      this.load.spritesheet('bird', 'assets/birdSprite.png', {
        frameWidth: 16, frameHeight: 16
      });
      this.load.image('pipe', 'assets/pipe.png');
      this.load.image('pause', 'assets/pause.png');
      this.load.image('back', 'assets/back.png');
      this.load.audio('music', 'assets/Glouglou.mp3')
    }
  
    create() {
      this.scene.start('MenuScene');
      this.bgMusic = this.sound.add('music', {volume: 0.5});

      this.bgMusic.play();
    }
  }