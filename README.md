# wasm-jseval

A safe **eval** library based on WebAssembly and [Duktape](https://duktape.org/)/[QuickJS](https://bellard.org/quickjs/).

[Duktape Demo](https://gh.maple3142.net/maple3142/duktape-eval/ae198189baf244ff062901475e8877637d265df3/example/example.html) | [Source code of Duktape Demo](https://github.com/maple3142/duktape-eval/blob/master/example/example.html)

## Usage

In node:

```js
const { duktapeEval, quickjsEval } = require('wasm-jseval')
duktapeEval.getInstance().then(mod => {
	console.log(mod.eval('1+1')) // 2
	const add = mod.newFunction(['a', 'b'], 'return a+b')
	console.log(add(1, 2)) // 3
})
quickjsEval.getInstance().then(mod => {
	console.log(mod.eval('1+1')) // 2
	const add = mod.newFunction(['a', 'b'], 'return a+b')
	console.log(add(1, 2)) // 3
})
```

In browser:

```html
<script src="https://unpkg.com/wasm-jseval/duktapeEval.js"></script>
<!-- <script src="https://unpkg.com/wasm-jseval/quickjsEval.js"></script> -->
<script>
	// or quickjsEval
	duktapeEval.getInstance().then(mod => {
		console.log(mod.eval('1+1')) // 2
		const add = mod.newFunction(['a', 'b'], 'return a+b')
		console.log(add(1, 2)) // 3
	})
</script>
```

## API

### `duktapeEval.getInstance(): Promise<Instance>`

Returns a Promise to resolve the duktapeEval instance.

### `quickjsEval.getInstance(): Promise<Instance>`

Returns a Promise to resolve the quickjsEval instance.

### `Instance`

#### `Instance#eval(code: string): any`

Evaluate JavaScript string in Duktape engine, and return a value.

#### `Instance#newFunction(argnames: string[], body: string): (...any) => any`

Create a function like `new Function` to be called afterward.

## Q&A

### What can it runs?

`duktapeEval` can run ES5 syntax and some ES6, ES7 capabilities. `quickjsEval` can run almost complete feature set of ES10.

### Why two version?

`duktapeEval` is smaller, but less feature. `quickjsEval` has a more complete JavaScript support, but it result in bigger size.

### How can I pass data to it?

`JSON.stringify` is your friend. `newFunction` is a good choice too.

### How can I return data from it?

Just like normal `eval`, for example `var a={};a.prop=1;a` will return `{ prop: 1 }`. But keep in mind, only JSON serializable data can be returned.

### How big is this?

`duktapeEval` is about 348kB, and gzipped version is 154kB.
`quickjsEval` is about 484kB, and gzipped version is 225kB.
