const { pathsToModuleNameMapper } = require('ts-jest');
/*const { compilerOptions } = require('../tsconfig.json');

module.exports = {
    clearMocks: true,
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>',
    }),
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'html', 'text'],
    coveragePathIgnorePatterns: [
      '../node_modules/'
    ],
    preset: 'ts-jest',
    testEnvironment: 'node',
    modulePathIgnorePatterns: ['dist', 'node_modules', 'coverage'],
    testMatch: ['**/  /*?(*.)+(spec|test).(js|ts|tsx)'],*/
 // };