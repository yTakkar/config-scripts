module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-pipeline-operator",
      {
        "proposal": "minimal"
      }
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-do-expressions"
  ]
}