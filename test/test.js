const assert = require('assert')

require('../duktapeEval')
	.getInstance()
	.then(mod => {
		assert(mod.eval('1+1') === 2)
		assert(mod.eval('var a={m:"hello"};a.m+" world"') === 'hello world')
		const add = mod.newFunction(['a', 'b'], 'return a+b')
		assert(add(1, 2) === 3)
		assert(add(8, 7) === 15)
		const slice = mod.newFunction(
			['arr', 'a', 'b'],
			'return arr.slice(a,b)'
		)
		assert(
			JSON.stringify(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 5)) ===
				'[3,4]'
		)
	})
