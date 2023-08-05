module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
  ],
  plugins: ['node'],
  rules: {
    // Enforce consistent indentation (you can adjust the number of spaces as per your preference)
    'indent': ['error', 2],

    // Use single quotes for strings
    'quotes': ['error', 'single'],

    // Enforce semicolon usage
    'semi': ['error', 'always'],

    // Require variables to be declared before use (helps avoid accidental global variables)
    'no-use-before-define': ['error', { 'functions': false }],

    // Disallow unused variables (helps keep your code clean)
    'no-unused-vars': ['error', { 'args': 'none' }],

    // Enforce camelCase naming convention (recommended for JavaScript)
    'camelcase': ['error', { 'properties': 'never' }],

    // Avoid console.log and similar debugging statements in production code
    'no-console': 'warn',

    // Enforce curly braces for control statements even for single-line blocks
    'curly': ['error', 'multi-line'],

    // Enforce proper spacing inside object literals
    'object-curly-spacing': ['error', 'always'],

    // Require the use of === and !== to prevent type coercion issues
    'eqeqeq': 'error',

    // Disallow the use of eval() due to security and performance concerns
    'no-eval': 'error',

    // Disallow the use of `var` (use let/const instead)
    'no-var': 'error',

    // Enforce consistent spacing after keywords like if/else/for/while
    'keyword-spacing': 'error',

    // Enforce consistent spacing inside function parentheses
    'space-in-parens': ['error', 'never'],

    // Disallow trailing whitespace
    'no-trailing-spaces': 'error',

    // Require a blank line before return statements
    'padding-line-between-statements': [
      'error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
    ],
  },
};