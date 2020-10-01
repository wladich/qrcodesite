"use strict";

module.exports = {
    rules: {
        "import/no-unused-modules": [
            "error",
            {missingExports: true, unusedExports: true, ignoreExports: ["src/index.{js,ts}"]},
        ],
        "import/no-unassigned-import": ["error", {allow: ["**/*.css"]}],
    },
};
