export type PackagerOptions = {
  name: string;
  details: string;
};

export class Packager {
  private static packageName: string;
  private static packageDetails: string;

  public constructor(options: PackagerOptions) {
    this.name = options.name;
    this.details = options.details;
  }

  public init() {
    console.group();
    console.log('the name that was set is: ', this.name);
    console.log('this details that were set are: ', this.details);

    return console.groupEnd();
  }

  public get name() {
    return this.name;
  }

  public set name(name: string) {
    this.name = name;
  }

  public get details(): string {
    return this.details;
  }

  public set details(value: string) {
    this.details = value;
  }
}

export const packager = (options: PackagerOptions) => new Packager(options);