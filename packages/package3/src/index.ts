import Manager from '@aaa/package2';
import {Packager} from '@aaa/package1';
import moment from 'moment';

export type PlayerOptions = {
  firstName: string;
  lastName: string;
  dayOfBirth: Date;
  packager: Packager;
  gender: 'm' | 'f' | 'o';
};

export type PlayerInterface = {
  readonly playerName: string;
  readonly dayOfBirth: Date;
  calculateAge(): number;
} & PlayerOptions;

export class Player extends Manager implements PlayerInterface {
  public playerName: string;
  public dayOfBirth: PlayerOptions['dayOfBirth'];
  public firstName: PlayerOptions['firstName'];
  public lastName: PlayerOptions['lastName'];
  public gender: PlayerOptions['gender'];
  public packager: PlayerOptions['packager'];

  public constructor(options: PlayerOptions) {
    super(
      {
        name: `${options.firstName} ${options.lastName}`,
        version: '1.0.0',
      }
    );

    this.dayOfBirth = options.dayOfBirth;
    this.playerName = `${options.firstName} ${options.lastName}`;
    this.firstName = options.firstName;
    this.lastName = options.lastName;
    this.gender = options.gender;
    this.packager = options.packager;
  }

  public calculateAge(): number {
    return moment().diff(moment(this.dayOfBirth), 'years');
  }
}

export const player = (options: PlayerOptions) => new Player(options);

export default Player;