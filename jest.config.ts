/** @type {import("jest").Config} */
import type { Config } from "jest"
const config: Config = {
  testEnvironment: "node",
  roots: ["<rootDir>/__tests__"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  setupFilesAfterEnv: [],
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/index.{js,ts}",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {},
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  verbose: true
}
export default config
