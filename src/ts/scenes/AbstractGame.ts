import Phaser from "phaser";

export class AbstractGame extends Phaser.Scene {
  protected isGameRunning = false;

  constructor(key: string) {
    super(key);
  }

  get gameHeight() {
    return this.game.config.height as number;
  }

  get gameWidth() {
    return this.game.config.width as number;
  }
}
