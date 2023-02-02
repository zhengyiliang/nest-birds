module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 数组中第一位为level，可选0,1,2，0为disable，1为warning，2为error，第二位为应用与否，可选always|never，第三位该rule的值。
    'type-enum': [
      2,
      'always',
      // ['feat', 'fix', 'update', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']
      [
        'feat', // Adds a new feature. 新增feature
        'fix', // Solves a bug. 修复bug
        'update', // Update a feature. 更新feature
        'docs', // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'style', // Improves formatting, white-space. 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
        'refactor', // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'test', // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        'chore', // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        'revert', // Reverts a previous commit. 回滚到上一个版本
      ],
    ],
    // 主题句号，默认没有
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};
