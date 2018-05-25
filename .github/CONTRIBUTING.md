The following is a set of guidelines for contributing to earth-ui. Please spend several minutes in reading these guidelines before you create an issue or pull request.

## Branch Organization

According to our [release schedule](https://ui.muwenzi.com/changelog), we'll cut a `feature` branch (e.g. `feature-0.2` for 0.2 release) from `master` every month. If you send a bugfix pull request, please do it against the `master` branch, if it's a feature pull request, please do it against the `feature` branch.

## Bugs

We are using [GitHub Issues](https://github.com/G-Explorer/earth-ui/issues) for bug tracing.

Before you reporting a bug, please make sure you've searched exists issues, and read our [Create issue.md](https://github.com/G-Explorer/earth-ui/wiki/Create-issue).

## Proposing a Change

If you intend to change the public API or introduce new feature, we also recommend use our [Create issue.md](https://github.com/G-Explorer/earth-ui/wiki/Create-issue) to create a feature request issue.

## Your First Pull Request

Working on your first Pull Request? You can learn our Contributing [Contributing workflow.md](https://github.com/G-Explorer/earth-ui/wiki/Contributing-workflow):

If you decide to fix an issue, please be sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you intend to work on it so other people don’t accidentally duplicate your effort.

If somebody claims an issue but doesn’t follow up for more than two weeks, it’s fine to take over it but you should still leave a comment.

## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

**Before submitting a pull request**, please make sure the following is done:

1. Fork the repository and create your branch from [proper branch](#Branch-Organization).
1. Run `npm install` in the repository root.
1. If you’ve fixed a bug or added code that should be tested, add tests!
1. Ensure the test suite passes (npm run test). Tip: `npm test -- --watch TestName` is helpful in development.
1. Run `npm test -- -u` to update [jest snapshot](http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest) and commit these changes as well (if has).
1. Make sure your code lints (npm run lint). Tip: Lint runs automatically when you `git commit`.

## Development Tips

After cloning earth-ui, run `npm install` to fetch its dependencies. Then, you can run several commands:

1. `npm site:dev` runs earth-ui website locally.
1. `npm run lint` checks the code style.
1. `npm run fix` fixes the code style.
1. `npm test` runs the complete test suite.
1. `npm run create` creates a new basic component.
1. `npm run build` creates UMD build files for earth-ui.
1. `npm run release` publishes npm package, [more usage](https://github.com/conventional-changelog/standard-version).
