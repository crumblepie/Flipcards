import{Config} from '@jest/types';
// const Config = require("@jest/types").Config; 
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  
}; 

export default config;
// module.exports = config; 

//note: async option 
// export async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };

// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jest-environment-jsdom',
//     transform: {
//       "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
//     },
//     transformIgnorePatterns: [
//       "node_modules/(?!variables/.*)"
//     ]
//   };