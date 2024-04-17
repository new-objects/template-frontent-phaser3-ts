import { AbstractGame } from "./AbstractGame.ts";

export default class Game extends AbstractGame {
  constructor() {
    super("Game");
  }

  create() {
    this.add.image(400, 300, "sky");
  }
}
