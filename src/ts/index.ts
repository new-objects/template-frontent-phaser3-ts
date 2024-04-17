import "../css/style.css";

import Phaser from "phaser";
import Preloader from "./scenes/Preloader.ts";
import Game from "./scenes/Game.ts";

export default new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
  },
  scene: [Preloader, Game],
  parent: "game",
});
