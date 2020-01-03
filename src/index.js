import ModuleLoader from './eval.js'

var Module = ModuleLoader()
var readyPromise = new Promise(function(res) {
	Module.onRuntimeInitialized = res
})
export function getInstance() {
	return readyPromise.then(function() {
		var rawEval = Module.cwrap('eval', 'string', ['string'])
		return {
			eval: function(code) {
				var result = rawEval(code)
				try {
					return JSON.parse(result)
				} catch (e) {
					throw result // stacktrace string
				}
			}
		}
	})
}
