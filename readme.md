# Stackbear

![Size](https://badgen.net/bundlephobia/minzip/stackbear)
![License](https://badgen.net/github/license/turbocouch/stackbear)
![Commits](https://badgen.net/github/commits/turbocouch/stackbear)
![NPM Version](https://badgen.net/npm/v/stackbear)
![Dependencies](https://badgen.net/bundlephobia/dependency-count/stackbear)

An npm package for managing stackbear files.

## Download

```bash
npm install stackbear
```

## Usage

The stackbear api is based on a single class: `Stack`. The stack class consists of a few static functions for creating stacks, and multiple prototype functions for managing and editing the stacks.

To import the library and create a stack, simply use the below code. The code shows the Node.js require syntax, but the ES6 import syntax will also work for stackbear.

```javascript
const Stack = require("stackbear");
const techstack = new Stack("version-one");

/** OR **/
import Stack from "stackbear";
const techstack = new Stack("version-one");
```
