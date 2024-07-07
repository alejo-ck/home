config = {
    moduleNameMapper: {
        "^.+\\.(css|less)$": "<rootDir>/test/CSSStub.js",
        "react-markdown": "<rootDir>/test/ReactMarkdownStub.js"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!(react-markdown)/)"
    ],
    testEnvironment: 'jsdom'
};

module.exports = config;