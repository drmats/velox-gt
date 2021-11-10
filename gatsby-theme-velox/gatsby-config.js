/**
 * @license BSD-2-Clause
 * @copyright Mat. 2021-present
 */

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-typescript",
            options: {
                isTSX: true,
                jsxPragma: "jsx",
                allExtensions: true,
            },
        },
    ],
};
