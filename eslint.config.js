import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
        ],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ["./tsconfig.node.json", "./tsconfig.app.json"],
                tsconfigRootDir: import.meta.dirname,
                projectService: true,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "react-x": reactX,
            "react-dom": reactDom,
        },
        rules: {
            ...react.configs.all.rules,
            "react/react-in-jsx-scope": "off",
            "react/jsx-filename-extension": "off",
            "react/jsx-max-depth": "off",
            "react/forbid-component-props": "off",
            "react/jsx-equals-spacing": [2, "always"],
            "react/jsx-curly-spacing": [2, { when: "always" }],
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
            ...reactX.configs["recommended-typescript"].rules,
            ...reactDom.configs.recommended.rules,
        },
    },
);
