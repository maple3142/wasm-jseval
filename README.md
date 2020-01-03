# duktape-eval

A safe **eval** library based on WebAssembly and [Duktape](https://duktape.org/).

[Demo](https://gh.maple3142.net/maple3142/duktape-eval/ae198189baf244ff062901475e8877637d265df3/example/example.html) | [Source code of Demo](https://github.com/maple3142/duktape-eval/blob/master/example/example.html)

## Usage

In node:

```js
const { getInstance } = require('duktape-eval')
getInstance().then(mod => {
	console.log(mod.eval('1+1')) // 2
	const add = mod.newFunction(['a', 'b'], 'return a+b')
	console.log(add(1, 2)) // 3
})
```

In browser:

```html
<script src="https://unpkg.com/duktape-eval"></script>
<script>
	duktapeEval.getInstance().then(mod => {
		console.log(mod.eval('1+1')) // 2
		const add = mod.newFunction(['a', 'b'], 'return a+b')
		console.log(add(1, 2)) // 3
	})
</script>
```

## API

### `duktapeEval.getInstance(): Promise<Instance>`

Returns a Promise to resolve the module instance.

### `Instance`

#### `Instance#eval(code: string): any`

Evaluate JavaScript string in Duktape engine, and return a value.

#### `Instance#newFunction(argnames: string[], body: string): (...any) => any`

Create a function like `new Function` to be called afterward.

## Q&A

### What can it runs?

Whatever [Duktape](https://duktape.org/) can run. Basically ES5 syntax and some ES6, ES7 capabilities.

### How can I pass data to it?

`JSON.stringify` is your friend.

### How can I return data from it?

Just like normal `eval`, for example `var a={};a.prop=1;a` will return `{ prop: 1 }`. But keep in mind, only JSON serializable data can be returned.

### How big is this?

Script size: 348kB
Gzipped size: 154kB
