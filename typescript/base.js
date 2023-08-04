module.exports = {
    "plugins": ["@typescript-eslint"],
    "extends": [
        "plugin:eslint-comments/recommended",
        "@libra-foundation/eslint-config"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
      "rules": {
        "eslint-comments/require-description": [
          "error",
          {"ignore": ["eslint-enable"]}
        ],
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": [
          "warn",
          {"default": "generic", "readonly": "generic"}
        ],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/ban-types": [
          "error",
          {
            "types": {
              "object": {
                "message": "In TS object mean any JS object. This type is way too broad, consider narrowing it down."
              },
              "Function": {
                "message": "The Function type is too braod. Using this type will cause you trouble with readonly.",
                "fixWith": "()=>void"
              },
              "CallableFunction": {
                "message": "The CallableFunction type is too braod. Using this type will cause you trouble with readonly.",
                "fixWith": "()=>void"
              },
              "NewableFunction": {
                "message": "The NewableFunction type is too braod. Using this type will cause you trouble with readonly.",
                "fixWith": "()=>void"
              },
              "any": {
                "message": "The any type is unsafe and too broad. Consider using a more constrained type if possible.",
                "fixWith": "unknown"
              }
            },
            "extendDefaults": true
          }
        ],
        "@typescript-eslint/class-literal-property-style": "warn",
        
        "class-methods-use-this": "off",
        "@typescript-eslint/class-methods-use-this": "error",

        "@typescript-eslint/consistent-generic-constructors": "warn",
        "@typescript-eslint/consistent-indexed-object-style": "warn",
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/consistent-type-definitions": "warn",
        "@typescript-eslint/consistent-type-exports": "warn",
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {"fixStyle": "inline-type-imports"}
        ],
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/explicit-member-accessibility": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/method-signature-style": ["warn", "property"],
        "@typescript-eslint/no-array-constructor": "error",
        "@typescript-eslint/no-base-to-string": "warn",
        "@typescript-eslint/no-confusing-non-null-assertion": "warn",
        "@typescript-eslint/no-confusing-void-expression": "warn",
        "@typescript-eslint/no-duplicate-enum-values": "warn",
        "@typescript-eslint/no-dynamic-delete": "warn",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-invalid-void-type": "warn",
        "@typescript-eslint/no-meaningless-void-operator": "warn",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/no-non-null-assertion": "warn",
        "@typescript-eslint/no-redundant-type-constituents": "warn",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-declaration-merging": "warn",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "@typescript-eslint/no-useless-empty-export": "warn",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/parameter-properties": "warn",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-enum-initializers": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": [
          "warn",
          {
            "ignoreConditionalTests": false,
            "ignoreTernaryTests": false,
            "ignoreMixedLogicalExpressions": false
          }
        ],
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-reduce-type-parameter": "warn",
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/promise-function-async": "warn",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/sort-type-constituents": "warn",
        "@typescript-eslint/strict-boolean-expressions": "warn",
        "@typescript-eslint/typedef": [
          "warn",
          {"variableDeclaration": true, "variableDeclarationIgnoreFunction": true}
        ],
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/default-param-last": "warn",
        "@typescript-eslint/dot-notation": "warn",
        "@typescript-eslint/no-dupe-class-members": "warn",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-implied-eval": "error",
        "@typescript-eslint/no-invalid-this": "warn",
        "@typescript-eslint/no-loop-func": "warn",
        "@typescript-eslint/no-loss-of-precision": "error",
        "@typescript-eslint/no-redeclare": "warn",
        "@typescript-eslint/no-throw-literal": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/return-await": ["warn", "always"],
    }
}
