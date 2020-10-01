"use strict";

module.exports = {
    root: true,
    ignorePatterns: ["node_modules", "build", "deploy"],
    extends: ["./eslint_rules/base.js", "./eslint_rules/imports.js", "./eslint_rules/prettier.js"],
    overrides: [
        /* typescript code */
        {
            files: "./**/*.ts",
            extends: ["./eslint_rules/typescript.js", "prettier/@typescript-eslint"],
            rules: {
                // re-enable rules softly disabled by prettier/@typescript-eslint
                "@typescript-eslint/quotes": ["error", "double", {allowTemplateLiterals: false}],
            },
        },
        /* web application */
        {
            files: ["./src/**/*.js", "./src/**/*.ts"],
            extends: ["./eslint_rules/imports_webapp.js"],
            env: {
                browser: true,
                es2020: true,
            },
            globals: {
                NODE_ENV: true,
                RELEASE_VER: true,
            },
            overrides: [
                {
                    files: "./src/**/*.js",
                    parser: "babel-eslint",
                    parserOptions: {
                        sourceType: "module",
                    },
                },
            ],
        },
        /* tests code */
        {
            files: "./test/**/*.{js,ts}",
            excludedFiles: "./test/karma.conf.js",
            extends: ["./eslint_rules/relax_tests.js", "./eslint_rules/imports_tests.js"],
            env: {
                browser: true,
                mocha: true,
                es2020: true,
            },
            globals: {
                require: true,
                assert: true,
            },
            overrides: [
                {
                    files: "./test/**/*.js",
                    parser: "babel-eslint",
                    parserOptions: {
                        sourceType: "module",
                    },
                },
            ],
        },
        /* config code */
        {
            files: [
                "./webpack/**/*.js",
                "./test/karma.conf.js",
                "./scripts/**/*.js",
                "./eslint_rules/*.js",
                "./.eslintrc.js",
            ],
            env: {
                node: true,
                es2017: true,
            },
            extends: ["./eslint_rules/imports_configs.js"],
        },
        /* command line scripts */
        {
            files: ["./scripts/build.js", "./webpack/webpack.config.js"],
            rules: {
                "no-console": "off",
            },
        },
    ],
};
