module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/$1',
    },
};