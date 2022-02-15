import{Config} from '@jest/types';
// const Config = require("@jest/types").Config; 
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom'
};

export default config;
// module.exports = config;

// export async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };