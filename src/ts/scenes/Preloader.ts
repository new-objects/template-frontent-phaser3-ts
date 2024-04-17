import Phaser from "phaser";
//import { PRELOAD_CONFIG } from "../config.ts";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.image("sky", "assets/sky.png");
  }

  create() {
    this.scene.start("Game");
  }
}
