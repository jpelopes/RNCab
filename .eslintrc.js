module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "react-native/react-native": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "react-native"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};