export type ManagerOptions = {
  name: string;
  version: string;
};

export class Manager {
  public managerName: string;
  public managerVersion: string;

  public constructor(options: ManagerOptions) {
    this.managerName = options.name;
    this.managerVersion = options.version;
  }

  public init() {
    console.group();
    console.log('the name that was set is: ', this.managerName);
    console.log('this version that was set is: ', this.managerVersion);

    return console.groupEnd();
  }
}

export const manager = (options: ManagerOptions) => new Manager(options);

export default Manager;