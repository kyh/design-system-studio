# Design System Studio

_to be completed_

### Building This Repo

1.  **Install Yarn**

    for more options see https://legacy.yarnpkg.com/en/docs/install#mac-stable

    ```sh
    curl -o- -L https://yarnpkg.com/install.sh | bash
    ```

1.  **Install Dependencies**

    This project is using [Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces). Yarn will install dependencies for all the packages.

    ```sh
    yarn
    ```

### Development

1.  **Run Studio in development mode**

    ```sh
    yarn workspace @dss/app start
    ```

    The Studio is now running at `http://localhost:3000/`

1.  **Run UI in Storybook**

    ```sh
    yarn workspace @dss/proto start
    // in a new tab
    yarn workspace @dss/proto storybook
    ```

    The UI is now running at `http://localhost:6006/`

### Resources

- [Design Systems for developers](https://www.learnstorybook.com/design-systems-for-developers/) - Storybook's canonical guide to design systems
- [How styled components work](https://rangle.io/blog/styled-components-styled-systems-and-how-they-work/)
