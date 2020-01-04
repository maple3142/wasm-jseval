import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default args => {
	const ct = args['config-target']
	if (ct !== 'duktape' && ct !== 'quickjs') {
		console.error('--config-target must be either "duktape" or "quickjs".')
		process.exit()
	}
	return {
		input: 'src/index.js',
		output: {
			format: 'umd',
			file: `${ct}Eval.js`,
			name: `${ct}Eval`
		},
		plugins: [
			commonjs({
				ignore: ['fs', 'path']
			}),
			uglify(),
			{
				resolveId: name => {
					if (name === 'EVALJS') {
						if (ct === 'duktape')
							return __dirname + '/src/duktape-eval.js'
						if (ct === 'quickjs')
							return __dirname + '/src/quickjs-eval.js'
					}
					return null
				}
			}
		]
	}
}
