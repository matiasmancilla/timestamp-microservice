module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'consistent-return': 'off',
        'import/no-cycle': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': [2, { props: false }],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'if' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: '*', next: 'function' },
            { blankLine: 'always', prev: '*', next: 'try' },
        ],
        'no-shadow': 'off',
        'class-methods-use-this': 'off',
    },
};
