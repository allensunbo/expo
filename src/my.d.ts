declare module "my" {
  export interface WithName {
    name: string;
  }
  export class User implements WithName {
    name: string;
    constructor(name:string);
  }
}



