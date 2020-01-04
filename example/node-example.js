const testString = `
var obj={}
obj.a=7
obj.b=8
obj.c=[2,3,4]
var sum=0
for(var k in obj){
	var val=obj[k]
	if(Array.isArray(val)){
		sum+=val.reduce(function(a,v){return a+v})
	}
	else{
		sum+=val
	}
}
sum
`
const { duktapeEval, quickjsEval } = require('../index')
console.log('eval: ', eval(testString))
duktapeEval.getInstance().then(mod => {
	console.log('duktapeEval: ', mod.eval(testString))
})
quickjsEval.getInstance().then(mod => {
	console.log('quickjsEval: ', mod.eval(testString))
})
