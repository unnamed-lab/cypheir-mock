# Contributing to Cypheir Mock

Thank you for your interest in contributing to Cypheir Mock! We appreciate your support and look forward to your contributions. This guide will help you understand the directory structure.

## Getting Started

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@unnamedcodes](https://twitter.com/unnamedcodes).

### Fork and Clone the Repository

1. **Fork this repository**

   Click [here](https://github.com/unnamed-lab/cypheir-mock/fork) to fork the repository.

2. **Clone your forked repository to your local machine**

    ```bash
    git clone https://github.com/<YOUR_USERNAME>/cypheir-mock.git
    ```

3. **Navigate to the project directory**

    ```bash
    cd cypheir-mock
    ```

4. **Create a new branch for your changes**

    ```bash
    git checkout -b my-new-branch
    ```

5. **Install dependencies**

    ```bash
    pnpm i
    ```

6. **Create a `.env.local` file**

    ```bash
    touch .env.local && echo "PROJECT_STATUS=development" > .env.local
    ```

7. **Run the project**

    ```bash
    pnpm dev
    ```

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the form component`

## Testing

Tests are written using [Jest](https://jestjs.io/). You can run all the tests from the root of the repository.

```bash
pnpm test
```

The test saving convention goes like this:

```bash
app
└── components
    └── form
        └── __tests__
            ├── button.test.tsx
            └── inputText.test.tsx
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features, please include tests.

## Ask for Help

For any help or questions, please open a new GitHub issue and we will get back to you :)
