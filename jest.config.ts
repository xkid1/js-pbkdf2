import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/**/*.ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'js', 'json'],
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
    coverageReporters: ['lcov', 'text-summary'],
    collectCoverageFrom: ['src/**/*.ts'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
};

export default config;
