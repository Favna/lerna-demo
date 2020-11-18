import Manager from "@aaa/package2";

export interface PackagerOptions {
  name: string;
  details: string;
}

export class Packager {
  public name: string;
  public details: string;
  public manager: Manager;

  public constructor(options: PackagerOptions) {
    this.name = options.name;
    this.details = options.details;
    this.manager = new Manager({ name, version: "1.0.0" });
  }

  public init() {
    console.group();
    console.log("the name that was set is: ", this.name);
    console.log("this details that were setaud are: blub ", this.details);
    console.log("the manager that was created is: ", this.manager);

    return console.groupEnd();
  }
}

export const packager = (options: PackagerOptions) => new Packager(options);

export default Packager;
