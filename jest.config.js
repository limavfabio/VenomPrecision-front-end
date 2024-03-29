export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './babel.config.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
};
