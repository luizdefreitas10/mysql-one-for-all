import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _environment: (SimpleFighter | Fighter)[];

  constructor(player: Fighter, environment: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._environment = environment;
  }

  fight(): number {
    if (this._player.lifePoints >= 0 && this
      ._environment.some((environment) => environment.lifePoints >= 0)) {
      this._environment.map((environment) => this._player.attack(environment));
      this._environment.map((environment) => environment.attack(this._player));
    }

    return super.fight();
  }
}