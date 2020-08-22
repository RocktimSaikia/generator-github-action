<p align="center"><img src="https://github.com/rocktimsaikia/generator-github-action/blob/master/.github/logo.png?raw=true" height="50px"></p>

<h1 align="center"> generator-github-action</h1>

<p align="center"> Yeoman generator for javascrpt <a href="https://github.com/actions/javascript-action">Github action</a></p>

<p align="center">
<img src="https://github.com/rocktimsaikia/generator-github-action/workflows/build/badge.svg"/>
<img alt="NPM" src="https://img.shields.io/npm/l/generator-github-action"/>
<img alt="npm" src="https://img.shields.io/npm/v/generator-github-action"/>
</p>
<br><br>

<p align="center"><a href="#"><img src="https://github.com/rocktimsaikia/generator-github-action/blob/master/.github/frame.png" height="400px"></a></p>

> A yeoman generator for scaffolding your javascript Github Action. 🦄

### Installation

```bash
npm install -g yo
npm install -g generator-github-action
```

Then generate your new project:

```bash
yo github-action
```

### What's included ?

- It uses the [github's original javascript action boilerplate][github-action] as it's base template.
- It uses [@vercel/ncc][vercel] for compiling the module instead of [@zeit/ncc][zeit] which has been deprecated.

### License

Apache-2.0 © [Rocktim Saikia](https://rocktim.xyz)

[vercel]: https://www.npmjs.com/package/@vercel/ncc
[zeit]: https://www.npmjs.com/package/@zeit/ncc
[github-action]: https://github.com/actions/javascript-action
[npm-image]: https://badge.fury.io/js/generator-github-action.svg
[npm-url]: https://npmjs.org/package/generator-github-action
