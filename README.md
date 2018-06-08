# @intellihr/ui-components

A common React components library that is used in our company.

## Badges

### Master

* ![Coverage](https://gitlab.com/intellihr/ui-components/badges/master/coverage.svg)
* ![Build status](https://gitlab.com/intellihr/ui-components/badges/master/build.svg)

### Develop

* ![Coverage](https://gitlab.com/intellihr/ui-components/badges/develop/coverage.svg)
* ![Build status](https://gitlab.com/intellihr/ui-components/badges/develop/build.svg)

## Table of Contents

* [Get Started (Integrate to Your Project)](#get-started-integrate-to-your-project)
* [Local Development Guide](#local-development-guide)
    * [Add Dependency](#add-dependency)
        * [Add `dependencies`](#add-dependencies)
        * [Add `devDependencies`](#add-devdependencies)
        * [Add `peerDependencies`](#add-peerdependencies)
    * [Docker](#docker)
        * [Build Image](#build-image)
        * [Run Inside Docker](#run-inside-docker)
    * [Install Dependency](#install-dependency)
    * [Development](#development)
    * [Lint](#lint)
* [Customisation](#customisation)

## Get Started (Integrate to Your Project)

1. It's simple. Let's add that into your project:

    ```bash
    yarn add @intellihr/ui-components react react-dom
    # or
    npm i @intellihr/ui-components react react-dom
    ```

2. Then included the project css and this project's components css into your project's entry point. e.g. in CRA, it's the `index.js`:

    ```javascript
    import '@intellihr/ui-components/dist/index.css'
    import '@intellihr/ui-components/dist/ui-components.css'
    ``` 

3. Make sure your project knows how to handle css file type, which is quite simple if you use webpack(and normally your project should have already setup):

    ```javascript
    {
      test: /\.css$/,
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader')
        }
      ]
    }

    ```

4. Then you could start using the components! Test out by:

    ```javascript
    import { Callout } from '@intellihr/ui-components'

    <Callout type="info">
      <div className="title">
      Information!
      </div>
      Bringing you the lasted news.
    </Callout>
    ```

## Local Development Guide

### Add Dependency

For Details Check [Here](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/)

![Dependency Mind Map](https://drive.google.com/uc?id=1vg0quZCNcOvm7vz10rIK6WFqmIH_VHy3)

#### Add `devDependencies`

    ```bash
    yarn add -D some-library
    ```

#### Add `dependencies`

    ```bash
    yarn add -E some-library
    ```
    
#### Add `peerDependencies`

1. Add `devDependencies`

    ```bash
    yarn add -D some-library
    ```

2. Update `package.json` to add `peerDependencies`

    ```json
    {
      "devDependencies": {
        "some-library": "^1.0.0"
      },
      "peerDependencies": {
        "some-library": "^1.0.0"
      }
    }
    ```

3. Update your consumer to include your `peerDependencies`

    ```bash
    npm i --save-dev some-library
    # or
    yarn add -D some-library
    ```

### Docker

#### Build Imange

```bash
docker-compose build --force-rm code
# or without mounting node_module
docker-composer build --force-rm code-mac
```

#### Run Inside Docker

```bash
docker-compose run --rm code /bin/sh
# or without mounting node_module
docker-composer run --rm code-mac /bin/sh
```

### Install Dependency

```bash
yarn
```

### Development

To preview the components,
we could write a example usage in the Markdown file
with JSX syntax in the component folder, e.g. `Callout.examples.md`

```jsx
<Callout type="info">
  <div className="title">
  Information!
  </div>
  Bringing you the lasted news.
</Callout>
```

Some development points:

* Tests are written in `.test.tsx` of each component `.tsx` file

* [No default export](https://palantir.github.io/tslint/rules/no-default-export/)

* This project is developed with Typescript

### Lint

Typescript Style Check

```bash
yarn lint
```

with autofix

```bash
yarn lint:fix
```

Sass Style Check

```bash
yarn lint:sass
```

Sass Style Autofix

```bash
yarn lint:sass:fix
```

Styled-Components Check

```bash
yarn lint:css
```

### Code Quality Analysis

```bash
yarn codequality
```

It will then generate `.codeclimate/codeclimate.html`
(Note: This takes time)

## Customisation

If you need a customised e.g. `Callout` component, you could do something like:

```javascript
import { Callout } from '@intellihr/ui-components'
class MyCallout extends React.SFC<MyCalloutProps> {
  render() {
    // ... some of your logic...
    return <Callout {...myLogic} />
  }
}
```
