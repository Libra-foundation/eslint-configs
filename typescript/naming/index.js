module.exports = {
    "plugins": ["@typescript-eslint"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "rules": {
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            "selector": ["accessor"],
            "format": ["UPPER_CASE", "camelCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["accessor"],
            "format": ["UPPER_CASE", "PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
            "types": ["boolean"],
            "prefix": ["IS_", "is", "HAS_", "has"]
          },
          {
            "selector": [
              "variable",
              "classProperty",
              "typeProperty",
              "parameterProperty"
            ],
            "format": ["PascalCase"],
            "types": ["function"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["variable", "parameter"],
            "modifiers": ["destructured"],
            "format": null
          },
          {
            "selector": ["variable", "parameter"],
            "modifiers": ["destructured"],
            "types": ["boolean", "function"],
            "format": null,
            "prefix": []
          },
          {
            "selector": ["objectLiteralProperty", "objectLiteralMethod"],
            "format": null
          },
          {
            "selector": ["variable"],
            "format": ["UPPER_CASE"],
            "modifiers": ["const"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["variable"],
            "format": ["UPPER_CASE"],
            "modifiers": ["const"],
            "types": ["boolean"],
            "prefix": ["IS_", "HAS_"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["enumMember"],
            "format": ["UPPER_CASE"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["classProperty", "typeProperty", "parameterProperty"],
            "format": ["UPPER_CASE"],
            "modifiers": ["readonly"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["classProperty", "typeProperty", "parameterProperty"],
            "format": ["UPPER_CASE"],
            "modifiers": ["readonly"],
            "types": ["boolean"],
            "prefix": ["IS_", "HAS_"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": [
              "classMethod",
              "typeMethod",
              "classProperty",
              "typeProperty",
              "parameterProperty"
            ],
            "format": ["camelCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid",
            "prefix": []
          },
          {
            "selector": [
              "classProperty",
              "typeProperty",
              "parameterProperty"
            ],
            "format": ["PascalCase"],
            "types": ["boolean"],
            "prefix": ["is", "has"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["parameter", "variable"],
            "format": ["snake_case"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": ["parameter", "variable"],
            "format": ["snake_case"],
            "types": ["boolean"],
            "prefix": ["is_", "has_"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          },
          {
            "selector": [
              "function",
              "class",
              "interface",
              "typeAlias",
              "enum",
              "typeParameter"
            ],
            "format": ["PascalCase"],
            "leadingUnderscore": "forbid",
            "trailingUnderscore": "forbid"
          }
        ]
      }
}