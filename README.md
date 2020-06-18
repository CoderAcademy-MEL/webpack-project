# ES6 Modules and Webpack

## Getting Started

This project is built with webpack.

You'll need to run the following commands:

1. Install dependencies

    ```
    npm install
    ```

2. Bundle with webpack and enter into watch mode

    ```
    npm run watch
    ```

## Review 

Today we learnt about ES6 modules and webpack.

Here are some review notes that we went through:

1. What is a js package manager?
- manages packages, updates them, installs them
- yarn, npm

2. What is a js bundler?
- combines code into one file
- converts commonjs into browser js
- it also images and css (SASS, styled components, css modules)

3. What were some of the problems with es6 modules without a bundler?
- doesn't work with node, commonjs (require)
- crazy file path to figure out entry point
- loading sucked, it made 640 network requests for lodash-es

4. Why do we only need webpack in development?
- outputs code
- that code can the be used in production
- send the webpack compressed code to netlify

