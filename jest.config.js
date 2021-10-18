/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
    // preset: 'ts-jest',
    preset: 'ts-jest/presets/js-with-babel', // TypeScript files will be handled by ts-jest, and JavaScript files will be handled by babel-jest. See https://huafu.github.io/ts-jest/user/config/#the-3-presets.
    testEnvironment: 'node',
    moduleNameMapper: {
        // Files Mocks see: https://jestjs.io/docs/webpack
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__tests__/mocks/fileMock.ts',
        // Styles Mocks see: https://jestjs.io/docs/webpack
        '\\.(css|scss)$': '<rootDir>/__tests__/mocks/styleMock.ts',

        // Custom Paths
        '^__tests__/(.+)': ['<rootDir>/__tests__/$1'],
        '^assets/(.*)$': ['<rootDir>/assets/$1'],
        '^common/(.*)$': ['<rootDir>/common/$1'],
        '^common/assets/(.*)$': ['<rootDir>/common/assets/$1'],
        '^common/hooks/(.*)$': ['<rootDir>/common/hooks/$1'],
        '^common/types/(.*)$': ['<rootDir>/common/types/$1'],
        '^common/validators/(.*)$': ['<rootDir>/common/validators/$1'],
        '^components/(.*)$': ['<rootDir>/components/$1'],
        '^components/atoms/(.*)$': ['<rootDir>/components/atoms/$1'],
        '^components/molecules/(.*)$': ['<rootDir>/components/molecules/$1'],
        '^components/organisms/(.*)$': ['<rootDir>/components/organisms/$1'],
        '^layouts/(.*)$': ['<rootDir>/layouts/$1'],
        '^pages/(.*)$': ['<rootDir>/pages/$1'],
        '^public/(.*)$': ['<rootDir>/public/$1'],
        '^services/api': ['<rootDir>/services/api/index.ts'],
        '^services/api/(.*)$': ['<rootDir>/services/api/$1'],
        '^services/auth/(.*)$': ['<rootDir>/services/auth/$1'],
        '^services/auth/(.*)$': ['<rootDir>/services/auth/$1'],
        '^store/(.*)$': ['<rootDir>/store/$1'],
        '^store/index': ['<rootDir>/store/index.ts'],
        '^store/api/(.*)$': ['<rootDir>/store/api/$1'],
        '^store/auth/(.*)$': ['<rootDir>/store/auth/$1'],
    },
    // All imported modules in your tests should be mocked automatically
    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "/tmp/jest_rs",

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates whether the coverage information should be collected while executing the test
    // collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!index.tsx',
        '!index.ts',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/public/**',
        '!**/build/**',
        '!**/dist/**',
        '!**/src/types/**',
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: '<rootDir>/__tests__/coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/vendor/',
        '/public/',
        '/build/',
        '/dist/',
        '/types/',
        '/coverage/',
        'index.tsx',
        'index.ts',
    ],

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 50,
            functions: 50,
            lines: 50,
            statements: 50,
        },
    },

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // extensionsToTreatAsEsm: ['.ts'],

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,

    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments
    globals: {
        __DEVELOPMENT__: true,
        __PRODUCTION__: true,
        __APP_NAME__: true,
        __API_URL__: true,
        // 'ts-jest': {
        //     useESM: true,
        // },
    },

    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // An array of file extensions your modules use
    // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

    // moduleNameMapper: {
    //     '^(\\.{1,2}/.*)\\.js$': '$1',
    // },

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},

    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/coverage/'],

    // Activates notifications for test results
    // notify: false,

    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",

    // A preset that is used as a base for Jest's configuration
    // preset: undefined,

    // Run tests from one or more projects
    // projects: undefined,

    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,

    // Automatically reset mock state between every test
    resetMocks: true,

    // Reset the module registry before running each individual test
    resetModules: true,

    // A path to a custom resolver
    // resolver: undefined,

    // Automatically restore mock state between every test
    // restoreMocks: false,

    // The root directory that Jest should scan for tests and modules within
    rootDir: 'src',

    // A list of paths to directories that Jest should use to search for files in
    // roots: ['src'],

    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",

    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['<rootDir>/__tests__/helpers/jestSetup.ts'],

    // The number of seconds after which a test is considered as slow and reported as such in the results.
    slowTestThreshold: 60,

    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // The glob patterns Jest uses to detect test files
    testMatch: [
        // '**/__tests__/**/*.[jt]s?(x)',
        '**/__tests__/**/?(*.)+(spec|test).[tj]s?(x)',
    ],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/public/',
        '<rootDir>/build/',
        '<rootDir>/dist/',
        '<rootDir>/coverage/',
    ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    testURL: 'http://localhost:5010',

    // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
    // timers: "real",

    // A map from regular expressions to paths to transformers
    // transform: undefined,

    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    transformIgnorePatterns: ['<rootDir>/node_modules/'],

    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: ['.scripts.js'],

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],

    // Whether to use watchman for file crawling
    // watchman: true,
}
