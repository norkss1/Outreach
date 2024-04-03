export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
        // process `*.tsx` files with `ts-jest`
    },
    modulePaths: ['<rootDir>'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/shared/lib/test/__mocks__/fileMock.ts',
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
}
