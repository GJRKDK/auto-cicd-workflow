module.exports = {
  testEnvironment: "jsdom", // simulates the DOM for React components
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  // If some JS or JSX files still exist, you can add
  // '^.+\\.(js|jsx)$': 'babel-jest' or 'ts-jest' (with allowJs in tsconfig).
  // testMatch: ["**/?(*.)+(test).[tj]s?(x)"]
};
