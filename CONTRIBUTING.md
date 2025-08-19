# Contributors guidelines
This document is a listing of the most important points to the Team of this repository for contributing to the official website of Screenfix, especially via bug reports or pull requests.

This project is built with **React + Vite + TailwindCSS**, and will later integrate **MySQL** and **MongoDB**.

> Before contributing, please go read the [getting started](README.md#▶️-getting-started) section of the ``README.md``.
## Table of Content
- [Code Style](#code-style)
- [Branches](#branches)
- [Contributing pull requests](#contributing-pull-requests)
- [Licensing](#licensing)

## Code Style
To have more readability an a clear vision on what you're working on, please make your code clean and maintainable. Make also sure to add comments **only** where you think you need to add some more precisions about the code.

This repository require some respect of coding style based on what you're writting:
- **camelCase** is required for variables and functions names.
- **Pascalcase** is required for Component names
- **kebab-case** is required for assets (images, files, etc.)
you should not use ``console.log`` statements in production code.

## Branches
The source of the website is separated in many different branches:

- The [master branch](https://github.com/Entertainment-Visual-Art-Studio/Screenfix/tree/master): It is the most stable version of the actual version of the repositiory. It contains no fatal bugs and is mainly used to deploy the official website inside a host (currently hostinger).

- The [dev branch](https://github.com/Entertainment-Visual-Art-Studio/Screenfix/tree/dev): It is the main dev branch where people actually work on the website. Every other dev branches will point to that one. It is the most active branch on the repository and it is constantly tested by QA team. It may have some major bugs in it, or even not compile at all. The best way to contribute this branch is by creating an other branch related to it, and then work on the modifications you want to make. This branch contains a CI for testing the deployment of the website directly on Github Pages, to give us an idea on how it will be if we merge it with the master branch.

- **The features branches**: Branches whose name start with ``features/`` are branches created for a specific feature to implement. the branches whose purpose is to improve an already existing feature needs to have the prefix ``features/improve/``.
- **The bugs branches**: Branches whose name start with ``fixes/`` are branches created for a specific issue in the dev branch to fix.

- **The releases branches**: Branches named before an older version of the website are created to keep track of the old archives of the code.

Please, respect all the prefixes related to a points above, and create a single branch for a specific issues (either a feature/improvement or a bug to fix).


## Contributing pull requests
Before starting to contribute, you have to ensure that the actual issue you are working on is validated by the lead dev of this repository. This should make things more organized and save you some times of working that will not be counted.

### Be mindful on your commits
Try to make simple PRs that handle one specific topic. Just like for reporting issues, it's better to open 3 different PRs that each address a different issue than one big PR with three commits. This makes it easier to review, approve, and merge the changes independently.

When updating your fork with upstream changes, please use git pull --rebase to avoid creating "merge commits". Those commits unnecessarily pollute the git history when coming from PRs.

Also try to make commits that bring the engine from one stable state to another stable state, i.e. if your first commit has a bug that you fixed in the second commit, try to merge them together before making your pull request. this includes fixing build issues or typos, fixing fatal compilion issues, etc.

This [Git style guide](https://github.com/agis/git-style-guide) also has some good practices to have in mind.

### Format your commit messages with readability in mind
The way you format your commit messages is quite important to ensure that the commit history and changelog will be easy to read and understand. A Git commit message is formatted as a short title (first line) and an extended description (everything after the first line and an empty separation line).

The short title is the most important part, as it is what will appear in the changelog or in the GitHub interface unless you click the "expand" button. Try to keep that first line under 72 characters, but you can go slightly above if necessary to keep the sentence clear.

It should be written in English, starting with a capital letter, and usually with a verb in past tense. A typical bugfix would start with **"Fixed"**, while the addition of a new feature would start with **"Added"** or **"Improved"** for enchantements. A prefix can be added to specify the website area affected by the commit. Some examples:
- Added button component
- Fixed a bug where the user is stuck on the landing page
- Frontend: Added a Header section

You cannot use very vague prefixes such as ``update`` or ``Misc`` because they are not allowed.

If your commit fixes a reported issue, please include it in the description of the PR (not in the title, or the commit message) using one of the [GitHub closing keywords](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue) such as "Fixed #1234" or "Added #1234". This will cause the issue to be closed automatically if the PR is merged. Adding it to the commit message is easier, but adds a lot of unnecessary updates in the issue distracting from the thread.

If a commit includes multiple changes, you must provide a detailed description of each change in the commit body:

If the summary of all the changes this commit are related, you should precise that in your commit title: ``Added many things``
```
- Added this
- Added that
- Added foo
- Added boo
```

Otherwise, if the summary of all the changes are not, you can use a generic word such as "Did" or "Modified":``Did many things``
```
- Added this
- Removed that
- Fixed foo
- improved boo
```

### Write unit testing
When fixing a bug or contributing a new feature, we recommend including unit tests in the same commit as the rest of the pull request. Unit tests are pieces of code that compare the output to a predetermined expected result to detect regressions. Tests are compiled and run on GitHub Actions for every commit and pull request.

Pull requests that include tests are more likely to be merged, since we can have greater confidence in them not being the target of regressions in the future.

For bugs, the unit tests should cover the functionality that was previously broken. If done well, this ensures regressions won't appear in the future again. For new features, the unit tests should cover the newly added functionality, testing both the "success" and "expected failure" cases if applicable.

This project is using **Vitest** as a framework for testing. You can locally run a test to see if it passed or not, just do ``npm run test`` and look for the status of the one you implemented

## Licensing
By contributing, you agree that your contributions will be licensed under the [license](COPYRIGHT.txt) defined at the root of the repository.

only the Authors of this repository will be credited in the legal mentions of the website.

You need to agree to the License and the terms inside this document to start contributing to the project.

---

All the documentation updates will be managed exclusively by the Lead Developer, Allan Meyland. To contribute at the documentation, you will have to tell him what to add through issues or by any other way of contact except Pull requests.

thank you for joining the screenfix developement team ! 

We hope you the best.

— Allan Meyland
