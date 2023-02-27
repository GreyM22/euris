export enum Environment {
  LOCAL = 'local',
  PROD = 'prod'
}

export interface IEnvironment {
  name: Environment;
  production: boolean;
  api_url: string;
}
