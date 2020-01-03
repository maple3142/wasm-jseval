import ModuleLoader from './eval.js'

var Module = ModuleLoader()
var readyPromise = new Promise(function(res) {
	Module.onRuntimeInitialized = res
})
export function getInstance() {
	return readyPromise.then(function() {
		var rawEval = Module.cwrap('eval', 'string', ['string'])
		function wrappedEval(code) {
			var result = rawEval(code)
			try {
				return JSON.parse(result)
			} catch (e) {
				throw result // stacktrace string
			}
		}
		return {
			eval: wrappedEval,
			newFunction: function(argnames, body) {
				var code = 'function(' + argnames.join(',') + '){' + body + '}'
				return function() {
					var args = []
					for (var i = 0; i < arguments.length; i++) {
						args[i] = JSON.stringify(arguments[i])
					}
					return wrappedEval('(' + code + ')(' + args.join(',') + ')')
				}
			}
		}
	})
}
