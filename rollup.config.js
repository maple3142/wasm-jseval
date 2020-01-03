import commonjs from '@rollup/plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
	input: 'src/index.js',
	output: {
		format: 'umd',
		file: 'duktapeEval.js',
		name: 'duktapeEval'
	},
	plugins: [
		commonjs({
			ignore: ['fs', 'path']
		}),
		uglify()
	]
}
