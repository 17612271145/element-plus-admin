module.exports = {
    processors: [],
    plugins: [],
    extends: "stylelint-config-standard", // 这是官方推荐的方式
    ignoreFiles: ["node_modules/**", "dist/**"],
    rules: {
        "at-rule-no-unknown": [ true, {
            "ignoreAtRules": [
                "responsive",
                "tailwind"
            ]
        }],
        "indentation": 2,        // 2个空格
        "selector-pseudo-element-no-unknown": [true, {
            "ignorePseudoElements": ["v-deep"]
        }],
        "value-keyword-case": null,
        "no-descending-specificity":null,
        "at-rule-no-unknown":null
    }
}